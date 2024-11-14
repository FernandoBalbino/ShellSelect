
import Image from "next/image"
import Link from "next/link"



export default function Footer(){
    return(
        <>
        <footer className=' h-48  cursor-default	'>
            <div className='max-w-[90rem] md:flex gap-10 md:items-center md:justify-between py-2 px-4 mx-auto'>
            
                
                
                <div className="md:flex  md:items-center md:justify-center md:gap-6">
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
                        <ul className="md:flex  gap-10">
                            <li className=" mb-2 md:mb-0 "
                            
                            >
                            
                                <Link href={'/ferramentas'}>Ferramentas</Link>
                            </li>
                            <li className="mb-2  md:mb-0">
                                <Link href={'/sobre'}>Sobre</Link>
                            </li>
                            <li className="mb-2  md:mb-0">
                                
                                  <Link  href={'/sobre'}>
                                     Contato 
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