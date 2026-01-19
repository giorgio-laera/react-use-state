import { useState } from 'react'
import languages from "../../../public/lenguage"


function AccordionArrey (){
  const [selectLang, setSelectLang]=useState(0);

  function onElementCliccato(chi){
    console.log('cliccato',chi);
    setSelectLang(chi);
  }
    return(<div className='accordion'>
      {languages.map((language,indice)=>
        <button  onClick={()=>{onElementCliccato(indice)}}>{language.title}</button>

    )}
    <div>
        <h2>{languages[selectLang].title}</h2>
        <p>{languages[selectLang].description}</p>
    </div>
    </div>
    
   
)}
export default AccordionArrey