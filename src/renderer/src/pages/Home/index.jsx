import { Container } from "./styles"

function App() {
    const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  
    return (
      <Container>
       
      </Container>
    )
  }
  
  export default App