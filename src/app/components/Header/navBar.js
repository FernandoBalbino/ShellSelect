import Link from "next/link";
import Image from "next/image";

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
                    <li 
                    
                    
                    >
                        <Link className='tracking-normal hover:bg-slate-400 buttonS' href={'/ferramentas'}>
                        Ferramentas <FaTools className='inline-block animate-pulse'/>
                        </Link>
                    </li>
                    <li
                    
                    >
                        
                        <Link className='tracking-normal buttonS' href={'/sobre'}>
                        Sobre
                        </Link>
                    </li>
                    
                </ul>
            </nav>
            </div>
        </>
    )
}