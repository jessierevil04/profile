import { useEffect, createRef } from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import Options from "./widgets/Options";
import Avatar from "@mui/material/Avatar";
import CardWidget from "./widgets/Card";
import StyledBadge from "../../../../components/common/StyledBadge";
import { createChatBotMessage } from "react-chatbot-kit";
import { clear } from "../../../openai/openAISlice";
import { useAppDispatch } from "../../../../app/hooks";
import "react-chatbot-kit/build/main.css";
import "../../styles/connect.css";

interface OpenAI {
  options: string[];
}

interface Details {
  title: string;
  message: string;
  connects: string[];
  openAI: OpenAI;
}

type Props = {
  details: Details;
};

// Module-level ref used by the Card widget to scroll the chat to the bottom
// after a response is rendered. Created once at module load so it remains
// stable across re-renders.
export const chatbotEndRef = createRef<HTMLDivElement>();

const Connect: React.FC<Props> = ({ details }) => {
  const dispatch = useAppDispatch();

  // Clear OpenAI state whenever the chatbot section is mounted
  useEffect(() => {
    dispatch(clear());
  }, [dispatch]);

  const config = {
    initialMessages: [
      createChatBotMessage(details.message, { widget: "options" }),
    ],
    customComponents: {
      header: () => <div></div>,
      botAvatar: () => (
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt="Jessie Brian Revil">J</Avatar>
        </StyledBadge>
      ),
    },
    // Widget registry: each entry maps a widget name (used in bot messages) to
    // its render function and optional list of options to display below it.
    widgets: [
      {
        widgetName: "options",
        widgetFunc: (props: any) => (
          <Options props={props} options={details.connects} />
        ),
        props: undefined,
        mapStateToProps: [],
      },
      {
        widgetName: "card",
        widgetFunc: (props: any) => (
          <>
            <CardWidget />
            <Options props={props} options={details.connects} />
          </>
        ),
        props: undefined,
        mapStateToProps: [],
      },
      {
        // Shown after an OpenAI image generation response
        widgetName: "openAIWidget",
        widgetFunc: (props: any) => (
          <>
            <CardWidget />
            <Options props={props} options={details.openAI.options} />
          </>
        ),
        props: undefined,
        mapStateToProps: [],
      },
      {
        // Shown after an OpenAI chat response
        widgetName: "openai",
        widgetFunc: (props: any) => (
          <>
            <Options props={props} options={details.openAI.options} />
          </>
        ),
        props: undefined,
        mapStateToProps: [],
      },
    ],
  };

  return (
    <div id="chatbotMainContent">
      <div className="title">
        <span>{details.title}</span>
      </div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      {/* Invisible sentinel element scrolled into view after each bot response */}
      <div ref={chatbotEndRef} />
    </div>
  );
};

export default Connect;
