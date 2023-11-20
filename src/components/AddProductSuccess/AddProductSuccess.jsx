import sprite from '../../assets/sprite.svg';
import {
  ProductForm,
  ImgProduct,
  Title,
  Calories,
  Next,
  ToTheDairy,
} from './AddProductSuccess.styled';
import avocado from '../../assets/avocado.png';
import { useSelector } from 'react-redux';
import { selectIsMealAdd } from '../../redux/selectors';

const AddProductSuccess = ({ onClick }) => {
  const isMealAdd = useSelector(selectIsMealAdd);

  return (
    <ProductForm>
      <ImgProduct src={avocado} alt="avocado" loading="lazy" />
      <Title>Well done</Title>
      <Calories>
        Calories: <span>{isMealAdd?.calories}</span>
      </Calories>
      <Next type="button" onClick={() => onClick()}>
        Next product
      </Next>
      <ToTheDairy to="/diary">
        <span>To the dairy</span>
        <svg>
          <use href={`${sprite}#icon-arrow`} />
        </svg>
      </ToTheDairy>
    </ProductForm>
  );
};

export default AddProductSuccess;
