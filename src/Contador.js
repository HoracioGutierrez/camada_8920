import React from 'react'

const Contador = ({contador,aumentarContador,resetearContador,restarContador}) => {
    return (
        <div>
            <p>El contador va : {contador} </p>
            <button onClick={ aumentarContador }>+</button>
            <button onClick={ resetearContador }>resetear</button>
            <button onClick={ restarContador }>-</button>
        </div>
    )
}

export default Contador
