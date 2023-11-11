import { useDispatch } from 'react-redux';
import { DayProducts } from '../components/DayProducts';
import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import TitlePage from '../components/TitlePage';
import { getDiaryMealsThunk } from '../redux/diary/diaryOperations';

const Diary = () => {
  const dispatch = useDispatch();

    const getMeal = (diaryData) => {
        dispatch(getDiaryMealsThunk(diaryData))
  };
  
  return (
    <SectionTemplate>
      <TitlePage>Diary</TitlePage>
      <button type='button' onClick={() => getMeal("2023-10-10T00:00:00.000+00:00")}>GetMeal</button>
      <DayProducts />
    </SectionTemplate>
  );
};

export default Diary;
