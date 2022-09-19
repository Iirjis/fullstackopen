import React, { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.content}</h1>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = (props) => {
  return (
    <p>{props.content}</p>
  )  
}

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const [selected, setSelected] = useState(randomIndex(anecdotes))
  const [anecdoteVotes, setVoteCount] = useState([0,0,0,0,0,0,0])
  const handleNextClick = () => {
    setSelected(randomIndex(anecdotes))
  }
  const handleVoteClick = () => {
    setVoteCount(anecdoteVotes => {
      anecdoteVotes[selected]++
      return [ ...anecdoteVotes ]
    })
  }

  const mostVotes = Math.max(...anecdoteVotes)
  const bestAnecdote = anecdotes[anecdoteVotes.indexOf(mostVotes)]

  return (
    <div>
      <Header content='Anecdote of the day' />
      <Display content={anecdotes[selected]} />
      <p>Has {anecdoteVotes[selected]} votes</p>
      <Button handleClick={handleVoteClick} text='Vote' />
      <Button handleClick={handleNextClick} text='Next anecdote' />
      <Header content='Anecdote with most votes' />
      <Display content={bestAnecdote} />
      <p>Has {mostVotes} votes</p>
    </div>
  )
}
export default App;
