import { useState } from 'react'


function App() {
	const [isOpen, setIsOpen] = useState(false);
	function toggleAccordion() {
		setIsOpen(isOpen => !isOpen);
	}

	return (
		<>
			<h1>Learn Web developer</h1>

			<div className='Accordion'>
				<div className='title'>
					<button onClick={toggleAccordion}>HTML</button>
				</div>
				{isOpen && <div>HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini.</div>}
			</div>
			<div className='Accordion'>
				<div className='title'>
					<button onClick={toggleAccordion}>CSS</button>
				</div>
				{isOpen && <div>HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini.</div>}
			</div>
		</>
	)
}

export default App
