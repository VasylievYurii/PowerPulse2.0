import { useDispatch } from 'react-redux';
import { DayProducts } from '../components/DayProducts';
import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import TitlePage from '../components/TitlePage';
import { getDiaryMealsThunk } from '../redux/diary/diaryOperations';
import DiaryCalendar from '../components/DiaryCalendar';
import { useState } from 'react';
import { format } from 'date-fns';

const Diary = () => {
  const dispatch = useDispatch();

  const getMeal = (diaryData) => {
    dispatch(getDiaryMealsThunk(diaryData));
  };

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
  );

  let newDate = format(new Date(selectedDate), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  console.log('selectedDate:', newDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <SectionTemplate>
      <DiaryCalendar onDateChange={handleDateChange} />
      <TitlePage>Diary</TitlePage>
      <button
        type="button"
        onClick={() => getMeal('2023-10-10T00:00:00.000+00:00')}
        // onClick={() => getMeal(selectedDate)}
      >
        GetMeal
      </button>

      <DayProducts />
    </SectionTemplate>
  );
};

export default Diary;
