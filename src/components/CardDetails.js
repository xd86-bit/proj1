import React, { useEffect, useState,useRef} from 'react';
import { BrowserRouter as Router, Route, Link, Routes,useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';
import "./styleCardDetails.css";
import urlLogo from "../assets/imgs/logo.png";
import Line from "./Line.js";
import Select from './Select';
import Search from './Search';
import {cardsInfos} from "./cardsInfos";
import CustomButton from './CustomButton';


export default function CardDetails({datas,width,height})
{
 

    const navigate = useNavigate();
    const [formVisible,setFormVisible]=useState(false);
    const [tel,setTel]=useState();
    const [telVisible,setTelVisible]=useState(false);
    const ref1=useRef(null);
    const [media,setMedia]=useState();
    const [mediaFiltered,setMediaFiltered]=useState([]);
    const [scrollSize,setScrollSize]=useState();
    const [scrollNum,setScrollNum]=useState();  
    const [imageError, setImageError] = useState(false); 
    const [rowData,setRowData]=useState({}); 
    
    const {id}=useParams();


   
  

    function filterMedia(inputString) {
        if(inputString!== undefined)
        {
          if (inputString.endsWith(":")) {
            inputString = inputString.slice(0, -1);
            }
            const resultArray = inputString.split(":");
            const arr = [];
            for (let i = 0; i < resultArray.length; i++) {
            arr[i] = resultArray[i];
           }
            return arr;
        }
        else
        {
            return [];
        }
          

      }

      /*verify chambres, salon....   start */
      const styleSpecs={
        display:"flex",
        flexWrap:"wrap",
        width:"100%",
        height:"50px",
        gap:"10px",
        marginTop:"-15px",
        justifyContent:"center"
        };
        
      const [tabSpecs,setTabSpecs]=useState([]);


      useEffect(() => {
        for(let i=0;i<datas.length;i++)
         {
            if(parseInt(id)===datas[i].id)
            {
             setRowData(datas[i]);
             break;
            }
         }
      },[]);

      useEffect(() => {
        let icons=[];
        let nums=[];
        let tab=[];
         if(typeof rowData.chambre!=='undefined')
         {
          icons.push("chambreIcon.png");
          nums.push(rowData.chambre);
         }
         if(typeof rowData.douche!=='undefined')
         {
          icons.push("doucheIcon.png");
          nums.push(rowData.douche);
         }
         if(typeof rowData.salon!=='undefined')
         {
          icons.push("salonIcon.png");
          nums.push(rowData.salon);
         }
         if(typeof rowData.etage!=='undefined')
         {
          icons.push("etageIcon.png");
          nums.push(rowData.etage);
         }
         if(typeof rowData.surfaceH!=='undefined')
         {
          icons.push("surfaceHabitable.png");
          nums.push(rowData.surfaceH);
         }
         if(typeof rowData.surfaceT!=='undefined')
         {
          icons.push("surfaceTotal.png");
          nums.push(rowData.surfaceT);
         }
           for(let x in icons)
           {
            let y;
            let yy;
            let t=[];
            y=icons[x];
            yy=nums[x];
            t.push(y);
            t.push(yy);
            setTabSpecs(prevOptions => {
                const prevs=[...prevOptions,t];
                return prevs;
            });
           }
        
      }, [rowData]);
     /*verify chambres, salon....  end*/
    useEffect(()=>{
       setTelVisible(true);

        async function fetchData() {
          var filteredMedia=[];
          if(rowData.media==null)
          {
            
            setMediaFiltered("noImage.webp");
            setScrollSize(0)
          }
          else
          {
          await setTel(rowData.tel);  
          await setMedia(rowData.media);  
          filteredMedia = await filterMedia(media);
          setMediaFiltered(filteredMedia);
          setScrollSize(filteredMedia.length);
          }
         

          
      }
      fetchData(); 
    },[rowData,media]);

    useEffect(()=>{
      
       if(scrollSize>0)
       {
        setScrollNum(0);
       }
   },[scrollSize]);
   const handleImageError = () => {
    setImageError(true);
   };

    const formulaire=()=>{
     return(
      <>
        <div style={{display:"flex",flexDirection:"column",width:"400px"}}>
            <div style={{display:"flex"}}>
             <p>NOM</p>
             <input type="text" class="form-control mb-3" style={{marginLeft:"25px"}} />
            </div>
            <div style={{display:"flex"}}>
             <p>EMAIL</p>
             <input type="text" class="form-control mb-3" style={{marginLeft:"25px"}} />
            </div>
            <div style={{display:"flex"}}>
            <p>MESSAGE</p>
            <textarea class="form-control mb-3" style={{marginLeft:"25px"}}></textarea>
            </div>
        </div>
        <div class="text-end" style={{paddingBottom:"10px"}}><button id="btn">Envoyer message</button>
        </div>
      </>
     );
    }
  
    const nextClickHandler=()=>{

      if(scrollNum<(scrollSize)-1)
      {
        setScrollNum(scrollNum+1);
      }
      setImageError(false);
    }
    const prevClickHandler=()=>{

      if(scrollNum>0)
      {
        setScrollNum(scrollNum-1);
      }
      setImageError(false);
    }
   const clickHandler=()=>{
   setFormVisible(!formVisible);
   }
   const clickHandler2=()=>{
    setTelVisible(!telVisible);
   
      if(ref1.current && telVisible)
       {
        ref1.current.innerText="Tel : "+rowData.tel;
        ref1.current.style.backgroundColor="#0464A7";
        clickHandler();
       }
       else
       {
        ref1.current.innerText="Contacter  l'annonceur";
        ref1.current.style.backgroundColor="#00bd1f";
        clickHandler();
       }
   }

  
    return(
        <>
            <div class="container"> 
            
              <div id="header" class="row">
                <div id="logo">
                <img src={urlLogo} width="75px"/>
                </div>
                <div id="auth" style={{color:"#1398F9"}}  onClick={()=>{navigate('/login');}}>Se connecter</div>
              </div> 
              <div id="row11" class="row" >
                  <div class="col-md-12 col-sm-12">
             
                   <Line width="100%" height="5px" url={require('../assets/imgs/Line1.png')} />
                  </div>
              </div>

               
            

                    <div id="row1" class="row">
                       <div class="col-md-12 col-sm-12 text-center">
                       <h3>{rowData.titre}</h3>
                       </div>
                    </div>
                         
                     <div id="row2" class="row">
                     <div class="col-md-12 col-sm-12">
             
                     <Line height="5px" url={require('../assets/imgs/Line3.png')} />
                     </div>
                     </div>
                    <div class="row"  >
                      <div class="col-md-6 col-sm-6">
                        
                        <p id="address" style={{paddingLeft:'35px'}}>{rowData.adresse}</p>
                      </div>
                      <div class="col-md-6 col-sm-6 text-end">
                        <p id="prix" style={{color:"#0071BD"}}>Prix : {rowData.prix}</p>
                      </div> 
                      
                    </div>


                    <div class="row"  >
                      <div style={{display:'flex',alignItems:'center'}}>
                       <div   class="col-md-6 col-sm-6" >
                         <div style={{display:'flex'}}>
                          <img src={require('../assets/imgs/locationIcon.png')} width="35px" height="35px" />
                          <p style={{marginTop:"0px",fontWeight:"600"}}>{rowData.ville}</p>
                         </div>
                       </div>
                       <div class="col-md-6 col-sm-6 text-end" >
                       <p  style={{fontWeight:"600"}}>{rowData.dateRelease}</p>
                       </div>
                      </div>
                    </div>


                     
                    
                   

                    <div id="row4" class="row">
                     <div class="col-md-12 col-sm-12">
             
                     <Line height="5px" url={require('../assets/imgs/Line3.png')} />
                     </div>
                    </div>
                     {/* caaaaaaaaaaaaard start*/}

                   
                      <div class="row justify-content-center">
                       <div class="col-sm-12 col-md-6 text-center">
                        <div class="slider-container">
                        <img class="nav-icon nav-prev" onClick={prevClickHandler} src={require("../assets/imgs/vectorLeft.png")} width="50px"/>
                       
                      
                            
                    {rowData.media!=null?(
                      !imageError ?(
                      mediaFiltered.length > 0 && typeof scrollNum!=="undefined" && (
                      <img class="slider-image" onError={handleImageError} src={require(`../assets/imgs/${mediaFiltered[scrollNum]}`)} alt="Media Image" />
                      )):(
                      <img class="slider-image" src={require("../assets/imgs/imageError.png")} alt="Media Image" />
                      )
                    ):(
                       <img class="slider-image" src={require("../assets/imgs/noImage.webp")} alt="Media Image" />
                    )} 
                        
                        

                       
                        <img  class="nav-icon nav-next" onClick={nextClickHandler} src={require("../assets/imgs/vectorRight.png")} width="50px"/>
                         </div>   
                        </div>
                        </div>
                     
                      {/* caaaaaaaaaaaaard end*/}

                      {/* description start*/}
                      <div id="row6" class="row">
                       <div class="col-md-12 col-sm-12">
             
                       <Line height="5px" url={require('../assets/imgs/Line3.png')} />
                       </div>
                      </div>

                      <div id="row7" class="row"  style={{paddingLeft:'25px'}}>
                          <div class="col-12">
                           <p style={{fontWeight:"700"}}>Description:</p>
                          </div>
                          <div class="col-12">
                           <p style={{fontWeight:"600"}}>{rowData.description}</p>
                          </div>
                      </div>
                       {/* description end*/}
                       <div id="row77" class="row">
                          <div class="col-12">
                           <Line height="5px" url={require('../assets/imgs/Line3.png')} />
                          </div>
                       </div>

                       {/* specs start*/}
                      <div id="row8" class="row"  style={{paddingLeft:"50px",paddingRight:"50px",paddingTop:"25px"}}>
                        <div class="col-12" style={{height:"100px"}}>
                      <div style={styleSpecs}>
                        {tabSpecs.map((t)=>(
                        <div style={{
                          width: "30%",
                          height: "100%",
                          backgroundImage: `url("${require('../assets/imgs/' + t[0])}")`,
                          backgroundSize: "30px", // Size of the background image
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "left center", // Position background on the left
                          border: "1px solid gray",
                          borderRadius: "5px",
                          fontSize: "10px",
                          display: "flex",
                          alignItems: "center", // Center the content vertically
                          justifyContent: "flex-end", // Align the text to the right
                          textAlign: "right", // Align the text to the right
                          paddingLeft: "35px", // Add space to the left for the background image
                          paddingRight: "2px", // Adjust padding as needed
                          boxSizing: "border-box" // Include padding and border in the element's total width and height
                        }}>{t[1]}</div>
                      )
                      )}
                      </div>
                         </div>
                      </div>
                        {/* specs prix end*/}
                        <div id="row9" class="row">
                         <div class="col-md-12 col-sm-12">
             
                         <Line height="5px" url={require('../assets/imgs/Line3.png')} />
                         </div>
                         </div>
                         {/* chat && contacter start*/}
                         <div id="row10" class="row"  style={{paddingLeft:"50px",paddingRight:"50px",paddingTop:"15px"}}>
                          
                          <div class="col-12 text-end">
                          <div class="div-btn">
                           <button ref={ref1} class="btn" id="btn" onClick={clickHandler2} >Contacter  l'annonceur</button>
                      
                          </div>
                          </div>
                         </div>
                        {/* chat && contacter end*/}

                        {/* formulaire start*/}
                        <div class="row" style={{paddingLeft:"50px",paddingRight:"50px",paddingTop:"15px"}}>
                          <div class="col-12">
                          {formVisible?formulaire():""}
                          </div>
                        </div>
                        {/* formulaire end*/}
                      
            </div>
          
        </>
    );
}