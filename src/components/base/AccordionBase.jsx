import { useState } from 'react'


    function AccordionBase(props) {
        const { title, content } = props;

        
        const [isOpen, setIsOpen] = useState(false);

        function toggleAccordion() {
            setIsOpen(isOpen => !isOpen);
        }
    
    return (
        <>


            <div className='accordion'>
                <div className='accordion-title'>
                    <button onClick={toggleAccordion}>{title}</button>
                </div>
                {isOpen && <div>{content}</div>}
            </div>
            {/* <div className='accordion'>
                <div className='accordion-title'>
                    <button onClick={toggleAccordion}>CSS</button>
                </div>
                {isOpen && <div>CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web.</div>}
            </div>
            <div className='accordion'>
                <div className='accordion-title'>
                    <button onClick={toggleAccordion}>Javascript</button>
                </div>
                {isOpen && <div>JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web.</div>}
            </div>
            <div className='accordion'>
                <div className='accordion-title'>
                    <button onClick={toggleAccordion}>Node.JS</button>
                </div>
                {isOpen && <div>Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server.</div>}
            </div>
            <div className='accordion'>
                <div className='accordion-title'>
                    <button onClick={toggleAccordion}>Express</button>
                </div>
                {isOpen && <div>Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste.</div>}
            </div>
            <div className='accordion'>
                <div className='accordion-title'>
                    <button onClick={toggleAccordion}>ReactJS</button>
                </div>
                {isOpen && <div>ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione.</div>}
            </div> */}
        </>
    )
}

export default AccordionBase