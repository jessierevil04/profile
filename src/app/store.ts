import { configureStore, ThunkAction, UnknownAction } from '@reduxjs/toolkit';
import profileReducer from '../features/profile/profileSlice';
import connectReducer from '../features/profile/components/connect/connectSlice';
import openAIReducer from '../features/openai/openAISlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    connect: connectReducer,
    openAI: openAIReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;
