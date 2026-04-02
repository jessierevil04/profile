import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat";

// Cache client instances keyed by API key so we don't create a new HTTP client
// on every request. The map is module-scoped; it lives for the page lifetime.
const clientCache = new Map<string, OpenAI>();

// NOTE: dangerouslyAllowBrowser is required here because this app calls the
// OpenAI API directly from the browser. In a production app the API key should
// be kept on a backend proxy to avoid exposure in the client bundle.
const getOpenAI = (apiKey: string): OpenAI => {
  if (!clientCache.has(apiKey)) {
    clientCache.set(
      apiKey,
      new OpenAI({ apiKey, dangerouslyAllowBrowser: true })
    );
  }
  return clientCache.get(apiKey)!;
};

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
      messages,
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
      prompt,
      n: 1,
      size: "512x512",
    });
    callback(image);
  } catch (error) {
    errorCallback(error);
  }
};
