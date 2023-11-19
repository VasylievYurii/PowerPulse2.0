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

const AddProductSuccess = ({ closeAllModal, calories }) => {
  return (
    <ProductForm>
      <ImgProduct src={avocado} alt="avocado" loading="lazy" />
      <Title>Well done</Title>
      <Calories>
        Calories: <span>{calories}</span>
      </Calories>
      <Next type="button" onClick={() => closeAllModal()}>
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
