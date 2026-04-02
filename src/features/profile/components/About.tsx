import { useMemo } from "react";
import { Typography } from "@mui/material";
import "../styles/about.css";

interface Content {
  title: string;
  content: string[];
}

interface Details {
  title: string;
  content: Content[];
}

type Props = {
  details: Details;
};

const About: React.FC<Props> = ({ details }) => {
  // Flatten nested content sections into a single element list.
  // Memoized so it only rebuilds when the data prop changes.
  const contents = useMemo(() => {
    const elements: React.JSX.Element[] = [];
    let counter = 0;

    details.content.forEach((desc) => {
      elements.push(
        <Typography variant="h6" className="title" key={++counter}>
          {desc.title}
        </Typography>
      );
      desc.content.forEach((text) => {
        elements.push(
          <Typography variant="subtitle1" className="content" key={++counter}>
            {text}
          </Typography>
        );
      });
    });

    return elements;
  }, [details.content]);

  return (
    <div id="aboutMainContent">
      <div className="title">
        <span>{details.title}</span>
        {contents}
      </div>
    </div>
  );
};

export default About;
