import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import TitlePage from '../components/TitlePage';
import DaySwitch from '../components/DaySwitch';
import DayProducts from '../components/DayProducts';
import DayExercises from '../components/DayExercises';
import DayDashboard from '../components/DayDashboard';
import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import { getDiaryWorkoutThunk } from '../redux/workouts/workoutsOperations';
import { getDiaryMealsThunk } from '../redux/meals/mealsOperations';
import {
  DiaryWrapActivity,
  DiaryWrapContent,
  DiaryWrapTitle,
} from './Diary/Diary.styled';
import { getIndicatorsThunk } from '../redux/userIndicators/userIndicOperations';
import MediaQuery from 'react-responsive';
import { getUserProfile } from '../redux/userProfile/userProfileOperations';

const Diary = () => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const handleDateChange = (date) => {
    const newDate = date.toISOString();
    setSelectedDate(newDate);
  };

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDiaryMealsThunk(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    dispatch(getDiaryWorkoutThunk(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    dispatch(getIndicatorsThunk());
  }, [dispatch]);

  return (
    <SectionTemplate>
      <DiaryWrapTitle>
        <TitlePage>Diary</TitlePage>
        <DaySwitch onDateChange={handleDateChange} />
      </DiaryWrapTitle>
      <MediaQuery maxWidth={765}>
        <DayDashboard />
      </MediaQuery>
      <DiaryWrapContent>
        <DiaryWrapActivity>
          <DayProducts />
          <DayExercises />
        </DiaryWrapActivity>
        <MediaQuery minWidth={768}>
          <DayDashboard />
        </MediaQuery>
      </DiaryWrapContent>
    </SectionTemplate>
  );
};

export default Diary;
