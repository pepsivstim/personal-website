import React from 'react';
import { Document, Page, pdfjs} from 'react-pdf';

import '../css/resume.css'

import Header from '../components/Header';
import Footer from '../components/Footer';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const downloadSVG = <svg width="24" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs">
                        <path d="M3 17v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 12l-5 5-5-5M12 14.8V2.5"></path>
                      </svg>

  
  const newTabSVG = <svg className='new-tab-svg'fill="none" height="1em" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="1em">
                      <path d="M18 14v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 4h6v6"></path>
                      <path d="M10 15L21 3"></path>
                    </svg>

  return (
    <div className="page-container">
      <Header /> 
      <main className='resume-main'>

          <a className='resume-text' href='Timothy_Chu_Resume.pdf' download>Download {downloadSVG}</a>
          <a className='resume-text' href='Timothy_Chu_Resume.pdf' target='_blank' rel='noopener noreferrer'>Open in New Tab {newTabSVG}</a>

        <Document file='Timothy_Chu_Resume.pdf'>
          <Page pageNumber={1}/>
        </Document>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
