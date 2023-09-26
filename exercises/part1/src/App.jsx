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
      <p>{props.part1} has {props.exNum1} exercises</p>
      <p>{props.part2} has {props.exNum2} exercises</p>
      <p>{props.part3} has {props.exNum3} exercises</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>The total number of exercises is {props.exNum1 + props.exNum2 + props.exNum3}</p>
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
      <Content part1={part1} exNum1={exercises1} part2={part2} exNum2={exercises2} part3={part3} exNum3={exercises3} />
      <Total exNum1={exercises1} exNum2={exercises2} exNum3={exercises3} />
    </div>
  )
}


export default App