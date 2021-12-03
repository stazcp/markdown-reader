import MarkdownInput from './MarkdownInput'
import MarkdownOutput from './MarkdownOutput'
import { Container } from '@mui/material'
import AppContextProvider from '../state/appState'

function App() {
  return (
    <AppContextProvider>
      <Container maxWidth="lg" sx={{ pt: 5, flexDirection: 'row', display: 'flex' }}>
        <MarkdownInput />
        <MarkdownOutput />
      </Container>
    </AppContextProvider>
  )
}

export default App
