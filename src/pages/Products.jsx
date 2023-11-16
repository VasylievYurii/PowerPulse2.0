import SectionTemplate from '../components/SectionTemplate';
import ProductsFilters from '../components/ProductsFilters';
import TitlePage from '../components/TitlePage';

import { useState } from 'react';
import AddProductForm from '../components/AddProductForm/AddProductForm';
import BasicModalWindow from '../components/BasicModalWindow';

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const MockProductData = {
    _id: { $oid: '5d51694902b2373622ff5773' },
    weight: 100,
    calories: 340,
    category: 'dairy',
    title: 'Danbo cheese',
    groupBloodNotAllowed: {
      1: true,
      2: true,
      3: false,
      4: false,
    },
  };

  return (
    <SectionTemplate>
      <TitlePage>Products page</TitlePage>

      <button type="button" onClick={toggleModal}>
        Open Modal
      </button>
      {showModal && (
        <BasicModalWindow onClick={toggleModal}>
          <AddProductForm
            onCloseModal={toggleModal}
            productData={MockProductData}
          />
        </BasicModalWindow>
      )}

      <ProductsFilters />
    </SectionTemplate>
  );
};

export default Products;
