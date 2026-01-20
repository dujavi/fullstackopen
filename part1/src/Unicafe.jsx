import { useState } from 'react'

const Header = (props) => {
	return (
		<h1>{props.title}</h1>
	)
}

const GetFeedback = (props) => {
	return (
		<>
			<button onClick={props.handleFeedback('good')}>Good</button>
			<button onClick={props.handleFeedback('neutral')}>Neutral</button>
			<button onClick={props.handleFeedback('bad')}>Bad</button>
		</>
	)
}

const FeedbackStats = (props) => {
	return (
		<>
		<h1>Statistics</h1>
		<table>
			<tbody>
				{props.stats.map((stat, index) => (
					<tr key={index}>
						<td>{stat}</td>
						<td>{props.values[index]}</td>
					</tr>
				))}
				<tr>
					<td>Total</td>
					<td>{props.values.reduce((acc, curr) => acc + curr, 0)}</td>
				</tr>
			</tbody>
		</table>
		</>
	)
}

const Unicafe = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const handleFeedback = (feedback) => () => {
		switch (feedback) {
			case 'good':
				setGood(good + 1)
				break
			case 'neutral':
				setNeutral(neutral + 1)
				break
			case 'bad':
				setBad(bad + 1)
				break
			default:
				break
		}
	}

	return (
	  <div>
		 <Header title={"Please Give Feedback"} />
		 <GetFeedback handleFeedback={handleFeedback} />
		 <FeedbackStats stats={["Good", "Neutral", "Bad"]} values={[good, neutral, bad]} />
	  </div>
	)
 }

 export default Unicafe