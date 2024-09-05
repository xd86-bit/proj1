import React, { useEffect, useState,useRef } from 'react';
import './stylesSelectComponent.css';
import urlFleche1 from "../assets/imgs/fleche1.png";
import urlFleche2 from "../assets/imgs/fleche2.png";

export default function Select({Width,Height,Options,optionSelected}) {
  const [imgUrl, setImgUrl] = useState([urlFleche1,urlFleche2]);
  const [imgUrlSwitch, setImgUrlSwitch] = useState(0);
  const w=Width;
  const h=Height;
  const [options, setOptions] = useState(Object.values(Options));
  const SelectRef=useRef(null);
  const [optionsVisibility,setOptionsVisibility]=useState(true);
  const [optionsValue, setOptionsValue] = useState([]);
  const [isHover,setIsHover]=useState(null);
  /*
  const [optionSelected,setOptionSelected]=useState(null);*/
  
  const handleMouseEnter = (index) => {
    setIsHover(index);
  };
  const handleMouseLeave = () => {
    setIsHover(null);
  };

  const optionHandler = (index) => {

    optionSelected(options[index+1]);
  
    setOptions(prev=>{
      const prevs=[...prev];
      let x=prevs[0];
      prevs[0]=prevs[index+1];
      prevs[index+1]=x;
      return prevs;
    });
    setOptionsValue(prev=>{
      const prevs=[...prev];
      let x=prevs[0];
      prevs[0]=prevs[index+1];
      prevs[index+1]=x;
      return prevs;
    });
    
  };

  const clearOptions = () => {
    if (optionsValue.length > 0) {
      setOptionsValue([optionsValue[0]]);
    }
  };

  const addOption = (option) => {
    setOptionsValue(prevOptions => [...prevOptions, option]);
  };
  const selectHandler=()=>{
    
    setOptionsVisibility(!optionsVisibility);
     
       if(optionsVisibility)
       {   
         for (let i = 1; i < options.length; i++) 
         {
         addOption(options[i]);
         }
         setImgUrlSwitch(1);
       }
       else
       {
       clearOptions();
       setImgUrlSwitch(0);
       }
  };
 
  const handleClickOutside = (event) => {
    if (SelectRef.current && !SelectRef.current.contains(event.target)) {
      
      setOptionsValue(prevOptions => {
        if (prevOptions.length > 0) {
          return [prevOptions[0]];
        }
      });
      setImgUrlSwitch(0);
      setOptionsVisibility(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click",handleClickOutside);
    
    if(typeof options!=='undefined' && options.length>0)
    {
       addOption(options[0]);
    }
    else
    {
      addOption("Select is Empty!!!"); 
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div   style={{ display: "flex", flexDirection: 'column', width:w}} >
      
         <div ref={SelectRef} onClick={selectHandler} key={0} style={{height:h,display: "flex",width: "100%",backgroundColor: "#F3F8FE",justifyContent:"space-between",borderRadius:"5px"}}>
            <p style={{width: "80%",paddingLeft:"10px"}}>{optionsValue[0]}</p>
            <img src={imgUrl[imgUrlSwitch]} width="25px"  height="25px" style={{alignSelf: "center"}} />
         </div>

        {optionsValue.slice(1).map((option, index) => (
          <div 
           onMouseEnter={()=>handleMouseEnter(index)} 
           onMouseLeave={handleMouseLeave}
           onClick={()=>optionHandler(index)}
           class={isHover===index?"hoverOption-hovered":"hoverOption"}
           key={index+1} 
           style={{ fontWeight:"600",height:h,paddingLeft:"10px", marginTop: "0px",border:"1px solid black",borderRadius:"5px"}}>
           <p>{option}</p>
          </div>
        ))}
        
      </div>

      

    </>
  );
}
