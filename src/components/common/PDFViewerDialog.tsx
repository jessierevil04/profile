
import { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "../../styles/pdfViewerDialog.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export interface Props {
  open: boolean;
  title: string;
  pdf: string;
  onClose: () => void;
}

const PDFViewerDialog: React.FC<Props> = ({ open, title, pdf, onClose }) => {
  const [, setNumPages] = useState<number | null>(null);
  const [pageNumber] = useState(1);

  const handleClose = () => {
    onClose();
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>

      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </Dialog>
  );
};

export default PDFViewerDialog;
