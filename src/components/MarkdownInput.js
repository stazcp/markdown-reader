import React, { useContext } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { Container } from '@mui/material'
import { AppContext } from '../state/appState'

export default function EmptyTextarea() {
  const { setMarkedText } = useContext(AppContext)

  return (
    <Container maxWidth="sm">
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Add your Markdown here..."
        style={{ minWidth: 400, minHeight: 500, maxWidth: '50vw', maxHeight: '90vh' }}
        onChange={(e) => setMarkedText(e.target.value)}
      />
    </Container>
  )
}
