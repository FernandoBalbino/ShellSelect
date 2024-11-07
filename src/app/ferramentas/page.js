
import dynamic from 'next/dynamic';
import CardsLoadingSkeleton from './loadingCards';
import ToolsLoading from './loadingstart';

import Ferramentas2 from './ferramentas';
 

export default async function Ferramentas() {
   
    
   
   
    return (
        <>
            <section className="max-w-[90rem] mt-10 relative mx-auto">
                <div>
                    <h2 id="title" className="text-center text-6xl">Ferramentas de uso rápido</h2>
                    <p className="text-[#7f8792] my-5 text-[18px] max-w-[700px] mx-auto text-center">
                        Crie códigos de barra, gerencie vencimentos, controle avarias e agilize tarefas com nossas ferramentas rápidas, fáceis e gratuitas. Simplicidade e eficiência em poucos cliques!
                    </p>
                </div>
                
                
            
              
                    
                     
                     
                    <Ferramentas2 />
                     
                      
                    
                     
                
                
                
              </section>
                
            
        </>
    )
}