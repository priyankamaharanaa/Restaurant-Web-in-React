import React, { useState } from 'react'
import "./style.css";
import Menu  from "./menuApi.js";
import MenuCard from "./MenuCard.js";
import Navbar from "./Navbar";

const uniqueList = [ ...new Set(Menu.map((culElem) =>{
    return culElem.category;
})
),
"All",
];
console.log(uniqueList);

const Restraurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    // console.log(menuData);
    const[menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {

        if (category === "All"){
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((culElem) =>{
            return culElem.category === category;
        });

        setMenuData(updatedList);
        
    }

    return ( 
    <>
        <Navbar filterItem = {filterItem} menuList = {menuList}/> 
        <MenuCard  menuData = {menuData}/>
    </>
 )
    
  
}

export default Restraurant;