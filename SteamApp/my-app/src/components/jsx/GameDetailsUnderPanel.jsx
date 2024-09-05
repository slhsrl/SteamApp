import React from 'react'
import '../css/GameDetailsUnderPanel.css'

const GameDetailsUnderPanel = ({item}) => {
    return (
        <div className='gamedetailunderpanel'>
            <div className='gdundermenu'>
                <p className='gdunderp'>Mağaza sayfası</p>
                <p className='gdunderp'>DLC</p>
                <p className='gdunderp'>Topluluk Merkezi</p>
                <p className='gdunderp'>Tartışmalar</p>
                <p className='gdunderp'>Rehberler</p>
                <p className='gdunderp'>Destek</p>
            </div>
            <img className='gamedetailunderpanel-img' src={item.gameDetailPhoto} alt={item.gameName} />
        </div>
    )
}

export default GameDetailsUnderPanel