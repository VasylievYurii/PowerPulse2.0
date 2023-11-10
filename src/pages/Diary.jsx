import { DayProducts } from '../components/DayProducts';
import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import { TitlePage } from '../components/TitlePage';

const Diary = () => {
  return (
    <SectionTemplate>
      <TitlePage>Diary</TitlePage>
      <DayProducts />
    </SectionTemplate>
  );
};

export default Diary;
