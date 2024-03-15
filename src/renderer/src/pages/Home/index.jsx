import { Button, Container, Section1, Section2, Title } from "./styles"

function App() {
    const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  
    return (
      <Container>
        <Section1>
          <Button>Sign Up</Button>
        </Section1>
        <Section2>
          <Title>Wide Coverage Location</Title>
        </Section2>
      </Container>
    )
  }
  
  export default App