import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Statistics = (props) => {
  return (
    <div>
    <p>all: {props.bad+props.neutral+props.good}</p>
    <p>average: {((props.bad*-1) +(props.neutral*0) +(props.good*1)) / (props.bad+props.neutral+props.good)}</p>
    <p>positive: {props.good/(props.bad+props.neutral+props.good) *100}%</p> 
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = "give feedback"
  


  return (
    <div>
    <Header title={title} />
    <Button handleClick={() => setGood(good+1)} text="Good" />
    <Button handleClick={() => setNeutral(neutral+1)} text="Neutral" />
    <Button handleClick={() => setBad(bad+1)} text="Bad" />
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <Statistics bad={bad} good={good} neutral={neutral}/>
    </div>
  )
}


const Header = (props) => {
  return <h1>{props.title}</h1>
}



ReactDOM.render(<App />, 
  document.getElementById('root')
)