import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({title}) => <h1>{title}</h1>
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)
const Stat = ({name, number}) => <tr><td>{name}</td><td>{number}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  if (total === 0) return <div>No feedback given</div>

  return (
    <table><tbody>
      <Stat name = "good" number = {good} />
      <Stat name = "neutral" number = {neutral} />
      <Stat name = "bad" number = {bad} />
      <Stat name = "all" number = {total} />
      <Stat name = "avg" number = {(good - bad) / total} />
      <Stat name = "pos" number = {(good * 100 / total).toFixed(1) + "%"} />
      </tbody></table>  
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const pageTitle = "Please rate"
  const statsTitle = "Statistics"

  return (
    <div>
      <Title title = {pageTitle} />
      <Button handleClick = {() => setGood(good + 1)} text = "good" />
      <Button handleClick = {() => setNeutral(neutral + 1)} text = "neutral" />
      <Button handleClick = {() => setBad(bad + 1)} text = "bad" />
      <Title title = {statsTitle}  />
      <Statistics
        good = {good}
        neutral = {neutral}
        bad = {bad}
      />      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)