/*
import React from "react";
import ReactDom from "react-dom/client";*/




export default function Header(props)
{

    return(
      <>
       <div className="nav-bar bg-dark rounded text-white text-center">
        <h2>
           {props.HeaderParams.text} 
        </h2>
       </div>
       
      </>
    )
}