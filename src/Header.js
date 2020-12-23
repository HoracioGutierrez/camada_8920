import React from 'react'
import NavBar from "./NavBar"

const Header = ({edad,saludo,hacerClick}) => {

    //Destructuring
    //const {edad:edad,saludo:saludo} = props
    //const {edad,saludo} = props

    //const edad = props.edad
    //const saludo = props.saludo
    
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

export default Header
