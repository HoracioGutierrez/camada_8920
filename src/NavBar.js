import React from 'react'

const NavBar = ({saludo}) => {
    return (
        <nav>
            <a href="#">{saludo}</a>
            <a href="#">home</a>
            <a href="#">productos</a>
            <a href="#">mi cuenta</a>
        </nav>
    )
}

export default NavBar
