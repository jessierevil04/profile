import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Chip, Zoom, Skeleton } from "@mui/material";
import { useEffect, useState, useMemo, useCallback } from "react";

import "../styles/onlineCert.css";
import PDFViewerDialog from "../../../components/common/PDFViewerDialog";

interface Content {
  title: string;
  type?: string;
  link: string;
}

interface Source {
  title: string;
  certificates: Content[];
}

interface Details {
  title: string;
  sources: Source[];
}

type Props = {
  details: Details;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const STAGGER_MS = 50;

const OnlineCertifications: React.FC<Props> = ({ details }) => {
  const [value, setValue] = useState(0);
  const [display, setDisplay] = useState(false);
  const [pdfOpen, setPDFOpen] = useState(false);
  const [pdfTitle, setPDFTitle] = useState("");
  const [pdf, setPDF] = useState("");

  useEffect(() => {
    setDisplay(true);
    setPDFOpen(false);
  }, []);

  const handleChange = useCallback((_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }, []);

  const handleCertClick = useCallback((title: string, link: string, type?: string) => {
    if (type === "pdf") {
      setPDFOpen(true);
      setPDFTitle(title);
      setPDF(link);
      return;
    }
    setPDFOpen(false);
    window.open(link, "_blank");
  }, []);

  const handlePDFClose = useCallback(() => {
    setPDFOpen(false);
  }, []);

  // Build tab headers and their content panels together.
  // Re-runs when sources data, display state, active tab, or cert click handler changes.
  const { sources, certifications } = useMemo(() => {
    const sources: React.JSX.Element[] = [];
    const certifications: React.JSX.Element[] = [];

    details.sources.forEach((source, sourceIndex) => {
      sources.push(<Tab label={source.title} key={sourceIndex} />);

      const content = source.certificates.map((cert, certIndex) => (
        <Zoom
          className="zoomItem"
          in={display}
          style={{ transitionDelay: display ? `${certIndex * STAGGER_MS}ms` : "0ms" }}
          key={certIndex}
        >
          <div>
            <Chip
              label={cert.title}
              variant="outlined"
              className="certItem"
              onClick={() => handleCertClick(cert.title, cert.link, cert.type)}
            />
          </div>
        </Zoom>
      ));

      // Show skeleton chips while the Zoom animations are not yet triggered
      const SKELETON_WIDTHS = [100, 130, 90, 115, 95, 125];
      const skeleton = !display && (
        <Box sx={{ p: 3 }}>
          {SKELETON_WIDTHS.map((w, i) => (
            <Skeleton
              key={i}
              variant="rounded"
              width={w}
              height={32}
              sx={{ display: "inline-block", m: "6px", borderRadius: "999px" }}
            />
          ))}
        </Box>
      );

      certifications.push(
        <TabPanel value={value} index={sourceIndex} key={sourceIndex}>
          {display ? content : skeleton}
        </TabPanel>
      );
    });

    return { sources, certifications };
  }, [details.sources, display, handleCertClick, value]);

  return (
    <div id="onlineCertMainContent">
      <div className="title">
        <span>{details.title}</span>
      </div>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} centered>
            {sources}
          </Tabs>
        </Box>
        {certifications}
      </Box>

      <PDFViewerDialog
        onClose={handlePDFClose}
        open={pdfOpen}
        pdf={pdf}
        title={pdfTitle}
      />
    </div>
  );
};

export default OnlineCertifications;
