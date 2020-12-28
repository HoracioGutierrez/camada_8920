import React from 'react'
import NavBar from "./NavBar"

const Header = ({edad,saludo,hacerClick}) => {
    return (
        <header>
            <h1>Titulo de mi Pagina</h1>
            <p>{edad}</p>
            <p>{saludo}</p>
            <button onClick={hacerClick}>click</button>
            <NavBar saludo={saludo}/>
        </header>
    )
}


//Si alguien hace un import va a obtener esto a cambio
export default Header
