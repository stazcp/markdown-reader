import MarkdownInput from './MarkdownInput'
import LivePreview from './LivePreview'
import { Container } from '@mui/material'
import AppContextProvider from '../state/appState'

function App() {
  return (
    <AppContextProvider>
      <Container
        maxWidth="lg"
        sx={{ pt: 5, flexDirection: 'row', display: 'flex', width: '100vw' }}
      >
        <MarkdownInput />
        <LivePreview />
      </Container>
    </AppContextProvider>
  )
}

export default App
