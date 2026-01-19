import { useState } from 'react'
import languages from "../../../public/lenguage"


function AccordionArrey() {
  const [selectLang, setSelectLang] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
console.log('selectLang e uguale a:',selectLang)
  console.log(isOpen)
function onElementCliccato(chi) {

    console.log('cliccato', chi);
    setSelectLang(chi);
    console.log('chi e uguale a', chi)

    {
      if (selectLang != chi) {
        setIsOpen(true);
      } else if(isOpen== false && selectLang==chi) {
        setIsOpen(true);
      }else{
        setIsOpen(false);
      }
    }

    
    
  }

  return (<div className='accordion'>
    {languages.map((language, indice) =>
      <button key={language.id} onClick={() => { onElementCliccato(indice) }}>{language.title}</button>

    )}

    {/* {selectLang != x ? <div className='card'>
      <h2>{languages[selectLang].title}</h2>
      <p>{languages[selectLang].description}</p>
    </div> :  <div className='card'><h2>Nessun elemento selezionato</h2></div>   } */}

    {isOpen ? <div className='card'>
      <h2>{languages[selectLang].title}</h2>
      <p>{languages[selectLang].description}</p>
    </div> : <div className='card'><h2>Nessun linguaggio selezionato</h2></div>}
  </div>


  )
}
export default AccordionArrey