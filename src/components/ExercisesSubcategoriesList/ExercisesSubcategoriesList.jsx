import { WrapperStyled } from './ExercisesSubcategoriesList.styled';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import BasicModalWindow from '../BasicModalWindow';
import AddExerciseSuccess from '../AddExerciseSuccess';

const ExercisesSubcategoriesList = ({ arr }) => {
  const ucFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };
  return (
    <WrapperStyled>
      {arr.map(({ name, imgURL, _id, filter }) => (
        <ExercisesSubcategoriesItem
          key={_id}
          fig={imgURL}
          nameImg={ucFirst(name)}
          category={filter}
        />
      ))}
    </WrapperStyled>
  );
};

export default ExercisesSubcategoriesList;
