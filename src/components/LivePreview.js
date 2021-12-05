import { useContext, useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
} from '@mui/material'
import { AppContext } from '../state/appState'
import ReactMarkdown from 'react-markdown'
import '@fontsource/aclonica'
import '@fontsource/shojumaru'
import ColorPicker from './ColorPicker'
import FormatColorTextIcon from '@mui/icons-material/FormatColorText'

export default function MarkdownOutput() {
  const { markedText } = useContext(AppContext)
  const [font, setFont] = useState('roboto')
  const [color, setColor] = useState('#000000')
  const [anchorEl, setAnchorEl] = useState(null)

  const openColorPicker = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const closeColorPicker = () => {
    setAnchorEl(null)
  }

  const handleFontChange = (event) => {
    setFont(event.target.value)
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">Preview</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <IconButton onClick={openColorPicker}>
            <FormatColorTextIcon aria-describedby="openColorpicker" variant="contained" />
          </IconButton>
          <Box sx={{ minWidth: 120, mb: 1, ml: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Font</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={font}
                label="font"
                onChange={handleFontChange}
              >
                <MenuItem value={'roboto'}>Roboto</MenuItem>
                <MenuItem value={'aclonica'}>Aclonica</MenuItem>
                <MenuItem value={'shojumaru'}>Shojumaru</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          border: '1px solid black',
          borderRadius: '4px',
          width: '100%',
          boxSizing: 'border-box',
          height: '492.5px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            padding: '16.5px 14px',
            alignItems: 'center',
            cursor: 'text',
            boxSizing: 'border-box',
            overflow: 'auto',
            fontFamily: font,
            color: `${color}`,
          }}
        >
          <Box sx={{ mt: -2 }}>
            <ReactMarkdown children={markedText} />
          </Box>
        </Box>
      </Box>
      <ColorPicker
        handleClose={closeColorPicker}
        anchorEl={anchorEl}
        color={color}
        setColor={setColor}
      />
    </Container>
  )
}
