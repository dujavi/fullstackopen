import { useState } from 'react'
import Unicafe from './Unicafe'
import CourseInfo from './CourseInfo'
import Anecdotes from './Anecdotes'
import './App.css'

const Navigation = (props) => {
	return (
		<>
		<h1>Part 1 Exercises - Please select an exercise</h1>
		<button
			className={
				'nav-button' +
				(props.activeApp === 'CourseInfo' ? ' nav-button--active' : '')
			}
			onClick={() => props.setActiveApp('CourseInfo')}
		>
			CourseInfo (1.1 - 1.5)
		</button>
		<button
			className={
				'nav-button' +
				(props.activeApp === 'Unicafe' ? ' nav-button--active' : '')
			}
			onClick={() => props.setActiveApp('Unicafe')}
		>
			Unicafe (1.6 - 1.10)
		</button>
		<button
			className={
				'nav-button' +
				(props.activeApp === 'Anecdotes' ? ' nav-button--active' : '')
			}
			onClick={() => props.setActiveApp('Anecdotes')}
		>
			Anecdotes (1.12 - 1.14)
		</button>
		<hr/>
		</>
	)
}


const App = () => {
	const [activeApp, setActiveApp] = useState('CourseInfo')
	return (
		<div>
			<Navigation activeApp={activeApp} setActiveApp={setActiveApp} />
			{activeApp === 'Unicafe' && <Unicafe />}
			{activeApp === 'CourseInfo' && <CourseInfo />}
			{activeApp === 'Anecdotes' && <Anecdotes />}
		</div>
	)
 }
 
 export default App