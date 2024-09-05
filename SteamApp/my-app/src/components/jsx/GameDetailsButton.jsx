import React, { useEffect, useState } from 'react'
import '../css/GameDetailsButton.css'
import { CiSettings } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames, startGame, } from '../../redux/slices/gamesSlice';



const GameDetailsButton = ({ item }) => {
    const dispatch = useDispatch();
    const { games, currentGame, queue, status } = useSelector(state => state.games);
    useEffect(() => {
        dispatch(fetchGames());
      }, [dispatch]);
    
      const handleStartGame = (gameId) => {
          dispatch(startGame(gameId));
      };
    return (
        <div className='gdb'>
            {item.isDownload ? (
                <>
                    <button className='gdbtn'>OYNA</button>
                    <div className='gdtext1'>
                        <p className='pUpper'>SON GİRİŞ</p>
                        <p className='pUnder'>{item.lasttwoweeks} saat</p>
                    </div>
                    <div className="gdtext2">
                        <FaClock className='faclock'/>
                        <div className='gdp'>
                            <p className='pUpper'>OYNAMA SÜRESİ</p>
                            <p className='pUnder'>{item.playtime} saat</p>
                        </div>
                    </div>
                    <div className="gdtext3">
                        <GrAchievement className='GrAchievement'/>
                        <div className='gdp'>
                            <p className='pUpper'>BAŞARIMLAR</p>
                            <p className='pUnder'>{(item.achievement)}/{(item.totalachievement)}</p>
                        </div>
                    </div>

                </>
            ) : (
                <>
                    <button onClick={() => handleStartGame(item.id)} className='gdbtn'>YÜKLE</button>
                    <div className='gdbtext'>
                        <p className='pUpper'>GEREKLİ ALAN</p>
                        <p className='pUnder'>{(item.size / 1024).toFixed(2)} {(item.size / 1024) > 1 ? 'GB' : 'MB'}</p>
                    </div>
                    <div className="gdicons">
                        <div className="gdicon">
                            <CiSettings />
                        </div>
                        <div className="gdicon">
                            <FaRegStar />
                        </div>
                    </div>
                </>
            )
            }

        </div >
    )
}

export default GameDetailsButton