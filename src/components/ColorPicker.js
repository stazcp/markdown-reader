import { Popover, Box } from '@mui/material'
import { HexColorPicker } from 'react-colorful'

export default function BasicPopover({ anchorEl, handleClose, color, setColor }) {
  const open = Boolean(anchorEl)

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      PaperProps={{
        sx: { overflow: 'visible', borderRadius: 2 },
      }}
    >
      <HexColorPicker color={color} onChange={setColor} />
    </Popover>
  )
}
