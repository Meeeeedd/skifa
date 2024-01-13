import { Button } from '@chakra-ui/react'

import './App.css'

function Person(props){
  return(
    <>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </>
  )
}

function App() {
  return (
    <>
<<<<<<< HEAD
      <Button colorScheme='blue'>Button</Button>
=======
      <Person name="John" age="30"/>
>>>>>>> f8121d9 (add)
    </>
  )
}

export default App
