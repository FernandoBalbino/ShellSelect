import * as motion from "framer-motion/client"
import Link from "next/link"
import { MdArrowForwardIos } from "react-icons/md";
import { IoMdArrowDropdownCircle } from "react-icons/io";

import Video from "./video";
export default function About(){
    return(
        <>
        <motion.section
        
        
        className="w-full my-10 mx-auto max-w-[90rem]  ">
           
           <h2 id="title" className="text-center mb-5 text-4xl  md:text-5xl">Experimente uma <span className="text-[#FFC90D]">ferramenta</span></h2>
            
            <IoMdArrowDropdownCircle size={50} className="block w-full animate-bounce" color="#FF0000" />
            
           
            <article className='w-full my-20   max-w-[90rem]  px-7'>
            




                <div className='md:grid-flow-row-dense shadow-lg flex flex-col-reverse  items-center  justify-center  md:w-full md:grid md:grid-cols-3 rounded-lg'>
                    
                    <div className="p-10 md:rounded-l-lg content-center bg-[#FFC90D] h-full">
                     <div className=' my-9  '>
                         <h2 className="md:text-5xl text-3xl text-[#0D0C22] leading-tight font-bold">Lojas de Conveniências</h2>
                         <p className="text-[#0D0C22]   my-6 mx-auto font-medium leading-9 text-[16px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</p>
                         <Link className='text-[#565564] shadow-lg shadow-[#FF0000] group inline-flex transition-transform items-center justify-center buttonS2' href={'/ferramentas'}>Catálogo de ferramentas <MdArrowForwardIos className=' group-hover:translate-x-1 animate-pulse transition-transform' size={15} /></Link>
                      </div>
                    </div>

                    <div className="w-full col-span-2 rounded-l-none rounded-lg ">
                    <Video />
                    </div>
                </div>
                
            </article>
        </motion.section>
            
           
        </>
    )
}