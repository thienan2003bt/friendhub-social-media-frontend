import { Container } from '@chakra-ui/react'
import './App.css'
import Header from './components/common/Header/Header'
import Footer from './components/common/Footer/Footer'

function App() {

  return (
    <Container w={"100vw"}>
		  <Header />
      <Footer />
    </Container>
  )
}

export default App
