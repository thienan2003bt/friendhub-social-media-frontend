import { Container } from '@chakra-ui/react'
import './App.css'
import IndexRoute from './routes/IndexRoute'

function App() {

  return (
    <Container w={"100vw"}>
      <IndexRoute />
    </Container>
  )
}

export default App
