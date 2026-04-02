import { useMemo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/experiences.css";

interface Content {
  date: string;
  icon: any;
  title: string;
  subtitle: string;
  link: string;
  description: string;
}

interface Details {
  title: string;
  contents: Content[];
}

type Props = {
  details: Details;
};

const Experiences: React.FC<Props> = ({ details }) => {
  // Build timeline elements only when the experience data changes
  const contents = useMemo(
    () =>
      details.contents.map((record, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          date={record.date}
          // Click on the element body or its icon both open the linked URL
          onTimelineElementClick={() => window.open(record.link, "_blank")}
          icon={<div className="timelineIcon"><record.icon /></div>}
        >
          <h3 className="vertical-timeline-element-title">{record.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {record.subtitle}
          </h4>
          <p>{record.description}</p>
        </VerticalTimelineElement>
      )),
    [details.contents]
  );

  return (
    <div id="timelineMainContent">
      <div className="title">
        <span>{details.title}</span>
      </div>
      <VerticalTimeline layout="1-column-left">{contents}</VerticalTimeline>
    </div>
  );
};

export default Experiences;
