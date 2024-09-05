import React, { useEffect, useState,useRef } from 'react';
import "./styleCardDetails.css";
import urlLogo from "../assets/imgs/logo.png";
import Line from "./Line.js";



export default function CardDetails({width,height,url,headerCard,prix,adresse,chambre,douche,salon,etage,surfaceH,surfaceT,date,description,Media,Tel})
{
    const [formVisible,setFormVisible]=useState(false);
    const [tel,setTel]=useState(Tel);
    const [telVisible,setTelVisible]=useState(false);
    const ref1=useRef(null);
    const [media,setMedia]=useState(Media);
    const [mediaFiltered,setMediaFiltered]=useState([]);
    const [scrollSize,setScrollSize]=useState();
    const [scrollNum,setScrollNum]=useState();  
    const [imageError, setImageError] = useState(false); 

    function filterMedia(inputString) {
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

      /*verify chambres, salon....   start */
      const styleSpecs={
        display:"flex",
        flexWrap:"wrap",
        width:"100%",
        marginTop:"-15px",
        justifyContent:"center"
        };
        
      const [tabSpecs,setTabSpecs]=useState([]);
      useEffect(() => {
        let icons=[];
        let nums=[];
        let tab=[];
         if(typeof chambre!=='undefined')
         {
          icons.push("chambreIcon.png");
          nums.push(chambre);
         }
         if(typeof douche!=='undefined')
         {
          icons.push("doucheIcon.png");
          nums.push(douche);
         }
         if(typeof salon!=='undefined')
         {
          icons.push("salonIcon.png");
          nums.push(salon);
         }
         if(typeof etage!=='undefined')
         {
          icons.push("etageIcon.png");
          nums.push(etage);
         }
         if(typeof surfaceH!=='undefined')
         {
          icons.push("surfaceHabitable.png");
          nums.push(surfaceH);
         }
         if(typeof surfaceT!=='undefined')
         {
          icons.push("surfaceTotal.png");
          nums.push(surfaceT);
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
        
      }, []);
     /*verify chambres, salon....  end*/
    useEffect(()=>{
       setTelVisible(true);

        async function fetchData() {
          var filteredMedia=[];
          if(Media==null)
          {
            
            setMediaFiltered("noImage.webp");
            setScrollSize(0)
          }
          else
          {
          filteredMedia = await filterMedia(media);
          setMediaFiltered(filteredMedia);
          setScrollSize(filteredMedia.length);
          }
         

          
      }
      fetchData(); 
    },[]);

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
    /*
    setFormVisible(!formVisible);*/
      if(ref1.current && telVisible)
       {
        ref1.current.innerText="Tel : "+Tel;
        ref1.current.style.backgroundColor="green";
       }
       else
       {
        ref1.current.innerText="Contacter  l'annonceur";
        ref1.current.style.backgroundColor="#0071BD";
       }
   }

  
    return(
        <>
            <div class="container"> 
            
               <div id="header" class="row">
                <div id="logo">
                <img src={urlLogo} width="75px"/>
                </div>
                <div id="auth" style={{color:"#1398F9"}}>Se connecter</div>
               </div> 
                <div id="row11" class="row" >
                  <div class="col-md-12 col-sm-12">
             
                   <Line height="5px" url={require('../assets/imgs/Line1.png')} />
                  </div>
                </div>
                <div id="cardBody" style={{paddingLeft:"100px",paddingRight:"100px"}}>
                    <div class="row" id="row1" style={{paddingLeft:"50px",paddingRight:"50px"}}>
                      <img src={require('../assets/imgs/prevIcon.png')} style={{width:"50px"}}/>
                      <h3>Appartement</h3>
                      <p></p>
                    </div>
                    <div id="row2" class="row">
                     <div class="col-md-12 col-sm-12">
             
                     <Line height="5px" url={require('../assets/imgs/Line3.png')} />
                     </div>
                     </div>
                    <div class="row" id="row3"  style={{paddingLeft:"50px",paddingRight:"50px"}}>
                     <p id="address">short addresse</p>
                     <p id="prix" style={{color:"#0071BD"}}>6000dh</p>

                     <div id="city">
                      <img src={require('../assets/imgs/locationIcon.png')} width="35px" height="35px" />
                      <p style={{marginTop:"11px",fontWeight:"600"}}>city</p>
                     </div>
                     <p id="date" style={{fontWeight:"600"}}>date posted</p>
                    </div>

                    <div id="row4" class="row">
                     <div class="col-md-12 col-sm-12">
             
                     <Line height="5px" url={require('../assets/imgs/Line3.png')} />
                     </div>
                     </div>
                     {/* caaaaaaaaaaaaard start*/}

                      <div id="row5" class="row"  style={{paddingLeft:"50px",paddingRight:"50px"}}>
                     
                        <div id="vecLeft">
                        <img onClick={prevClickHandler} src={require("../assets/imgs/vectorLeft.png")} width="50px"/>
                        </div>
                        <div id="image">
                          
                    {Media!=null?(
                      !imageError ?(
                      mediaFiltered.length > 0 && typeof scrollNum!=="undefined" && (
                      <img onError={handleImageError} src={require(`../assets/imgs/${mediaFiltered[scrollNum]}`)} height="350px" alt="Media Image" />
                      )):(
                      <img src={require("../assets/imgs/imageError.png")} height="350px" alt="Media Image" />
                      )
                    ):(
                       <img src={require("../assets/imgs/noImage.webp")} height="350px" alt="Media Image" />
                    )}



                       
                          
                        </div>
                        <div id="vecRight">
                        <img  onClick={nextClickHandler} src={require("../assets/imgs/vectorRight.png")} width="50px"/>
                        </div>   
                      </div>
                      {/* caaaaaaaaaaaaard end*/}

                      {/* description start*/}
                      <div id="row6" class="row">
                       <div class="col-md-12 col-sm-12">
             
                       <Line height="5px" url={require('../assets/imgs/Line3.png')} />
                       </div>
                      </div>

                      <div id="row7" class="row"  style={{paddingLeft:"50px",paddingRight:"50px"}}>
                        
                           <p style={{fontWeight:"600"}}>Description</p>
                           <p>studio lumineux fffsdfsfsfsffdqsfsfsfsdfsfsdfsdfsfsfsfsdfsdfsdf fsfsd chambgg</p>
                         
                      </div>
                       {/* description end*/}
                       <div id="row77" class="row">
                       <div class="col-md-12 col-sm-12">
             
                       <Line height="5px" url={require('../assets/imgs/Line3.png')} />
                       </div>
                        </div>

                       {/* proposer prix start*/}
                      <div id="row8" class="row"  style={{paddingLeft:"50px",paddingRight:"50px"}}>
                        
                      <div style={styleSpecs}>
                        {tabSpecs.map((t)=>(
                        <div style={{
                        width:"30%",
                        backgroundImage:`url("${require('../assets/imgs/'+t[0])}")`,
                        backgroundSize: "16px",
                        backgroundRepeat: "no-repeat",
                        border:"1px solid gray",
                        paddingRight:"2px",
                        backgroundPosition:"1px center",
                        textAlign:"right",
                        borderRadius:"5px",
                        fontSize:"10px"
                        }}>{t[1]}</div>
                      )
                      )}
                      </div>
                         
                      </div>
                        {/* proposer prix end*/}
                        <div id="row9" class="row">
                         <div class="col-md-12 col-sm-12">
             
                         <Line height="5px" url={require('../assets/imgs/Line3.png')} />
                         </div>
                         </div>
                         {/* chat && contacter start*/}
                         <div id="row10" class="row"  style={{paddingLeft:"50px",paddingRight:"50px"}}>
                          <img src={require("../assets/imgs/chatIcon.png")} onClick={clickHandler}  />

                          <div class="div-btn">
                          <button ref={ref1} class="btn btn-primary" id="btn" onClick={clickHandler2} >Contacter  l'annonceur</button>
                          <img id="i" src={require("../assets/imgs/phoneIcon.png")} style={{width:"25px"}}/>
                          </div>
                          
                         </div>
                        {/* chat && contacter end*/}

                        {/* formulaire start*/}
                        <div class="row" style={{paddingLeft:"50px",paddingRight:"50px"}}>
                          {formVisible?formulaire():""}
                        </div>
                        {/* formulaire end*/}
                        </div>
            </div>
          
        </>
    );
}