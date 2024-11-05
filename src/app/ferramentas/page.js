import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { data } from './data';
import Categoria from './categoria';
import Loading from './gerador-codigo-de-barras/loading';
import ToolsLoading from './loadingstart';
import Image from 'next/image';
import * as motion from "framer-motion/client"


export default async function Ferramentas({ searchParams }) {
    let activeCategory =  searchParams.categoria != null? searchParams.categoria: 'Populares';
    const Card = dynamic(() => import('./card'), {
        ssr: false,
        loading: () => <Loading />,  // Adiciona um fallback de carregamento enquanto Card é carregado
    });
   
    let dados = data;

    // Filtragem de cards: se a categoria for "Populares", exibe todos os cards.
    const filteredCards = activeCategory === 'Populares'
        ? dados
        : dados.filter(card => card.categoria === activeCategory);
    
    // Verifica se a categoria não existe nos dados
    const categoriaExistente = filteredCards.length > 0;
    
    return (
        <>
        <Suspense fallback={<ToolsLoading />}>

        
            <section className="max-w-[90rem] mt-10 relative mx-auto">
                <div>
                    <h2 id="title" className="text-center text-6xl">Ferramentas de uso rápido</h2>
                    <p className="text-[#7f8792] my-5 text-[18px] max-w-[700px] mx-auto text-center">
                        Crie códigos de barra, gerencie vencimentos, controle avarias e agilize tarefas com nossas ferramentas rápidas, fáceis e gratuitas. Simplicidade e eficiência em poucos cliques!
                    </p>
                </div>
                <Categoria />
                
            
                {categoriaExistente  ?(
                    <div className='grid max-w-7xl mx-auto grid-cols-2 gap-y-6 gap-x-6 xl:grid-cols-4 justify-center justify-items-center items-center content-center center  p-9 '>
                     
                     
                     <Card item={filteredCards} />
                     
                      
                    </div>
                     
                )
                
                :  <div className='flex mt-6  flex-col-reverse justify-center items-center p-3'>
                <Image 
                    priority
                    className='w-[400px] rounded-xl h-auto'
                    width={564}
                    height={376}
                    alt='logo'
                    src={'/imagens/noCard.svg'}
                />
                <div>
                <h2 className='text-4xl text-center text-[#222529] font-bold'>Ops... Não há ferramentas nessa categoria.</h2>
                <p className='text-[#7f8792] my-5 text-[18px] max-w-[700px] mx-auto text-center'>Enquanto estamos trabalhando para trazer ferramentas nessa categoria, você pode conferir nossas ferramentas disponíveis <Link className='underline text-blue-700' href={'/ferramentas'}>clicando aqui</Link>.</p>
                </div>
                
            </div>
                
                }

                
                
            </section>
            </Suspense>
        </>
    );
}