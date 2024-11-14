import AddCodigo from "./adicionarCodigo";
import Loading from "./loading";

export default function geradorDeCodigoDeBarra(){
    return(
        <>
       
            <section className="max-w-[90rem] mx-auto">
                <div className=" md:h-[calc(100vh-76px)]">
                <div className=" px-8 rounded-xl  md:flex justify-center items-center    h-full">
                        <div className=" h-full   md:flex  items-center  w-full  rounded-lg ">
                            
                            <AddCodigo  />
                           
                            
                        </div>
                    </div>
                    
                    
                </div>
            </section>
        </>
    )
}