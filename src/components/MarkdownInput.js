import React, { useContext } from 'react'
import TextField from '@mui/material/TextField'
import { Container } from '@mui/material'
import { AppContext } from '../state/appState'

export default function EmptyTextarea() {
  const { setMarkedText, markedText } = useContext(AppContext)

  return (
    <Container maxWidth="sm">
      <TextField
        id="standard-multiline-flexible"
        helperText="try # H1 **bold** *italic* or /"
        multiline
        value={markedText}
        placeholder="Input your Markup here..."
        onChange={(e) => setMarkedText(e.target.value)}
        variant="outlined"
        minRows={10}
        rows={20}
        fullWidth
      />
      {/* <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Add your Markdown here..."
        style={{ minWidth: 400, minHeight: 500, maxWidth: '50vw', maxHeight: '90vh' }}
        onChange={(e) => setMarkedText(e.target.value)}
      /> */}
    </Container>
  )
}
