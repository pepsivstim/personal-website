import React from 'react';
import { Document, Page, pdfjs} from 'react-pdf';

import '../css/resume.css'

import Header from '../components/Header';
import Footer from '../components/Footer';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Resume() {
  const downloadSVG = <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#8899a4" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs">
                        <path d="M3 17v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 12l-5 5-5-5M12 14.8V2.5"></path>
                      </svg>
  return (
    <div className="page-container">
      <Header /> 
      <main>
        <h1 className='resume-text'>Download Resume <a href='Timothy_Chu_Resume.pdf' target='_blank' rel='noopener noreferrer' className='resume-text'> {downloadSVG}</a></h1>
        <Document file='Timothy_Chu_Resume.pdf'>
          <Page pageNumber={1}/>
        </Document>
      </main>
      <Footer />
      

    </div>
  );
};

export default Resume;
