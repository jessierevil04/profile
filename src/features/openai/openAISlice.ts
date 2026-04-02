import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import type { ChatCompletionMessageParam } from "openai/resources/chat";

export enum OpenAIType {
  CHAT,
  IMAGE
}

export interface OpenAIState {
  isEnabled: boolean;
  apiKey?: string;
  type?: OpenAIType;
  messages: ChatCompletionMessageParam[];
}

const initialState: OpenAIState = {
  isEnabled: false,
  messages: [],
};

export const openAISlice = createSlice({
  name: "openAI",
  initialState,
  reducers: {
    setAPIKey: (state, action: PayloadAction<string>) => {
      state.apiKey = action.payload;
    },
    toggleIsOpenAIEnabled: (state) => {
      state.isEnabled = !state.isEnabled;
    },
    clear: (state) => {
      state.isEnabled = false;
      state.messages = [];
      state.type = undefined;
      state.apiKey = '';
    },
    setMessage: (state, action: PayloadAction<ChatCompletionMessageParam[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<ChatCompletionMessageParam>) => {
      state.messages = [...state.messages, action.payload];
    },
    setType: (state, action: PayloadAction<OpenAIType>) => {
      state.type = action.payload;
    }
  },
});

export const { setAPIKey, toggleIsOpenAIEnabled, clear, setMessage, addMessage, setType } = openAISlice.actions;
export const selectAPIKey = (state: RootState) => state.openAI.apiKey;
export const selectIsOpenAIEnabled = (state: RootState) => state.openAI.isEnabled;
export const selectMessages = (state: RootState) => state.openAI.messages;
export const selectType = (state: RootState) => state.openAI.type;

export default openAISlice.reducer;
