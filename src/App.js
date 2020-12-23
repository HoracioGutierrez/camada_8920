import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

/* 
class App extends React.Component {

    
    //constructor(){}
    //componentDidMount(){}
    //shouldComponentUpdate(){}
    //componentWillUnmount(){} 
   

    //El metodo render se ejecuta cuando un componente entra en pantalla o cuando se actualiza
    render(){
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

}
*/



const App = () => {
    return(
        <>
            <Header 
                saludo="Hola k ase?"  
                edad={30}  
                hacerClick={ ()=>{ console.log("Click!") /**return NADA */ }} 
            />
            <Main/>
            <Footer/>
        </>
    )
} 


export default App