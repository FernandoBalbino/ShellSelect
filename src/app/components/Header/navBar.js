import Link from "next/link";
import Image from "next/image";
import * as motion from "framer-motion/client"
import { FaTools } from "react-icons/fa";

export default function NavBar(){
    return(
        <>
            <div className='max-w-[90rem] py-2 px-4 mx-auto flex justify-between'>
                <div>
                <Link className='flex justify-center items-center ' href={'/'}>
                    <Image 
                    src={"/imagens/logo.svg"}
                    alt='Logo'
                    width={60}
                    height={60}
                    priority
                    />
                    
                
                </Link>
                </div>

                <nav className="flex">
            
                <ul className='flex justify-center items-center gap-6 overflow-hidden'>
                    <motion.li 
                    initial={{ x:'100%'}}
                    animate={{opacity:1, x:0}}
                    transition={{duration: 1.2}}
                    
                    >
                        <Link className='tracking-normal hover:bg-slate-400 buttonS' href={'/ferramentas'}>
                        Ferramentas <FaTools className='inline-block animate-pulse'/>
                        </Link>
                    </motion.li>
                    <motion.li
                    initial={{ y:'-500%'}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 1, delay:0.2}}
                    >
                        
                        <Link className='tracking-normal buttonS' href={'/sobre'}>
                        Sobre
                        </Link>
                    </motion.li>
                    
                </ul>
            </nav>
            </div>
        </>
    )
}