'use client'
import { useState } from "react";
import { CiBarcode } from "react-icons/ci";
import * as motion from "framer-motion/client";


import DownloadPDFButton from "./buttonDownload";
import Image from "next/image";

export default function PdfViewer({ date }) {
  const [removedIds, setRemovedIds] = useState([]);
  const componentKey = JSON.stringify(date);
  const dados = date.filter(item => !removedIds.includes(item.id));
  const control = dados.length >= 6 ? 'overflow-auto' : 'overflow-hidden';
  
  // Variantes para controlar a entrada e saída de cada item individualmente
  const variants = {
    hidden: { y: 100, opacity: 0 }, // Posição inicial
    visible: { y: 0, opacity: 1 },  // Posição final
    exit: { opacity: 0, y: -100 }   // Animação de saída, opcional
  };

  function deletarItem(id) {
    setRemovedIds(prev => [...prev, id]);
  }

  return (
    <>

    <div key={componentKey}  className={`shadow-xl  gap-2 ${control} flex flex-col p-8 md:max-h-[90%] rounded-xl w-11/12`}>
    <div className={`${dados.length==0?'hidden':'visible'}`}>
      <DownloadPDFButton dados={dados} />
    </div>
      
      {dados.length === 0 ? (
        <div className='flex-col justify-center content-center items-center w-full'>
          <h2 className='text-[#222529] mb-4 text-center font-semibold text-4xl'>Nenhum produto adicionado.</h2>
          <Image 
            priority
            className="w-10/12 mx-auto h-auto"
            width={300}
            height={300}
            alt='Nenhum produto'
            src='/imagens/noCard.svg'
          />
        </div>
      ) : (
        dados.map((item) => (
          <div className="flex-col h-full group relative  w-full" key={item.id}>
            
            <motion.div
              layout // Adiciona o layout do Framer Motion para entrada suave
              initial="hidden" // Animação ao adicionar
              animate="visible"
              exit="exit" // Animação de saída ao deletar
              variants={variants}
              transition={{ duration: 0.3 }}
              className="md:flex md:items-center md:justify-between cursor-pointer px-3 rounded-lg hover:bg-[#E5E7EB] gap-2 h-auto w-full"
            >
              <div className="flex md:justify-center items-center gap-2">
                <div className="rounded-full p-2">
                  <CiBarcode color="black" size={50} />
                </div>
                <div>{item.nome}</div>
              </div>
              <div
                onClick={() => deletarItem(item.id)}
                className="absolute invisible group-hover:visible top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-md p-3 text-white"
              >
                Deletar item
              </div>
              <div className="font-bold text-center md:text-start  text-[20px]">{item.codigo}</div>
            </motion.div>
          </div>
        )
        
      )
     
      )
      
      }
      
           
    </div>
    
    </>
  );
}
