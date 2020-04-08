import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({title}) => <h1>{title}</h1>
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)
const Stat = ({name, number}) => <p>{name} {number}</p>

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
      <Stat name = "good" number = {good} />
      <Stat name = "neutral" number = {neutral} />
      <Stat name = "bad" number = {bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)