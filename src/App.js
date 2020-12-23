import React from "react"

const App = function(){
    return(
        <>
            <header>
                <h1>Titulo de mi Pagina</h1>
            </header>
            <footer>
                <p>&copy; Copyright 2020</p>
            </footer>
        </>
    )
}

//Si alguien llega a hacer un import de este archivo "App.js", lo que va a obtener a cambio por defecto es la variable App

//COMMONJS
//module.exports = App
//ES6
export default App