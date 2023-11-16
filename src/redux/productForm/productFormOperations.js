import { sendProductData } from './productFormSlice';

export const sendProductFormData = (productData) => async (dispatch) => {
  try {
    // Вызов thunk для отправки данных на сервер
    await dispatch(sendProductData(productData));
    // Можно также дополнительно сбросить форму после успешной отправки
    // dispatch(resetForm());
  } catch (error) {
    console.error('Error sending product data:', error);
    // Здесь можно обработать ошибку, например, показать уведомление пользователю
  }
};
