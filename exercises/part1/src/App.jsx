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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} numExercises1={exercises1} part2={part2} numExercises2={exercises2} part3={part3} numExercises3={exercises3} />
      <Total numExercises1={exercises1} numExercises2={exercises2} numExercises3={exercises3} />
    </div>
  )
}


export default App