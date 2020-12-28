import React , { useState , useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import Contador from "./Contador"

const App = () => {

    //Cada vez que ejecutan useState siempre obtienen un array con dos elementos. El primero lo podemos crear, el segundo no.
    /* const resultado = useState(0)
    const estado = resultado[0]
    const laFuncion = resultado[1] */

    const [contador,setContador] = useState(0)

    useEffect(()=>{
        //Este es mi efecto secundario. Pasa siempre despues del render, simil "componentDidMount"
        //EJ: Pido algo al servidor
        console.log("Hay un efecto")
    },[])


    const aumentarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        setContador(contador - 1)
    }

    const resetearContador = () => {
        setContador(0)
    }
    
    return(
        <>
            <Header 
                saludo="Hola k ase?"  
                edad={30}  
                hacerClick={ ()=>{ console.log("Click!")  }} 
            />

            <p>El contador va : {contador} </p>
            <button onClick={ aumentarContador }>+</button>
            <button onClick={ resetearContador }>resetear</button>
            <button onClick={ restarContador }>-</button>

            <Contador 
                contador={contador} 
                restarContador={restarContador}
                aumentarContador={aumentarContador}
                resetearContador={resetearContador}
            />

            <Main/>
            <Footer/>
        </>
    )
} 


export default App