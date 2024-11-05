import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./gerador-codigo-de-barras/loading";


export default function Card({ item }) {
   
    return (
        <>
        {   
        
            item.map((item) =>(
                
                        <Link href={item.url} key={item.id} className='w-[18rem]  py-3 transition-all hover:-translate-y-2 hover: h-full 
                        ' >
                            <div
                            initial={{ opacity:0, y:60}}
                            animate={{opacity:1, y:0}}
                            transition={{duration: 0.6}}
                            className='rounded-xl  flex flex-col overflow-hidden h-[270px] max-w-[18rem] max-h-[300px]'>
                            <Image
                                priority
                                className='w-[564px] rounded-xl h-auto'
                                width={564}
                                height={376}
                                alt='logo'
                                src={item.image}
                             />
                            <h2 className='mt-3 font-bold text-[14px] text-[#222529]'>{item.nome}</h2>
                            <p className='mt-1 text-[12px] text-[#4c535c] line-clamp-3'>{item.descricao}</p>  
                            </div>
                             
                        </Link>
                
                 
            ))
        }
            
        </>
    );
}
