import React, { useEffect, useState } from 'react'
import {IoIosArrowDropupCircle} from "react-icons/io";
import "./ScrollUpButton.css"

//I used a react icon package for the scroll up and down button

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY >400){
                setShowTopBtn(true);
            }else{
                setShowTopBtn(false)
            }
        });
    },[]);

    const goToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    };
  return (
    <div className='top-to-btm'>
      {showTopBtn&&(
          <IoIosArrowDropupCircle size={500} className='icon-position icon-style' onClick={goToTop}/>
      )}
      
    </div>
  )
}

export default ScrollToTop
