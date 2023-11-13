import { useDispatch } from 'react-redux';
import DayProducts from '../components/DayProducts';
import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import TitlePage from '../components/TitlePage';
import { getDiaryMealsThunk } from '../redux/diary/diaryOperations';
import DiaryCalendar from '../components/DiaryCalendar';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { DiaryWrapTitle } from './Diary/Diary.styled';

const Diary = () => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    dispatch(getDiaryMealsThunk(selectedDate));
  }, [selectedDate]);

  return (
    <SectionTemplate>
      <DiaryWrapTitle>
        <TitlePage>Diary</TitlePage>
        <DiaryCalendar onDateChange={handleDateChange} />
      </DiaryWrapTitle>
      <DayProducts />
    </SectionTemplate>
  );
};

export default Diary;
