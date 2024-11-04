import dynamic from "next/dynamic";
import { Suspense } from "react";
import PdpViewer from "./pdfViewer"

import { LiaBarcodeSolid } from "react-icons/lia";
import Loading from "./loading";
const AdicionarCodigo = dynamic(() => import('./adicionarCodigo'), {
    ssr: false,
    loading: () => <Loading />,
    
  });
export default function geradorDeCodigoDeBarra(){
    return(
        <>
            <section className="max-w-[90rem] mx-auto">
                <div className="justify-center   gap-3  grid grid-cols-1 h-[calc(100vh-76px)]">
                <div className=" px-8 rounded-xl  flex justify-center items-center    h-full">
                        <div className=" h-full  flex  items-center  w-full  rounded-lg ">
                            
                            <AdicionarCodigo />
                           
                            
                        </div>
                    </div>
                    
                    
                </div>
            </section>
        </>
    )
}