import MarkdownInput from './MarkdownInput'
import LivePreview from './LivePreview'
import { Box } from '@mui/material'
import AppContextProvider from '../state/appState'

function App() {
  return (
    <AppContextProvider>
      <Box
        sx={{
          pt: { xs: 2, sm: 5 },
          pl: { xs: 0, sm: 2 },
          pr: { xs: 0, sm: 2 },
          // pb: 2,
          flexDirection: { xs: 'column', sm: 'row' },
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'space-evenly' },
          width: { xs: '100%', sm: 'auto' },
          alignItems: { xs: 'center', sm: 'flex-start' },
        }}
      >
        <MarkdownInput />
        <LivePreview />
      </Box>
    </AppContextProvider>
  )
}

export default App
