import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat";

export const postOpenAIChatCompletions = async (
  messages: ChatCompletionMessageParam[],
  apiKey: string,
  callback: (data: any) => void,
  errorCallback: (data: any) => void
) => {
  const openai = getOpenAI(apiKey);

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    });
    callback(completion);
  } catch (error) {
    errorCallback(error);
  }
};

export const postOpenAIImageGeneration = async (
  prompt: string,
  apiKey: string,
  callback: (data: any) => void,
  errorCallback: (data: any) => void
) => {
  const openai = getOpenAI(apiKey);

  try {
    const image = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
    callback(image);
  } catch (error) {
    errorCallback(error);
  }
};

const getOpenAI = (apiKey: string): OpenAI => {
  return new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });
};
