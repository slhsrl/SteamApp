import React from 'react'
import '../css/GameDetails.css'

const GameDetails = ({item}) => {
  return (
    <div className='gamedetail'>
        <img className='gamedetail-img' src={item.gameDetailPhoto} alt={item.gameName} /> 
    </div>
    
  )
}

export default GameDetails