import {
  ContainerItem,
  Img,
  TextItem,
  NameImg,
  NameCategory,
} from './ExercisesSubcategoriesItem.styled';

const ExercisesSubcategoriesItem = ({ fig, nameImg, category }) => {
  return (
    <ContainerItem>
      <Img src={fig} />
      <TextItem>
        <NameImg>{nameImg}</NameImg>
        <NameCategory>{category}</NameCategory>
      </TextItem>
    </ContainerItem>
  );
};

export default ExercisesSubcategoriesItem;
