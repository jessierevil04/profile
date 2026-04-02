import { useEffect, useState, useMemo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { CardActionArea, Zoom } from "@mui/material";
import { Grid } from "@mui/material";
import "../styles/projects.css";

interface Project {
  name: string;
  description: string;
  url: string;
  img: string;
}

interface Details {
  title: string;
  contents: Project[];
}

type Props = {
  details: Details;
};

const STAGGER_MS = 100; // Delay between successive Zoom animations

const Projects: React.FC<Props> = ({ details }) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  }, []);

  // Build project cards only when data or display state changes
  const contents = useMemo(
    () =>
      details.contents.map((project, index) => (
        <Zoom
          className="zoomItem"
          in={display}
          style={{ transitionDelay: display ? `${index * STAGGER_MS}ms` : "0ms" }}
          key={index}
        >
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Card
              sx={{ maxWidth: 345 }}
              onClick={() => window.open(project.url, "_blank")}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.img}
                  alt={project.name}
                  loading="lazy"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Zoom>
      )),
    [details.contents, display]
  );

  return (
    <div id="projectMainContent">
      <div className="title">
        <span>{details.title}</span>
      </div>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {!display
          ? details.contents.map((_, i) => (
              <Grid size={{ xs: 12, sm: 12, md: 4 }} key={i}>
                <Skeleton
                  variant="rectangular"
                  height={140}
                  sx={{ borderRadius: "8px 8px 0 0" }}
                />
                <Skeleton variant="text" sx={{ mt: 1, fontSize: "1.4rem" }} width="55%" />
                <Skeleton variant="text" width="90%" />
                <Skeleton variant="text" width="75%" />
              </Grid>
            ))
          : contents}
      </Grid>
    </div>
  );
};

export default Projects;
