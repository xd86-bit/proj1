import React, { useEffect, useState,useRef } from 'react';
import './stylesSearchComponent.css';



export default function Search({width,height,searchTyped,datasSearchHelper})
{
    const [datasSearchHelperFilter,setDatasSearchHelperFilter]=useState([]);
    const SelectRef=useRef(null);
    const KeyUpHandler=(event)=>{
        
        setDatasSearchHelperFilter([]);
         let tab=[];
         if(event.target.value!="")
         {
         for(let i in datasSearchHelper)
         {
           if(datasSearchHelper[i].indexOf(event.target.value) > -1)
           {
            if(tab.length<=5)
            {
            tab.push(datasSearchHelper[i]);
            }
            setShowDiv(true);
           }
         }
         setDatasSearchHelperFilter(tab);
         }
         else
         {
          setShowDiv(false);
         }
        searchTyped(event.target.value);
    };
    const handleClickOutside = (event) => {
        if (SelectRef.current && !SelectRef.current.contains(event.target)) {
            setDatasSearchHelperFilter([]); 
            setShowDiv(false);
        }
      };
    useEffect(() => {
        document.addEventListener("click",handleClickOutside);
        
        
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);

    const [showDiv,setShowDiv]=useState(false);
    const [hover,setHover]=useState(null);
   
    const stylesearchFilter={
      width:width,
      display: showDiv?"block":"none",
      marginTop:"3px",
    };
    
    const handleMouseEnter = (index) => {
     
      setHover(index);
    };
    const handleMouseLeave = () => {
    
      setHover(null);
    };
    const clickHandler = (data) => {
      SelectRef.current.value=data;
      searchTyped(data);
    };
    
    return(
        <>
        <div id="searchContainer">

         <input ref={SelectRef} onKeyUp={KeyUpHandler}  id="search" type="text"  style={{width:width,height:height}} placeholder=" Que recherchez-vous?"/>
          <div id="searchFilter" style={stylesearchFilter} >
          {datasSearchHelperFilter.map((data,index)=>(
            <div
             id={hover===index?"filterHovered":""} 
             onClick={()=>clickHandler(data)}
             onMouseEnter={()=>handleMouseEnter(index)} 
             onMouseLeave={handleMouseLeave}
             key={index}>{data}</div>
          ))}
          </div>
         </div> 
        </>
    );



}