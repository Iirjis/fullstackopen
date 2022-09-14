import { useState } from 'react'

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

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  let count = props.data.good + props.data.neutral + props.data.bad
  if (count === 0) {
    return (
      <div>
        <Header content='Statistics' />
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <Header content='Statistics' />
      <table>
        <tbody>
          <StatisticLine text="good" value={props.data.good} />
          <StatisticLine text="neutral" value={props.data.neutral} />
          <StatisticLine text="bad" value={props.data.bad} />
          <StatisticLine text="all" value={count} />
          <StatisticLine text="average" value={(props.data.good - props.data.bad) / count} />
          <StatisticLine text="positive" value={props.data.good / count * 100 + ' %'} />
        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])


  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }

  const data = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  return (
    <div>
      <Header content='Give feedback' />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics data={data} />
    </div>
  )
}

export default App;
