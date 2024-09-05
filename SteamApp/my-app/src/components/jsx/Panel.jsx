import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/Panel.css'
import { FaRegClock } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import GameName from './GameName';
import { setfiltertext } from '../../redux/slices/dataSlice';
import { AiTwotoneAppstore } from "react-icons/ai";



const Panel = () => {

  const gamesdata = useSelector((store) => store.data.data.games);
  const gamename = useSelector((store) => store.data.filterdata.games);
  console.log('gamsdata:', gamesdata)

  const dispatch = useDispatch();

  const inputhandleChange = (event) => {

    dispatch(setfiltertext(event.target.value));
  };
  const handleChange = (event) => {

    console.log(event.target.value)
  };


  if (!gamesdata || !Array.isArray(gamesdata)) {
    return <div>Loading...</div>;
  }

  return (
    <div className='allpanel' >
      <div className="panelalt">
          <div className="panelalt1">
            Mağaza Ana Sayfası
          </div>

        <AiTwotoneAppstore className='AiTwotoneAppstore'/>
        </div>
        <div className="panelpading">
      <div className='panel'>
        <select className="panelselect" id="" onChange={handleChange}>
        {gamesdata.map((category,index) => (
               <option key={index} value="">{category.category}</option>
              ))}
          
        </select>
        <FaRegClock className='icon'/>
        <FaRegCirclePlay className='icon'/>
      </div>
      
      <div className='panelsearc'>
      <IoMdSearch className='iconps'/>
        <input onChange={inputhandleChange} placeholder='Search' className='input-panel' type='text' ></input>

      </div>
      <div className='gamenamecbk'>
        - FAVORİTE
      </div>
      <div className='GamesName'>
          <GameName item={gamename}/>
      </div>
      </div>
    </div>
  );
}

export default Panel;
