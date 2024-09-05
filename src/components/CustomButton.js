import React from 'react';



export default function CustomButton({text,width,height,searchData,datas,onModifyDataCards,filter1,filter2,numLastCard,setNumOfFirstCard,setNumOfLastCard})
{
   const click=()=>{
    setNumOfFirstCard(0);
    setNumOfLastCard(Math.min(numLastCard,datas.length));
    filterFunction();
   };
  
   var dataFiltered=[];

   const filterFunction=()=>{
    dataFiltered=[];
    datas.map(data=>{
        if(filter1.slice(4)===data.titre && filter2===data.ville)
        {
        dataFiltered.push(data);
        }
        else if(filter1.slice(4)===data.titre && filter2==="Tout le Maroc")
        {
        dataFiltered.push(data);
        }
        else if(filter2===data.ville && filter1==="Tous les categories")
        {
        dataFiltered.push(data);
        }
     });
   
    var dataFiltered2=[];
        if(filter1!=="Tous les categories" || filter2!=="Tout le Maroc")
        {
          if(searchData==="")
          {
          onModifyDataCards(dataFiltered);
          }
          else
          {
              for(let i=0;i<dataFiltered.length;i++)
              {
                if(searchData.includes(dataFiltered[i].sousTitre))
                {
                  dataFiltered2.push(dataFiltered[i]);
                }
              }
              onModifyDataCards(dataFiltered2);
          }
          
        }
        else
        {
          if(searchData==="")
          {
          onModifyDataCards(datas);
          }
          else
          {
            for(let i=0;i<datas.length;i++)
            {
              if(searchData.includes(datas[i].sousTitre))
              {
                dataFiltered2.push(datas[i]);
              }
            }
            onModifyDataCards(dataFiltered2);
          }
         
        }

     };

   return(
    <>
    <div>
    <button id="buttonRechercher" style={{width:typeof width==='undefined'?"100%":width,height:height}} onClick={click}>{text}</button>
    </div>
    </>
   );



}