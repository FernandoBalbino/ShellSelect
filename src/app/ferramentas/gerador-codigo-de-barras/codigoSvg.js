import React, { useEffect, useRef } from 'react';
import { useBarcode } from 'next-barcode';

export default function GerarCodigoBarrasSrc({ codigo, onGenerate }) {
  const { inputRef } = useBarcode({
    value: codigo,
    options: {
      background: '#ffffff',
    width:2,
    height:28,
    margin:0,
    
      displayValue:false,
    },
  });

  // Renderiza o elemento invisivelmente e passa o src para o componente pai
  useEffect(() => {
    if (inputRef.current) {
      // Extrai o src do código de barras gerado e passa para o onGenerate
      onGenerate(inputRef.current.src);

      // Remova o elemento do DOM após capturar o src
      inputRef.current.style.display = 'none';
    }
  }, [inputRef, onGenerate]);

  return <img ref={inputRef} alt="barcode" style={{ display: 'none' }} />;
}



