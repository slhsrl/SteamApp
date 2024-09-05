import React from 'react';
import { useSelector } from 'react-redux';
import Gamesimg from './Gamesimg';
import '../css/Games.css'
import { useNavigate } from 'react-router-dom';



const Games = () => {
  const gamesdata = useSelector( (store) => store.data.data.games);
  console.log('gamsdata:',gamesdata)
  const navigate=useNavigate();
  const handleClick = (e) => {

    navigate('/games/'+e,{ replace: true })  
  };

  
  if (!gamesdata || !Array.isArray(gamesdata)) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='gamescontainer' >
      <div className="gamesort">
        <div className="tumu">
          TÜMÜ{'('+gamesdata.length+')'}
        </div>
        <div className="hr"><hr /></div>
        </div>
        <div className='allgames'> 
        {gamesdata.map((game, index) => (       
          <div key={index} className="games" onClick={() => handleClick(game.id)}>
            <Gamesimg src={game.gridPhoto} clsname={game.id}/>
          </div>
        ))}
        </div>
    </div>
  );
}

export default Games;
