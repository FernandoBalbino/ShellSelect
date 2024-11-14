'use client'
import QRCode from 'qrcode'
import { useEffect, useState } from "react"
import { VscChromeClose } from "react-icons/vsc";

export default function PixCard() {
    const [copied, setCopied] = useState(false)
    const [dataUrl, setDataUrl] = useState('')
    const [pixCardVisible, setPixCard] = useState(true)
    const [pixString, setString] = useState('00020126930014BR.GOV.BCB.PIX0136f13ca687-4b3c-465c-b3bc-8138eb623e240231Fico muito grato por sua ajuda!5204000053039865802BR5925Fernando Kaua da Silva Ba6009SAO PAULO62140510fTPWT5ktmW630410B5')
    useEffect(() => {

        document.body.style.overflow='hidden'

        QRCode.toDataURL(
            pixString, 
            { type: 'image/jpeg', rendererOpts: { quality: 1 } }
        ).then(setDataUrl)

        

        if(pixCardVisible == false){
            document.body.style.overflow='auto'
        }
    }, [pixCardVisible])

    function copiarClip(){
        navigator.clipboard.writeText(pixString)
        
        setCopied(true)
    }
    
    if (!pixCardVisible) return null
    return (
        <div onClick={() => setPixCard(false)} className={`fixed  z-50 flex justify-center w-fu h-[101%] w-[101%] items-center bg-black/80 md:w-screen md:h-screen`}>
            <div onClick={(e) => {
                e.stopPropagation()
                
            }}  className="md:w-[520px]  rounded-2xl relative w-[90%] md:h-[520px] bg-white p-8 flex flex-col justify-center items-center">
                {dataUrl ? (
                    <>
                            <img 
                            src={dataUrl}
                            alt="QR Code"
                            className="w-auto h-auto"
                             width={150}
                            />
                            <h3 className='text-[#222529] text-xl font-bold'>"Apoie o desenvolvimento!"</h3>
                            <p className='text-center mt-1 text-[#444444] mb-3'>Contribua com qualquer valor via Pix para me ajudar a aprimorar as funcionalidades do site. Sua doação é uma força para continuarmos juntos nessa jornada!</p>
                            <pre className={`w-full  ${copied?'text-green-500':''} font-mono p-2 rounded-md  overflow-auto scrollbar-hide mb-2 r  bg-[#dee1ec]`}>
                            00020126930014BR.GOV.BCB.PIX0136f13ca687-4b3c-465c-b3bc-8138eb623e240231Fico muito grato por sua ajuda!5204000053039865802BR5925Fernando Kaua da Silva Ba6009SAO PAULO62140510fTPWT5ktmW630410B5
                            </pre>
                            <button onClick={() => copiarClip()} className={`buttonS active:scale-95 transition-all`}>{copied?'Código Copiado!':'Copiar QRcode'}</button>
                    </>
                   
                ) : (
                    <div className='justify-center items-center flex flex-col w-full h-full'>
                        <div className='bg-slate-200 w-[244px] h-[244px] animate-pulse rounded-2xl'>

                        </div>
                         <h3 className='text-[#222529] text-xl font-bold'>"Apoie o desenvolvimento!"</h3>
                            <p className='text-center mt-1 text-[#444444] mb-3'>Contribua com qualquer valor via Pix para me ajudar a aprimorar as funcionalidades do site. Sua doação é uma força para continuarmos juntos nessa jornada!</p>
                            <pre className={`w-full  ${copied?'text-green-500':''} font-mono p-2 rounded-md  overflow-auto scrollbar-hide mb-2 r  bg-[#dee1ec]`}>
                            00020126930014BR.GOV.BCB.PIX0136f13ca687-4b3c-465c-b3bc-8138eb623e240231Fico muito grato por sua ajuda!5204000053039865802BR5925Fernando Kaua da Silva Ba6009SAO PAULO62140510fTPWT5ktmW630410B5
                            </pre>
                            <button  className={`buttonS active:scale-95 transition-all`}>{copied?'Código Copiado!':'Copiar QRcode'}</button>
                    </div>
                )}
                <div onClick={() => setPixCard(false)} className='absolute top-3 right-3 md:top-5 cursor-pointer md:right-5'>
                <VscChromeClose className='border-[#d3d7e7] hover:scale-110 active:border-[red  ] transition-all border-2 rounded-full p-2' size={45} />

                </div>
            </div>
        </div>
    )
}
