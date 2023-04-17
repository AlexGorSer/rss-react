import { createSlice } from '@reduxjs/toolkit';
import { IApi } from 'components/Main/IMain';

interface InitialState {
  search: string;
  modal: IApi[];
}

const initialState: InitialState = {
  search: '',
  modal: [],
};

export const mainSlice = createSlice({
  name: 'Main State',
  initialState,
  reducers: {
    inputSearch: (state, { payload }) => {
      state.search = payload;
    },
    setModal: (state, { payload }) => {
      state.modal.length = 0;
      state.modal.push(payload);
    },
    emptyModal: (state) => {
      state.modal.length = 0;
    },
  },
});

export const { inputSearch, setModal, emptyModal } = mainSlice.actions;

export default mainSlice.reducer;
