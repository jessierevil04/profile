import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../app/store';

export enum ContentType {
    TEXT,
    IMAGE
  }

export interface CardState {
    header: string;
    content: string;
    contentType: ContentType;
    subcontent: string;
    link: string;
}

export const initialState: CardState = {
    header: '',
    content: '',
    contentType: ContentType.TEXT,
    subcontent: '',
    link: '',
};

export const connectSlice = createSlice({
    name: 'connect',
    initialState,
    reducers: {
        setCardState: (state, action: PayloadAction<CardState>) => {
            state.header = action.payload.header;
            state.content = action.payload.content;
            state.contentType = action.payload.contentType;
            state.subcontent = action.payload.subcontent;
            state.link = action.payload.link;
        },
    }
})

export const { setCardState } = connectSlice.actions;
export const selectCardState = (state: RootState) => state.connect;

export default connectSlice.reducer;