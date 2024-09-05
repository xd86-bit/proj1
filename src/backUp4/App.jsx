
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
import {cardsInfos} from "./components/cardsInfos";

export default function App()
{
  const [numPagClicked, setNumPagClicked] = useState();
  const [optionSelected1,setOptionSelected1]=useState("Tous les categories");
  const [optionSelected2,setOptionSelected2]=useState("Tout le Maroc");
  const [searchTyped,setSearchTyped]=useState("");
  const [datasSearchHelper,setDatasSearchHelper]=useState([]);
  const [arrayCardInfo,setArrayCardInfo]=useState([]);
  var datas=[];

  const [indexOfFirstCard,setIndexOfFirstCard]=useState(0);
  const [indexOfLastCard,setIndexOfLastCard]=useState(6);
  const [validIndexOfLastCard,setValidIndexOfLastCard]=useState();
  
  var CardsPerPage=0;

 
  

   useEffect(()=>{
    /*
    CardsPerPage=indexOfLastCard-indexOfFirstCard;*/
    CardsPerPage=11;
    ////////////
     for(let i=0;i<cardsInfos.length;i++)
     {
      ////////////////////////////////searchHelper
      setDatasSearchHelper((prev)=>{
        return [...prev,cardsInfos[i].sousTitre];
       });
      ////////////////////////////////cardsData
      setArrayCardInfo((prev)=>{
       return [...prev,cardsInfos[i]];
      });
     }
      // Ensure finish does not exceed the length of arrayCardInfo
      /*
      setValidIndexOfLastCard(Math.min(indexOfLastCard,arrayCardInfo.length));*/
   },[]);

    return(
      <>
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
            optionSelected={setOptionSelected1}
            />
            </div>
            
            <div class="col-md-3 col-sm-12">
            <Select Height={"30px"}
            Options={
            {
             option1:"Tout le Maroc",
             option2:"casablanca",
             option3:"tanger"
            }
            }
            optionSelected={setOptionSelected2}
            />
            </div>
            <div class="col-md-3 col-sm-12">
            <CustomButton searchData={searchTyped} datas={cardsInfos} onModifyDataCards={setArrayCardInfo} filter1={optionSelected1} filter2={optionSelected2} text="Rechercher"  height="30px" />
            </div>
          </div>
          <div id="row3" class="row">
              <div class="col-md-12 col-sm-12">
             
              <Line height="10px" url={require('./assets/imgs/Line2.png')} />
              </div>
          </div>

      </div>
         

        <div class="container"> 
          <div class="row" >
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",columnGap:"100px"}} >
           {arrayCardInfo.slice(indexOfFirstCard,Math.min(indexOfLastCard,arrayCardInfo.length)).map((card)=>(
            <>
            
              <CardCom width="350px"
              height="350px"
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

           
        <Pagination numberClick={setNumPagClicked} cards={arrayCardInfo} setCards={setArrayCardInfo} cardsPerPage={6} setNumOfFirstCard={setIndexOfFirstCard} setNumOfLastCard={setIndexOfLastCard} />

       
       <p> {indexOfFirstCard} ::: {CardsPerPage}  </p>
    <button  onClick={function(){alert(CardsPerPage);}}>click me </button>
      
      </>
    );
}