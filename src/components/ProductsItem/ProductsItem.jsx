import React, { useState } from 'react';
import BasicModalWindow from '../BasicModalWindow/BasicModalWindow';

const ProductsItem = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div>
      <div>
        {showModal && (
          <BasicModalWindow onClick={toggleModal}>
            This is modal
          </BasicModalWindow>
        )}
      </div>
      <button onClick={toggleModal}></button>
    </div>
  );
};

export default ProductsItem;
