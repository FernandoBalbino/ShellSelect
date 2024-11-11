'use client'
import React, { useEffect, useState } from 'react';
import { FaFilePdf } from "react-icons/fa6";
import dynamic from 'next/dynamic';

// Carregar PDFDownloadLink dinamicamente apenas no lado do cliente
const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

import MyDocument from './templatePDF';

const DownloadPDFButton = ({dados}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Confirma que está no lado do cliente
  }, []);

  if (!isClient) return null;

  return (
    <div>
      <PDFDownloadLink 
        className="mt-3 flex justify-center items-center buttonS active:translate-y-1 transform-gpu hover:scale-105 duration-700 transition-all"
        document={<MyDocument dados={dados}/>}
        fileName="codigosDeBarras.pdf"
      >
        {({ loading }) =>
          loading ? (
            'Carregando documento...'
          ) : (
            <>
              Baixar <FaFilePdf className='ml-2' size={30}/>
            </>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default DownloadPDFButton;
