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
                
            </div>
           {isOpen && <div>
            <h2>{title}</h2>
            <p>{content}</p>
           </div>}
           
        </>
    )
}

export default AccordionBase