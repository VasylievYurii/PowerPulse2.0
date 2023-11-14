import {
  ContainerItem,
  Img,
  TextItem,
  NameImg,
  NameCategory,
} from './ExercisesItem.styled';

const ExercisesItem = ({ fig, nameImg, category }) => {
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

export default ExercisesItem;
