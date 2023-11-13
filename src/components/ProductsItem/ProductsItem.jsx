import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import BasicModalWindow from '../BasicModalWindow/BasicModalWindow';
import {
  ProductItemContainer,
  TopLineWrapper,
  LeftTopLabelWrapper,
  RightTopBlockWrapper,
  AddButton,
  MiddleLineWrapper,
  RunIconWrapper,
  InfoLineWrapper,
} from './ProductsItem.styled';

const ProductsItem = ({product}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div>
      {showModal && <BasicModalWindow onClick={toggleModal}></BasicModalWindow>}
      <ProductItemContainer>
        <TopLineWrapper>
          <LeftTopLabelWrapper>
            <p>DIET</p>
          </LeftTopLabelWrapper>
          <RightTopBlockWrapper>
            <span></span>
            <p>Recommended or not</p>
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
          <p>Name of product</p>
        </MiddleLineWrapper>
        <InfoLineWrapper>
          <li>
            <p>Calories:<span>value</span></p> 
          </li>
          <li>
            <p>Category:<span>value</span></p> 
          </li>
          <li>
            <p>Weight:<span>value</span></p> 
          </li>
        </InfoLineWrapper>
      </ProductItemContainer>
    </div>
  );
};

export default ProductsItem;
