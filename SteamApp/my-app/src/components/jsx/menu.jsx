import React from 'react'

const menu = ({menuclick,menuItems}) => {
    return (
        <>
            <div >
                <a onClick={menuclick} className={`menuitem ${menuItems[0].active === true ? 'active' : ''}`} href='#'>{menuItems[0].text}</a>
            </div>
            <div >
                <a onClick={menuclick} className={`menuitem ${menuItems[1].active === true ? 'active' : ''}`} href='#'>{menuItems[1].text}</a>
            </div>
            <div >
                <a onClick={menuclick} className={`menuitem ${menuItems[2].active === true ? 'active' : ''}`} href='#'>{menuItems[2].text}</a>
            </div>
            <div >
                <a onClick={menuclick} className={`menuitem ${menuItems[3].active === true ? 'active' : ''}`} href='#'>{menuItems[3].text}</a>
            </div>
        </>
    )
}

export default menu