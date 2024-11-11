export default function Loading(){
    return(
        <>
        <div className='h-[calc(100vh-76px)] max-w-7xl mx-auto  flex justify-center items-center'>
        <div className="flex items-start p-7 gap-x-5 h-full w-full ">
      <div>
      <h2 className="text-[#343537] text-2xl font-semibold mb-1">Sobre o seu produto:</h2>
        <p className="mb-4 text-[#7f8792]">Escolha o tipo de código do seu produto abaixo:</p>
        <div className="flex gap-3 animate-pulse">
        <div className="bg-gray-300 min-w-[260px] h-40 px-7 py-4 rounded-xl"></div>
        <div className="bg-gray-300 min-w-[260px] mb-5  h-40 px-7 py-4 rounded-xl"></div>
        </div>
        
        <div className="flex flex-col mb-5 w-full">
            <p  className="text-[#343537]  cursor-pointer text-lg font-semibold my-2">Nome do produto</p>
            <div  className="outline-[#E7E8E9] animate-pulse focus:border-[#171E43] w-[340px] block outline-0 border-2 px-3 py-2 rounded-md bg-gray-200 h-[43.5px]"  >
                </div>
            <p  className="text-[#343537]  cursor-pointer text-lg font-semibold my-2">Número do código de barras</p>
            <div  className="outline-[#E7E8E9] animate-pulse focus:border-[#171E43] w-[310px] block outline-0 border-2 px-3 py-2 rounded-md h-[43.5px] bg-gray-200" >
                </div>
             </div>
             <div className='buttonS animate-pulse w-[250px] h-[40px] bg-red-500'>

             </div>
      </div>
      
    </div>
    <div className='h-full flex justify-center items-center w-full'>
        <div className='bg-gray-100 py-6 gap-6 rounded-xl flex justify-start items-center flex-col animate-pulse shadow-2xl  h-[80%]  w-11/12'>
            <div className='bg-slate-300 animate-pulse w-[90%] rounded-md h-12'>

            </div>
            <div className='bg-slate-300 animate-pulse w-[90%] rounded-md h-12'>

            </div>
            <div className='bg-slate-300 animate-pulse w-[90%] rounded-md h-12'>

            </div>
            <div className='bg-slate-300 animate-pulse w-[90%] rounded-md h-12'>

            </div>
            <div className='bg-slate-300 animate-pulse w-[90%] rounded-md h-12'>

            </div>
            <div className='bg-slate-300 animate-pulse w-[90%] rounded-md h-12'>

            </div>
            <div className='bg-slate-300 animate-pulse w-[90%] rounded-md h-12'>

            </div>
            
        </div>
    </div>
        </div>
       
    
      
        </>
    )
}