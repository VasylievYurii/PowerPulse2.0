import { useDispatch } from 'react-redux';
import DayProducts from '../components/DayProducts';
import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import TitlePage from '../components/TitlePage';
import { getDiaryMealsThunk } from '../redux/diary/diaryOperations';
import DiaryCalendar from '../components/DiaryCalendar';
import { useState } from 'react';
import { format } from 'date-fns';
import { DiaryWrapTitle } from './Diary/Diary.styled';

const Diary = () => {
  const dispatch = useDispatch();

  const getMeal = (diaryData) => {
    dispatch(getDiaryMealsThunk(diaryData));
  };

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd"),
  );

  let newDate = format(new Date(selectedDate), "yyyy-MM-dd");
  console.log('selectedDate:', newDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <SectionTemplate>
      <DiaryWrapTitle>
        <TitlePage>Diary</TitlePage>
        <DiaryCalendar onDateChange={handleDateChange} />
      </DiaryWrapTitle>
      
      <button
        type="button"
        onClick={() => getMeal({data: {"date": "2023-11-12"}})}
        // onClick={() => getMeal(selectedDate)}
      >
        GetMeal
      </button>

      <DayProducts />
    </SectionTemplate>
  );
};

export default Diary;
