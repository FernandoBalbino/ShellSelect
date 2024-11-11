import Image from "next/image"
export default function Loading(){
    return(
        <>
        <div className="h-screen  w-screen absolute top-0 flex justify-center items-center content-center ">
            
            <Image 
             src={"/imagens/logo.svg"}
             alt='Logo'
             className='animate-ping'
             width={150}
             height={150}
             priority
            /> 
            
            
            
        </div>
            
        </>
    )
}