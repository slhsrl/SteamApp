import React,{useState} from 'react'
import '../css/Navigations.css'
import Menu from "./menu"

const Navigations = () => {
    
    const [menuItems, setMenuItems] = useState([
        { text: 'MAĞAZA', active: true },
        { text: 'KÜTÜPHANE', active: false },
        { text: 'TOPLULUK', active: false },
        { text: 'SLHSRL', active: false }
    ]);
    const menuclick = (event) => {
       setMenuItems(prevItems =>
            prevItems.map((item, index) =>
                item.text === event.target.text ? { ...item, active: true } : { ...item, active: false }
            )
        );
        };
    

    return (
        <div className='navmenu'>
         <Menu menuclick={menuclick} menuItems={menuItems}/>
        </div>   
    )
}

export default Navigations