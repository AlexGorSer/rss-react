import { configureStore } from '@reduxjs/toolkit';
import { dataAPI } from './service/DataService';
import formReducer from './slice/Form.slice';
import mainReducer from './slice/Main.slice';

export const store = configureStore({
  reducer: { form: formReducer, main: mainReducer, [dataAPI.reducerPath]: dataAPI.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
