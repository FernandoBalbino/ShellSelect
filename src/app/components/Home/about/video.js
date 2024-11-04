'use client'
import * as motion from "framer-motion/client"
import { useRef } from "react";
export default function Video(){
    const videoRef = useRef(null);
    return(
        <>
        <motion.video
        
        onViewportEnter={() => {
            if (videoRef.current) {
                videoRef.current.play(); // Verifica se o vídeo existe antes de tocar
              }
        }}  // Toca quando entra na viewport
      onViewportLeave={() => {
        if (videoRef.current) {
            videoRef.current.pause(); // Verifica se o vídeo existe antes de pausar
          }
  
      }} // Pausa quando sai da viewport
      viewport={{ once: false, amount: 0.8}} // 60% visível na viewport
        width="400" 
        ref={videoRef}
        className=" w-full rounded-lg rounded-l-none " 
        height="1000" 
        muted   
        playsInline >
                        <source src="/imagens/video.webm" type="video/webm" />
                        <source src="/imagens/video.mp4" type="video/mp4" />
                        Seu navegador não suporta videos!
        </motion.video> 
        </>
    )
}