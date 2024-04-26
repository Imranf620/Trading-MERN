import { useState } from "react";
import ShowContext from "./ShowContext";

const ShowState = ({children})=>{
    const [show, setShow] = useState(false)

    const handleShow = ()=>{
        setShow(!show)
    }

    const [black, setBlack] = useState(true)

    const handleBlack = ()=>{
        setBlack(!black)
    }

    return (
        <ShowContext.Provider value={{show, handleShow, black, handleBlack}}>
            {children}
        </ShowContext.Provider>
    )
}

export default ShowState