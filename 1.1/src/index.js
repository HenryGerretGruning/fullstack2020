import React from 'react'
import ReactDOM from 'react-dom'

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} />
      <Part name={props.parts[1].name}  />
      <Part name={props.parts[2].name} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name}</p> 
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Amount of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'))