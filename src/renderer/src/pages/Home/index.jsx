import { Button, Container, Img, Link, Section1, Section2, Text1, Title } from "./styles"
import PeopleImg from '../../assets/peoples.png'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <Container>
      <Section1>
        <Button>Sign Up</Button>
      </Section1>
      <Section2>
        <Title>Wide Coverage Location</Title>
        <Text1>Shared rides, There’s lots to do in your city, and we’ve got the rides to help you enjoy it all. And they’re all available right from your app.</Text1>
        <Link href="#">Learn more</Link>
        <Img src={PeopleImg} />
      </Section2>
    </Container>
  )
}

export default App