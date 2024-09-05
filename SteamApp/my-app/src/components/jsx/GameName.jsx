import React from 'react'
import '../css/GameName.css'
import {  useNavigate } from 'react-router-dom';




const GameName = ({item}) => {
  const navigate=useNavigate();

    const handleClick = (e) => {
        navigate('/games/'+e,{ replace: true })  
      };
  return (
    <div>
    
        {item.map((game, index) => (
         
            <div key={game.id} className="gamenamecmpner" onClick={() => handleClick(game.id)}>
               <img className='gamesimg' src={game.gameicon}></img>
                <p className='gamesName' key={index}>{game.name}</p>
            </div>
       
    ))}

    </div>
  )
}

export default GameName