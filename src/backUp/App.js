
import Header from "./components/Header";
import React, { useEffect, useState,useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Select from './components/Select';
import Search from './components/Search';
import CustomButton from './components/CustomButton';
import Pagination from './components/Pagination';
import Line from './components/Line';
import CardCom from './components/CardCom';
import CardDetails from './components/CardDetails';
import "./stylesHomePage.css";
import urlLogo from "./assets/imgs/logo.png";


export default function App()
{
  const [numPagClicked, setNumPagClicked] = useState([]);


  const [optionSelected,setOptionSelected]=useState(null);
  const [searchTyped,setSearchTyped]=useState(null);
  const [datasSearchHelper,setDatasSearchHelper]=useState(["half life 2","fear","half life 1","half day","fearlight"]);

  const [arrayCardInfo,setArrayCardInfo]=useState([]);
  const CardInfo={
    titre:"Appartements",
    url:"cardImage1.jpg",
    prix:"4650DH",
    adresse:"casablanca-maarif",
    chambre:"3",
    douche:"2",
    salon:"1",
    etage:"3",
    surfaceH:"123m2",
    surfaceT:"150m2",
    dateRelease:"ily a 42 min",
    description:"appartemet ggsgsggdfggggdsgdfgdgdgdgdgdgdgdfgdfgdgdfgdgdfgdgdgdfgd",
    media:"gr3.psd:cardImage2.jpg:fear.jpg:half.jpg:counter.jpg:elmatador.jpg:",
    tel:"066589978"
  };

/*
  const rowTest={
     display:"flex",
     flexWrap:"wrap"
    };*/

   useEffect(()=>{

     for(let i=0;i<10;i++)
     {
      setArrayCardInfo((prev)=>{
       return [...prev,CardInfo];
      });
     }

   },[]);

    return(
      <>
      {
        /*
      <div class="container"> 
          <div id="row1" class="row">
             <div id="logo">
              <img src={urlLogo} width="75px"/>
             </div>
             <div id="auth" style={{color:"#1398F9"}}>Se connecter</div>
          </div> 

          <div id="row11" class="row">
              <div class="col-md-12 col-sm-12">
             
              <Line height="5px" url={require('./assets/imgs/Line1.png')} />
              </div>
          </div>

          <div id="row2" class="row">
            <div class="col-md-3 col-sm-12" >
            <Search  height="30px"  searchTyped={setSearchTyped} datasSearchHelper={datasSearchHelper}/>
            </div>
            <div class="col-md-3 col-sm-12">
            <Select  Height={"30px"}
            Options={
            {
             option1:"Tous les categories",
             option2:"Les Appartements",
             option3:"Les Chambres"
            }
            }
            optionSelected={setOptionSelected}
            />
            </div>
            
            <div class="col-md-3 col-sm-12">
            <Select Height={"30px"}
            Options={
            {
             option1:"Tou le Maroc",
             option2:"casa",
             option3:"tanger"
            }
            }
            optionSelected={setOptionSelected}
            />
            </div>
            <div class="col-md-3 col-sm-12">
            <CustomButton text="Rechercher"  height="30px" />
            </div>
          </div>
          <div id="row3" class="row">
              <div class="col-md-12 col-sm-12">
             
              <Line height="10px" url={require('./assets/imgs/Line2.png')} />
              </div>
          </div>

      </div>
         
*/
        
          }

       {/*


        <div class="container"> 
          <div class="row" >
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}} >
           {arrayCardInfo.map((card)=>(
            <>
            
              <CardCom width="200px"
              height="200px"
              url={require(`./assets/imgs/${card["url"]}`)}
              headerCard={card["titre"]}
              prix={card["prix"]}
              adresse={card["adresse"]}
              chambre={card["chambre"]}
              douche={card["douche"]}
              salon={card["salon"]}
              etage={card["etage"]}
              surfaceH={card["surfaceH"]}
              surfaceT={card["surfaceT"]}
              />
            
            </>
           ))}
         </div>
         </div>
        </div>

           
        <Pagination totalPages={20} numberClick={setNumPagClicked} />
        <p>Pages clicked: {numPagClicked.join(', ')}</p>
        */}
        
  {/*
        <div class="container"> 
           <div class="row">
             <CardCom width="200px"
              height="200px"
              url={require(`./assets/imgs/${CardInfo["url"]}`)}
              headerCard={CardInfo["titre"]}
              prix={CardInfo["prix"]}
              adresse={CardInfo["adresse"]}
              chambre={CardInfo["chambre"]}
              douche={CardInfo["douche"]}
              salon={CardInfo["salon"]}
              etage={CardInfo["etage"]}
              surfaceH={CardInfo["surfaceH"]}
              surfaceT={CardInfo["surfaceT"]}
               />
           </div>

        </div>

        <button  onClick={()=>alert(arrayCardInfo.length)}> click me</button>
*/
  }

       <CardDetails  
        Tel={CardInfo.tel}
        Media={CardInfo.media}
        chambre={CardInfo.chambre} 
        douche={CardInfo.douche}
        salon={CardInfo.salon}
        etage={CardInfo.etage}
        surfaceH={CardInfo.surfaceH}
        surfaceT={CardInfo.surfaceT}  
       />
        
       

      


      </>
    );
}