import React from 'react'
import ReactDOM from 'react-dom'

const Content = (props) => {
  return (
    <div>
      <Part name={props.name1} />
      <Part name={props.name2}  />
      <Part name={props.name3} />
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
      <p>Amount of exercises: {props.exercises1 + props.exercises2 + props.exercises3} </p>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content  
      name1={part1.name}
      name2={part2.name} 
      name3={part3.name}/>
      <Total 
      exercises1={part1.exercises}
      exercises2={part2.exercises} 
      exercises3={part3.exercises}/>
    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'))