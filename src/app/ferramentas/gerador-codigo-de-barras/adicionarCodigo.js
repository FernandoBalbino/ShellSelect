'use client'
import PdfViewer from "./pdfViewer";
import { LiaBarcodeSolid } from "react-icons/lia";
import { FaCircleCheck } from "react-icons/fa6";
import { MdBarcodeReader } from "react-icons/md";
import { PiWarningCircleFill } from "react-icons/pi";


import { useState, useRef, useEffect } from "react";
import GerarCodigoBarras from "./codigoSvg";







export default function AddCodigo(){

  
  const [codigos, setCodigos] = useState([])
  const myRef1 = useRef(null)
  const myRef2 = useRef(null)
  

 
  const [selecionado, setSelecionado] = useState('0');
  const [nome, setNome] = useState('')
  const [codigo, setCodigo] = useState('')
  const [barcodeSrc, setBarcodeSrc] = useState('default');
  const [validacao, setValidacao] = useState(false)
  const [idCounter, setCounter] = useState(0)
  const [urlImagem, setUrlImagem] = useState('')

  


  const handleBarcodeSrc = (src) => {
    setUrlImagem(src); // Atualiza o estado com o novo src da imagem
  };
  

  function adicionarDados(e){
    
    if(nome == '' || codigo == ''){
      setValidacao(true)
      if(myRef1.current.value.length == 0){
        myRef1.current.focus();
      }else if(myRef2.current.value.length == 0){
        myRef2.current.focus();
      }else{
        myRef1.current.focus()
      }
      return;
    }else{
      setCounter(idCounter+ 1)
      
      setBarcodeSrc(codigo)
     
      codigos.unshift({id:idCounter,nome:nome,codigo:codigo, url:urlImagem})
      setNome('');
      setCodigo('')
      setValidacao(false)
      console.log(codigos)
    }
    
    
  }

  
  return(
    <>
     
      <div  className="flex flex-col  items-start  p-7 gap-x-5  h-full w-full">
        
        <div>
          <h2 className="text-[#343537] text-2xl font-semibold mb-1">Sobre o seu produto:</h2>
          <p className="mb-4 text-[#7f8792]">Escolha o tipo de código do seu produto abaixo</p>
          <div className="flex gap-3">
          
          <div onClick={() =>{
            setSelecionado('0')
          }}  className={` mb-5   transition-all hover:scale-105 border-4 ${selecionado ==='0'?'border-[#171E43]':'  border-[#A0A3A6]'} min-w-[260px]  group  hover:border-[#171E43] cursor-pointer relative px-7 py-4 rounded-xl flex flex-col justify-center items-center`}>
            <FaCircleCheck size={25} color="#DD1D21" className={`absolute  ${selecionado==='0'?'block':'invisible'} top-[5px] right-[5px]`}  />
            <MdBarcodeReader size={50} className={`group-hover:fill-[#171E43] ${selecionado==='0'?'fill-[#171E43]':'fill-[#A0A3A6]'} transition-all " color="#A0A3A6`} />
            <div className={` ${selecionado==='0'?'text-[#171E43]':'text-[#A0A3A6]'}   group-hover:text-[#171E43] transition-all  text-center font-bold leading-9 text-[20px]`}>
            Já possui um código <br/> definido
            </div>
          </div>
          <div
          

          className={` mb-5  ease-in-out  transition-all hover:scale-105 border-4 ${selecionado==='0'?'border-[#171E43]':'border-[#A0A3A6]'} min-w-[260px]  group  hover:border-[#171E43] cursor-pointer relative px-7 py-4 rounded-xl flex flex-col justify-center items-center`}>
            <FaCircleCheck size={25} color="#DD1D21" className={`absolute  ${selecionado==='1'?'block':'invisible'} top-[5px] right-[5px]`}  />
           
            <div className={` ${selecionado==='1'?'text-[#171E43]':'text-[#A0A3A6]'}   group-hover:text-[#171E43] flex justify-center items-center  transition-all w-full text-center font-bold leading-9 h-[full] text-[20px]`}>
            
                    <span className={`${codigo.length==0?'visible':'hidden'}`}>Digite um código</span>
                   {codigo && <GerarCodigoBarras  codigo={codigo} setUrlImagem={handleBarcodeSrc}  />}
                   
            
            </div>
          </div>
          </div>
          
        </div>
        <div className="flex w-full relative ">
          <div>
            <label htmlFor="nomeCodigo" className="text-[#343537] w-fit  cursor-pointer text-lg font-semibold my-2">Nome do produto</label>
            <input placeholder="Produto..." ref={myRef1} autoFocus={true}  value={nome}  onChange={(e) => setNome(e.target.value)} className={`outline-[#E7E8E9] ${validacao && myRef1.current.value==''?'border-red-500 translate-x-3 ':''}  focus:border-[#171E43] w-[340px] block outline-0 transition-all border-2 px-3 py-2 rounded-md `} id="nomeCodigo" type="text" />
            <label htmlFor="numeroCodigo" className="text-[#343537]  w-fit cursor-pointer text-lg font-semibold my-2">Número do código de barras</label>
            <input placeholder="859AAA498" ref={myRef2}  value={codigo} onChange={(e) => {
              setCodigo(e.target.value)
            }} className={`outline-[#E7E8E9] ${validacao && myRef2.current.value==''?'border-red-500 translate-x-3 ':''} focus:border-[#171E43] w-[310px] block outline-0 border-2 transition-all px-3 py-2 rounded-md`}  id="numeroCodigo" type="number" />
            </div>
            <div className={`w-full ${validacao?'visible':'hidden'} flex justify-center items-center`}>
             
              <div className='flex-col items-center place-items-center justify-center'>
                <div>
                  <PiWarningCircleFill color="#DD1D21" className='text-center block animate-bounce' size={50} />
                  </div>
                <div className='text-[#343537] text-lg font-semibold '>
                Preencha os campos!
                </div>
              </div>
            </div>
          </div>
        
         <button 
            onClick={() => adicionarDados()}
           className="my-4 buttonS active:translate-y-1 transform-gpu hover:scale-105 duration-700 transition-all">
          Adicionar código de barra
          </button>
          
       
          
      </div>
          <div className="w-full flex justify-center items-center h-full">
           <PdfViewer date={codigos} />
           
           
            
          </div>
    </>
  )
}