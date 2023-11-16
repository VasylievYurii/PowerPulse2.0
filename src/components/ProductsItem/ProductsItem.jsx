import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import BasicModalWindow from '../BasicModalWindow/BasicModalWindow';
import AddProductForm from '../AddProductForm/AddProductForm';
import {
  ProductItemContainer,
  TopLineWrapper,
  LeftTopLabelWrapper,
  RightTopBlockWrapper,
  AddButton,
  MiddleLineWrapper,
  RunIconWrapper,
  InfoLineWrapper,
  CategoryWrapper,
} from './ProductsItem.styled';

const ProductsItem = ({ title, calories, category, weight, recommended }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <ProductItemContainer>
      {showModal && <BasicModalWindow onClick={toggleModal} ><AddProductForm calories={calories} onClick={toggleModal} /></BasicModalWindow>}
      <section>
        <TopLineWrapper>
          <LeftTopLabelWrapper>
            <p>DIET</p>
          </LeftTopLabelWrapper>
          <RightTopBlockWrapper>
            {/* <RightTopBlockWrapper isrecommended={recommended ? true : false}> */}
            <span></span>
            <p>{recommended ? `Recommended` : `Not recommended`}</p>
            <AddButton type="button" onClick={toggleModal}>
              <span>Add</span>
              <svg>
                <use href={`${sprite}#icon-next`} />
              </svg>
            </AddButton>
          </RightTopBlockWrapper>
        </TopLineWrapper>
        <MiddleLineWrapper>
          <RunIconWrapper>
            <svg>
              <use href={`${sprite}#icon-run`} />
            </svg>
          </RunIconWrapper>
          <h2>{title}</h2>
        </MiddleLineWrapper>
        <InfoLineWrapper>
          <li>
            <p>
              Calories:<span>{calories}</span>
            </p>
          </li>
          <li>
            <CategoryWrapper>
              Category:<span>{category}</span>
            </CategoryWrapper>
          </li>
          <li>
            <p>
              Weight:<span>{weight}</span>
            </p>
          </li>
        </InfoLineWrapper>
      </section>
    </ProductItemContainer>
  );
};

export default ProductsItem;
