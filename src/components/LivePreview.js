import { useContext } from 'react'
import { Container } from '@mui/material'
import { AppContext } from '../state/appState'
import ReactMarkdown from 'react-markdown'

export default function MarkdownOutput() {
  const { markedText } = useContext(AppContext)
  return (
    <Container maxWidth="sm">
      <ReactMarkdown children={markedText} />
    </Container>
  )
}
