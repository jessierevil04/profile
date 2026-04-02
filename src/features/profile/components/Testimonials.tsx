import { useEffect, useState, useMemo, useCallback } from "react";
import { Zoom } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/testimonials.css";

interface Endorser {
  name: string;
  role: string;
  linkedin: string;
  photo: string;
  initials: string;
}

interface Details {
  title: string;
  note: string;
  linkedinUrl: string;
  contents: Endorser[];
}

type Props = {
  details: Details;
};

const STAGGER_MS = 60;

const Testimonials: React.FC<Props> = ({ details }) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  }, []);

  // Fall back to initials avatar if the LinkedIn CDN photo fails to load
  const handleImgError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      e.currentTarget.style.display = "none";
    },
    []
  );

  const cards = useMemo(
    () =>
      details.contents.map((person, index) => (
        <Zoom
          in={display}
          style={{ transitionDelay: display ? `${index * STAGGER_MS}ms` : "0ms" }}
          key={index}
        >
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="endorserCard"
            >
              <Avatar
                src={person.photo}
                alt={person.name}
                className="endorserAvatar"
                slotProps={{ img: { onError: handleImgError, loading: "lazy" } }}
              >
                {person.initials}
              </Avatar>
              <Typography variant="subtitle2" className="endorserName">
                {person.name}
              </Typography>
              <Typography variant="caption" className="endorserRole">
                {person.role}
              </Typography>
            </a>
          </Grid>
        </Zoom>
      )),
    [details.contents, display, handleImgError]
  );

  return (
    <div id="testimonialsMainContent">
      <div className="title">
        <span>{details.title}</span>
      </div>

      <div className="endorsementNote">
        <LinkedInIcon className="endorsementNoteIcon" />
        <span>{details.note}</span>
      </div>

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {!display
          ? details.contents.map((_, i) => (
              <Grid size={{ xs: 6, sm: 4, md: 3 }} key={i}>
                <div className="endorserCardSkeleton">
                  <Skeleton variant="circular" width={72} height={72} />
                  <Skeleton variant="text" width="70%" sx={{ mt: 1 }} />
                  <Skeleton variant="text" width="90%" />
                </div>
              </Grid>
            ))
          : cards}
      </Grid>
    </div>
  );
};

export default Testimonials;
