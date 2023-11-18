import sprite from '../../assets/sprite.svg';
import {
  ProductForm,
  ImgProduct,
  Title,
  Calories,
  Next,
  ToTheDairy,
} from './AddProductSuccess.styled';

const AddProductSuccess = ({ calories, onClick }) => {
  const handleCloseClick = () => {
    onClick();
  };

  return (
    <ProductForm>
      <ImgProduct src="" alt="" />
      <Title>Well done</Title>
      <Calories>
        Calories: <span>{calories}</span>
      </Calories>
      <Next type="button" onClick={handleCloseClick}>
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
