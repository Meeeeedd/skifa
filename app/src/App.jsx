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
      <Button colorScheme='blue'>Button</Button>
    </>
  )
}

export default App
