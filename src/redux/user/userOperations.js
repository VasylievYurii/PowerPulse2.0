// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://powerpulse-t5-backend.onrender.com/api/';

// export const instance = axios.create({
//   baseURL: 'https://powerpulse-t5-backend.onrender.com/api/',
// });

// export const token = {
//   set: (token) => {
//     instance.defaults.headers['Authorization'] = `Bearer ${token}`;
//   },
//   clear: () => {
//     instance.defaults.headers['Authorization'] = '';
//   },
// };

// export const updateAvatar = createAsyncThunk(
//   'users/updateAvatar',
//   async (file, thunkAPI) => {
//     console.log('updateAvatar in userOperations', file);
//     try {
//       const formData = new FormData();
//       formData.append('avatarURL', file);
//       console.log('try updateAvatar in userOperations', formData);
//       const res = await instance.patch('/users/avatars', formData);
//       console.log(res);
//       console.log(res.data);
//       return res.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   },
// );
