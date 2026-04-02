import { Chip, Zoom, Divider, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState, useMemo } from "react";
import "../styles/skills.css";

interface Content {
  title: string;
  link: string;
}

interface Details {
  title: string;
  certifications: Content[];
  technologies: Content[];
}

type Props = {
  details: Details;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const STAGGER_MS = 50; // Delay between successive Zoom animations

const Skills: React.FC<Props> = ({ details }) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  }, []);

  // Sort a copy so the prop array is never mutated
  const sortedTech = useMemo(
    () => [...details.technologies].sort((a, b) => a.title.localeCompare(b.title)),
    [details.technologies]
  );

  // Build chip lists only when data or display state changes.
  // Technologies continue the stagger counter from where certifications left off.
  const certifications = useMemo(
    () =>
      details.certifications.map((content, index) => (
        <Zoom
          className="zoomItem"
          in={display}
          style={{ transitionDelay: display ? `${index * STAGGER_MS}ms` : "0ms" }}
          key={index}
        >
          <div>
            <Chip
              label={content.title}
              variant="outlined"
              className="skillItem"
              onClick={() => window.open(content.link, "_blank")}
            />
          </div>
        </Zoom>
      )),
    [details.certifications, display]
  );

  const technologies = useMemo(
    () =>
      sortedTech.map((content, index) => (
        <Zoom
          className="zoomItem"
          in={display}
          style={{
            transitionDelay: display
              ? `${(details.certifications.length + index) * STAGGER_MS}ms`
              : "0ms",
          }}
          key={index}
        >
          <div>
            <Chip
              label={content.title}
              variant="outlined"
              className="skillItem"
              onClick={() => window.open(content.link, "_blank")}
            />
          </div>
        </Zoom>
      )),
    [sortedTech, display, details.certifications.length]
  );

  return (
    <div id="skillsMainContent">
      <div className="title">
        <span>{details.title}</span>
      </div>

      <Grid container columns={2}>
        <Grid size={{ xs: 2, sm: 1, md: 1 }}>
          <Item className="skillsContainer">
            <Divider id="dividerCert">
              <Chip label="Certifications" />
            </Divider>
            {certifications}
          </Item>
        </Grid>
        <Grid size={{ xs: 2, sm: 1, md: 1 }}>
          <Item className="skillsContainer">
            <Divider id="dividerTech">
              <Chip label="Technologies" />
            </Divider>
            {technologies}
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
