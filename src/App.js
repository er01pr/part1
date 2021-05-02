import React from 'react'

// Now starting Course Information Step 2
const Header = (props) => {
  return (
    <h1> {props.course} </h1>
  )
}



const Part = (props) => {

  const  infos = [
    {name: "Fundamentals of React", exercise: 10,},
    {name: "Using props to pass data", exercise: 7},
    {name: "State of a component", exercise: 14}

  ]
  
  return (
    <p>
      {infos.map((infos) => (
          <Content name={infos.name} exercise={infos.exercise}/>
      ))}
    </p>
  )
}

const Content = (props) => {

  return (
    <p>{props.name} {props.exercise}</p>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.exercises[0]+ props.exercises[1] + props.exercises[2]}
      </p>
    </div>
  )
}


const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]

    
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
      <Part />
    </div>
  )
}



export default App