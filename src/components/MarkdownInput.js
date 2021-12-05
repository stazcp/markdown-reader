import React, { useContext } from 'react'
import TextField from '@mui/material/TextField'
import { Container, Typography } from '@mui/material'
import { AppContext } from '../state/appState'

export default function EmptyTextarea() {
  const { setMarkedText, markedText, charCount } = useContext(AppContext)

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" sx={{ pb: 2, pt: 2 }}>
        Markdown Text
      </Typography>
      <TextField
        id="standard-multiline-flexible"
        helperText={`Chars: ${charCount}`}
        multiline
        value={markedText}
        placeholder="Input your Markup here..."
        onChange={(e) => setMarkedText(e.target.value)}
        variant="outlined"
        rows={20}
        fullWidth
      />
    </Container>
  )
}
