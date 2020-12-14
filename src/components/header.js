import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Boilers</h1>
        </header>
    )
}

const headerStyle = {
    background: '#fc6225',
    border: '1px #333',
    color: '#fff',
    fontFamily: 'Geneva',
    letterSpacing: '1px',
    textAlign: 'left',
    fontSize: '20px',
    padding: '10px 10px'
}

export default Header;