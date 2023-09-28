const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  console.log(props)
    return (
      <div>
      <Part part={props.part1} numExercises={props.numExercises1} />
      <Part part={props.part2} numExercises={props.numExercises2} />
      <Part part={props.part3} numExercises={props.numExercises3} />
    </div>
    )
}

const Part = (props) => {
  console.log(props)
    return (
      <div>
        <p>{props.part} has {props.numExercises} exercises</p>
      </div>
    )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>The total number of exercises is {props.numExercises1 + props.numExercises2 + props.numExercises3}</p>
    </div>
  )
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
      <Content part1={part1.name} numExercises1={part1.exercises} part2={part2.name} numExercises2={part2.exercises} part3={part3.name} numExercises3={part3.exercises} />
      <Total numExercises1={part1.exercises} numExercises2={part2.exercises} numExercises3={part3.exercises} />
    </div>
  )
}


export default App