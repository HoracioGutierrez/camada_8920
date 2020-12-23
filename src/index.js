//La forma vieja (CommonJS)
//const React = require("react")
//const ReactDOM = require("react-dom")
//const App = require("./App")

//La forma nueva (ES6)
import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import "./estilos.css"
//JSX 
//const Componente = <p>Hola Mundo en Variable</p>

//App()
//<App/>
//<App></App>

ReactDOM.render( <App/> , document.getElementById("root"))