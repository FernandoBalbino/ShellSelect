
import Image from "next/image"
import Link from "next/link"



export default function Footer(){
    return(
        <>
        <footer className=' h-48 cursor-default	'>
            <div className='max-w-[90rem] flex gap-10 items-center justify-between py-2 px-4 mx-auto'>
            
                
                
                <div className="flex items-center justify-center gap-6">
                <div>
                        <Image 
                            
                            src={"/imagens/logo.svg"}
                            alt='Logo'
                            width={60}
                            height={60}
                            priority
                        />
                </div>
                    <nav 
                    
                    >
                        <ul className="flex gap-10">
                            <li
                            
                            >
                            
                                <Link href={'/ferramentas'}>Ferramentas</Link>
                            </li>
                            <li>
                                <Link href={'/sobre'}>Sobre</Link>
                            </li>
                            <li>
                                
                                  <Link  href={'/sobre'}>
                                     Sobre 
                                    </Link>
                            </li>
                        </ul>
                    </nav>
            </div>
                
            <div>
                <p className='italic text-[#0D0C22] font-medium leading-9 text-[17px]' > &copy;  2024 Fernando Kauã da Silva Balbino - Todos os direitos reservados © </p>

                </div>
            </div>
            
        </footer>
        </>
    )
}