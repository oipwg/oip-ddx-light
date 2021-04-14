import React, { useState } from 'react';
import getIpfsUrl from '../../../../helpers/getIpfsUrl';
import withStyles from 'react-jss';
import { Document, Page } from 'react-pdf';

/*******************************************npm install react-pdf or yarn add react-pdf */

const styles = () => ({
  pdfCont: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  pdfSelf: {
    display: 'flex',
    '& > canvas': {
      height: [800, '!important'],
      width: [700, '!important']
    }
  },
  pdfNone: {
    display: 'none',
    '& > canvas': {
      display: 'none',
      height: [800, '!important'],
      width: [700, '!important']
    }
  },
  '@media (max-device-width: 1600px)': {
    pdfSelf: {
      display: 'flex',
      '& > canvas': {
        height: [600, '!important'],
        width: [400, '!important']
      }
    }
  }
});

/**********************recordPayload prop which holds template information, passed from switchViewer, classes is for the jss styles *********************/
const PdfViewer = ({ recordPayload, classes }) => {
  /**********************Set state with Hooks *********************/
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(1);

  /**********************Get address and filename(if there is one) from props *********************/
  const addressPull =
    recordPayload.record.details.tmpl_8EE48C00.addressDirectory;
  const pdfFile = recordPayload.record.details.tmpl_8EE48C00.fileName;

  /**********************Use getIfps to convert address and filename into accessable URL *********************/
  const pdfSrc = getIpfsUrl({ dirName: addressPull, pdfFile });

  /**********************Function to get the number of pages of the PDF*********************/
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNum === numPages || pageNum === numPages - 1) {
      setPageNum(pageNum);
    } else if (pageNum > 1) {
      setPageNum(pageNum + 2);
    } else {
      setPageNum(pageNum + 1);
    }
  };
  const backPage = () => {
    if (pageNum === 2) {
      setPageNum(pageNum - 1);
    } else if (pageNum === 1) {
      setPageNum(pageNum);
    } else {
      setPageNum(pageNum - 2);
    }
  };

  /**Console logs to check if URL and numPages successfully updated*/
  console.log(pdfSrc);
  // console.log(numPages);
  console.log(pageNum);

  return (
    <div>
      {/**onLoadSuccess is built in with React-Pdf, use it to call function to set state of numPages*/}
      <Document
        file={pdfSrc}
        className={classes.pdfCont}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {/**On click calls setPageNumber to update the state, ternary to stop updating state if no pages to access*/}
        <button onClick={() => backPage()}>Back</button>
        <Page pageNumber={pageNum} className={classes.pdfSelf} />
        {/**Conditional to show first page if odd number of pages, otherwise you will get No page found, thought it looked good with front and back as end */}
        <Page
          pageNumber={pageNum + 1 > numPages ? 1 : pageNum + 1}
          className={pageNum > 1 ? classes.pdfSelf : classes.pdfNone}
        />
        <button onClick={() => nextPage()}>Next</button>
      </Document>
    </div>
  );
};

export default withStyles(styles)(PdfViewer);
