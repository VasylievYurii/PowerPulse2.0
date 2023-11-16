// productFormSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  product: '',
  date: '',
  amount: 0,
  calories: 0,
};

export const setProductData = (state, action) => {
  // Обработка экшена setProductData
  // В этом примере, мы просто объединяем данные из action.payload с текущим состоянием
  // Проверяем, определен ли payload, прежде чем объединять
  return { ...state, ...(action.payload || initialState) };
};

// Thunk для отправки данных на сервер
export const sendProductData = createAsyncThunk(
  'productForm/sendProductData',
  async (productData, { dispatch }) => {
    try {
      // Здесь можно выполнить отправку данных на сервер, например, с использованием fetch или axios
      // После успешной отправки, можно диспатчить событие в стор
      // Здесь мы просто возвращаем полученные данные
      return productData;
    } catch (error) {
      console.error('Error sending product data:', error);
      // Здесь можно обработать ошибку, например, показать уведомление пользователю
      throw error; // Передача ошибки наверх для дальнейшей обработки
    }
  },
);

const productFormSlice = createSlice({
  name: 'productForm',
  initialState,
  reducers: {
    resetForm: (state) => initialState,
    // Добавляем новый экшен setProductData
    setProductData,
  },
  extraReducers: (builder) => {
    // Обработка успешной отправки данных
    builder.addCase(sendProductData.fulfilled, (state, action) => {
      // Действие при успешной отправке данных
      // В этом примере, данные возвращаются из thunk и используются для обновления состояния
      return { ...state, ...(action.payload || initialState) };
    });
  },
});

export const { resetForm } = productFormSlice.actions;
export const productFormReducer = productFormSlice.reducer;
