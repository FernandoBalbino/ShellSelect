'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useBarcode } from 'next-barcode';

export default function GerarCodigoBarras({ codigo, setUrlImagem }) {
  const { inputRef } = useBarcode({
    value: codigo,
    options: {
      format:'codabar',
      background: '#ffffff',
      width: 2,
      height: 25,
      margin: 0,
      displayValue: false,
    },
  });

  // Usar o useRef para referenciar a imagem gerada
  const imgRef = useRef(null);

  // Pegar o src da imagem assim que ela for gerada
  useEffect(() => {
    if (imgRef.current) {
      setUrlImagem(imgRef.current.src)
    }
  }, [codigo]); // A dependência de 'codigo' faz o efeito ser acionado quando 'codigo' mudar

  return (
    <img
      className='transition-width h-[50px] duration-500 transition-all ease-in-out'
      ref={(node) => {
        // Atribuindo o ref ao inputRef gerado pela biblioteca e ao imgRef para pegar o src
        inputRef.current = node;
        imgRef.current = node;
      }}
      id='imagemBARRA'
      alt='codebar'
    />
  );
}


