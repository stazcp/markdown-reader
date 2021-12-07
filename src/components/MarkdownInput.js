import React, { useContext } from 'react'
import TextField from '@mui/material/TextField'
import { Typography, Box } from '@mui/material'
import { AppContext } from '../state/appState'

export default function EmptyTextarea() {
  const { setMarkedText, markedText, charCount } = useContext(AppContext)

  return (
    <Box
      sx={{
        minWidth: { xs: '95vw', sm: '300px' },
        width: { xs: '95vw', sm: '500px' },
        pr: { xs: 0, sm: 1 },
      }}
    >
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
        sx={{
          '& .MuiOutlinedInput-root': {
            background: 'white',
          },
        }}
      />
    </Box>
  )
}
