import React from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useAppDispatch } from "../../../../app/hooks";
import { CardState, setCardState } from "./connectSlice";
import { addMessage } from "../../../openai/openAISlice";

export interface Context {
  text: string;
  keywords: string[];
  answer: string;
  options: IMessageOptions;
  card?: CardState;
}

interface IMessageOptions {
  loading?: boolean;
  widget?: string;
  widgetHistory?: boolean;
  delay?: number;
  payload?: any;
}

type Props = {
  createChatBotMessage: any;
  setState: any;
  children: React.DetailedReactHTMLElement<any, HTMLElement>;
};

// Appends `message` to the chatbot message list.
// `prevIndex` is a negative index into the current messages array used to
// locate the most-recently-rendered widget and clear it if widgetHistory is
// not set. -2 is used for bot messages (the last message is the widget
// wrapper, so the real previous message is at -2); -1 is used for user
// (client) messages where no extra wrapper exists.
const updateMessages = (setState: any, message: any, prevIndex: number) => {
  setState((prev: any) => {
    const messages = prev.messages;
    const prevMessage = messages.at(prevIndex);

    if (prevMessage.widget && !prevMessage.widgetHistory) {
      prevMessage.widget = null;
    }

    return {
      ...prev,
      messages: [...prev.messages, message],
    };
  });
};

const ActionProvider: React.FC<Props> = ({
  createChatBotMessage,
  setState,
  children,
}) => {
  const dispatch = useAppDispatch();

  const handleGPTTokenSetting = (context: Context) => {
    handleInput(context);
  };

  const handleOpenAIChatResponse = (context: Context) => {
    handleInput(context);
    // Record the assistant turn in Redux so the full conversation history can
    // be sent back to the API on the next user message
    dispatch(addMessage({ role: "assistant", content: context.answer }));
  };

  const handleOpenAIImageResponse = (context: Context) => {
    if (context.card) {
      dispatch(setCardState(context.card));
    }
    handleInput(context);
  };

  const handleInput = (context: Context) => {
    const botMessage = createChatBotMessage(context.answer, context.options);
    // -2: skip past the widget wrapper that follows the previous bot message
    updateMessages(setState, botMessage, -2);
  };

  const handleSelection = (context: Context) => {
    const clientMessage = createClientMessage(context.text, {});

    if (context.card) {
      dispatch(setCardState(context.card));
    }

    // -1: user messages have no trailing widget, so the previous message is at -1
    updateMessages(setState, clientMessage, -1);
    handleInput(context);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleInput,
            handleSelection,
            handleGPTTokenSetting,
            handleOpenAIChatResponse,
            handleOpenAIImageResponse,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
