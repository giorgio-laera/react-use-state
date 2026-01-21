import { useState } from 'react'
import './index.css'

import AccordionBaseList from './components/base/AccordionBaseList.jsx'
import AccordionArrey from './components/map/AccordionMap.jsx'

function App() {

	return (
		<div>
			<h1>Learn Web developer</h1>

			<h2>Esempio base</h2>
			<AccordionBaseList />
			<h2>esempio con map</h2>
			<AccordionArrey />
		</div>
	)
}

export default App;
