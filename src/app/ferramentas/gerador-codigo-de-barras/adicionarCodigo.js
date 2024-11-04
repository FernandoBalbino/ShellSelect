'use client'
import { LiaBarcodeSolid } from "react-icons/lia";
import { FaCircleCheck } from "react-icons/fa6";
import PdpViewer from "./pdfViewer";
import { PDFViewer } from "@react-pdf/renderer";
import { MdBarcodeReader } from "react-icons/md";
import { useState } from "react";
export default function AddCodigo(){
  const [selecionado, setSelecionado] = useState('0');
  return(
    <>
      
      <div className="flex flex-col  items-start  p-7 gap-x-5  h-full w-full">
        <div>
          <h2 className="text-[#343537] text-2xl font-semibold mb-1">Sobre o seu produto:</h2>
          <p className="mb-4 text-[#7f8792]">Escolha o tipo de código do seu produto abaixo:</p>
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
          <div onClick={() =>{
            setSelecionado('1')
          }} className={` mb-5  transition-all hover:scale-105 border-4 ${selecionado==='1'?'border-[#171E43]':'border-[#A0A3A6]'} min-w-[260px]  group  hover:border-[#171E43] cursor-pointer relative px-7 py-4 rounded-xl flex flex-col justify-center items-center`}>
            <FaCircleCheck size={25} color="#DD1D21" className={`absolute  ${selecionado==='1'?'block':'invisible'} top-[5px] right-[5px]`}  />
            <LiaBarcodeSolid size={50} className={`group-hover:fill-[#171E43] ${selecionado==='1'?'fill-[#171E43]':'fill-[#A0A3A6]'} transition-all " color="#A0A3A6`} />
            <div className={` ${selecionado==='1'?'text-[#171E43]':'text-[#A0A3A6]'}   group-hover:text-[#171E43] transition-all  text-center font-bold leading-9 text-[20px]`}>
            Não possui um código <br/> definido
            </div>
          </div>
          </div>
          
        </div>
        <div className="flex flex-col w-full">
            <label htmlFor="nomeCodigo" className="text-[#343537] w-fit  cursor-pointer text-lg font-semibold my-2">Nome do produto</label>
            <input placeholder="Produto..." className="outline-[#E7E8E9] focus:border-[#171E43] w-[340px] block outline-0 border-2 px-3 py-2 rounded-md" id="nomeCodigo" type="text" />
            <label htmlFor="numeroCodigo" className="text-[#343537]  w-fit cursor-pointer text-lg font-semibold my-2">Número do código de barras</label>
            <input placeholder="859AAA498" className="outline-[#E7E8E9] focus:border-[#171E43] w-[310px] block outline-0 border-2 px-3 py-2 rounded-md" id="numeroCodigo" type="text" />
          </div>
          <button className="my-4 buttonS">Adicionar código de barra</button>
      </div>
          <div className="w-full flex justify-center items-center h-full">
            <PDFViewer className="max-w-fit teste w-[406px] aspect-square h-[92.333333%]" showToolbar={false} >
            <PdpViewer  />
            </PDFViewer>
            
          </div>
    </>
  )
}