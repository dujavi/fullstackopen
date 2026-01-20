import { useState } from 'react'

const Anecdotes = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.'
	 ] 
	const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
	const [popularAnecdote, setPopularAnecdote] = useState("No votes yet")
	const [curAnecdote, setCurAnecdote] = useState(-1)
	if(curAnecdote == -1){
		setNextAnecdote()
	}
	function setNextAnecdote(){
		let nextIndex = -1
		//Avoid selecting the same anecdote again
		while(nextIndex == curAnecdote){
			nextIndex = Math.floor(Math.random() * anecdotes.length)
		}
		setCurAnecdote(nextIndex)
	}
	function setVote(index){
		votes[index]++
		setVotes(votes)
		setPopularAnecdote(getAPopularAnecdotes())
	}
	function getAPopularAnecdotes(){
		let maxVote = 0
		let maxIndex = 0
		for(let i = 0; i < votes.length; i++){
			if(votes[i] > maxVote){
				maxVote = votes[i]
				maxIndex = i
			}
		}
		return anecdotes[maxIndex]
	}
	return (
		<>
		<h1>Anecdote of the day</h1>
		<p>{anecdotes[curAnecdote]}</p>
		<button onClick={() => setVote(curAnecdote)}>Vote</button>
		<button onClick={setNextAnecdote}>Next anecdote</button>
		<h1>Anecdote with most votes</h1>
		<p>{popularAnecdote}</p>
		</>
	)
}

export default Anecdotes