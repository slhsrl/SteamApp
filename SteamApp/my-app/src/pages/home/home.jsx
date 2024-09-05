import React, { useEffect } from 'react';
import Panel from '../../components/jsx/Panel';
import Games from '../../components/jsx/Games';
import './home.css';


const Home = () => {

  return (
    <div>
      <div className='container'>
        <div className="section one">
        
          <Panel />

        </div>
        <div className="section two">
          <Games />
        </div>
      </div>
    </div>
  );
}

export default Home;