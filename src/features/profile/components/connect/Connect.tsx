import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import Options from "./widgets/Options";
import Avatar from "@mui/material/Avatar";
import CardWidget from "./widgets/Card";
import StyledBadge from "../../../../components/common/StyledBadge";
import { useRef } from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "../../styles/connect.css";

interface Details {
  title: string;
  message: string;
  connects: string[];
}

type Props = {
  details: Details;
};

export let chatbotEndRef: any;

const Connect: React.FC<Props> = ({ details }) => {
  chatbotEndRef = useRef(null);

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
      <div ref={chatbotEndRef} />
    </div>
  );
};

export default Connect;
