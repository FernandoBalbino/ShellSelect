import NavBar from "./navBar"
import * as motion from "framer-motion/client"
export default function Header(){
    return(
        <>
        <motion.header
        initial={{y:-100}}
        animate={{y:0}}

        transition={{duration:0.3}}
        className="w-full border-b-[1px] border-[#EAEAEA] bg-[white]">
            <NavBar />
        </motion.header>
        </>
    )
}