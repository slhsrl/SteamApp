import React from 'react'
import '../css/Gamesimg.css'

const Gamesimg = ({ src, clsname }) => {
    return (
        <>
            <img className={'gameimg' + ' ' + 'gameid' + (clsname)} src={src} />
        </>
    )
}

export default Gamesimg