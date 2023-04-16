import { createSlice } from '@reduxjs/toolkit';
import { ISubmitData } from 'components/Form/IForm';

interface InitialState {
  userPost: ISubmitData[];
}

const initialState: InitialState = {
  userPost: [],
};

export const formSlice = createSlice({
  name: 'Form array',
  initialState,
  reducers: {
    addFormData: (state, { payload }) => {
      const data = payload;
      state.userPost.push(data);
    },
  },
});

export const { addFormData } = formSlice.actions;

export default formSlice.reducer;
