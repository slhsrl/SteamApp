import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './details.css';
import Panel from '../../components/jsx/Panel';
import GameDetails from '../../components/jsx/GameDetails';
import GameDetailsUnderPanel from '../../components/jsx/GameDetailsUnderPanel';
import GameDetailsButton from '../../components/jsx/GameDetailsButton';

const Details = () => {
  const { id } = useParams();
  const gamesdata = useSelector(state => state.data.data.games);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (gamesdata) {
      const clickedGame = gamesdata.find(game => game.id === parseInt(id));
      setItem(clickedGame || {}); 
      setLoading(false); 
    }
  }, [gamesdata, id]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!item || !item.id) {
    return <div>Game not found</div>; 
  }

  return (
    <div>
      <div className='container'>
        <div className="section one-1">
          <Panel />
        </div>
        <div className="section two-2">
          <div className='gamedetailupper'>
            <GameDetails item={item} />
          </div>
          <div className="gamedetailunderborder">
            <div className="Gdetailsbuttuon">
              <GameDetailsButton item={item} />
            </div>
            <div className='gamedetailunder'>
              <GameDetailsUnderPanel item={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;