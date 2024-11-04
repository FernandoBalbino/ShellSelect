
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import * as motion from "framer-motion/client"

export default function Banner(){
    const variants = {
        hidden: { y: 100, opacity: 0 }, // Posição inicial à esquerda
        visible: { y:0, opacity: 1 }, // Posição final
      };
    return(
        <>
        
        <section 
        initial="hidden"
        animate="visible"
        variants={variants}
        priority="true"
        transition={{ duration: 0.5 }} 
        id='banner' className='h-[calc(100vh-76px)]  gap-4 flex flex-col justify-center items-center '>
            <span className='bg-yellow-300 animate-bounce relative py-1 px-3 rounded-full text-[#0D0C22] font-medium leading-9'>
            <span className="absolute top-[-3px] left-[-2px] flex h-5 w-5">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e05153] opacity-75"></span>
  <span className="relative inline-flex rounded-full h-5 w-5 bg-[#DD1D21]"></span>
</span>
                Ferramentas prontas para uso!
            </span>
            
            <h1 className="text-7xl max-w-6xl text-center leading-[76px] font-extrabold text-[#0D0C22]" 
            
            >Inovação que transforma suas tarefas em <span 
            
            className='    text-[#FF0000] '>segundos</span></h1>
            <p className='text-[#7f8792] text-center font-medium leading-9 text-[20px]'>Explore gratuitamente todas as <br/>ferramentas para gerenciar o seu negócio.</p>
            <Link className='text-[#565564] group flex  transition-transform items-center justify-center buttonS' href={'/ferramentas'}>Acessar <MdArrowForwardIos className=' group-hover:translate-x-1 animate-pulse transition-transform' size={15} /></Link>
            
            
        </section>
        
        
        </>
    )
}