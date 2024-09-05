import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './stylesCardCom.css';



export default function CardCom({width,height,url,headerCard,prix,adresse,chambre,douche,salon,etage,surfaceH,surfaceT})
{
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

 /////////////styles
  const styles={
    display:"flex",
    flexDirection:"column",
    border:"1px solid gray",
    width:width,
    height:height,
    borderRadius:"5px",
    padding:"10px",
    margin:"11px"
  };
  const stylesHeaderCard={
   fontSize:"15px",
   fontWeight:"600"
  };
  const stylesBodyCard={
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
   };
   const img={
    width:`${parseFloat(width)/1.5}px`,
    height:`${parseFloat(height)/2}px`,
    borderRadius:"5px"
    };
    const p1={
      fontSize:"10px"
      };
    const p2={
      fontSize:"10px",
      color:"blue",
      marginTop:"-15px"
      };

        const styleSpecs={
        display:"flex",
        flexWrap:"wrap",
        width:"100%",
        marginTop:"-15px",
        justifyContent:"center"
        };
        /*
        const styleSpec1={
         width:"25%",
         backgroundImage:`url("${require('../assets/imgs/'+test)}")`,
         backgroundSize: "16px",
         backgroundRepeat: "no-repeat",
         backgroundColor:"gray",
         backgroundPosition:"5px center",
         textAlign:"right",
         borderRadius:"5px"
          };*/
///////////////styles

  return(
    <>
       <div style={styles}>
          <div  style={stylesHeaderCard}>{headerCard}</div>
            <div  style={stylesBodyCard}>
              <img src={url}  style={img}/>
              <p style={p1}>{prix}</p>
              <p style={p2}>{adresse}</p>

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
       </div>



       

     

    </>
    );

}