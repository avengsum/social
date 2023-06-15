import { Box, Container } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box
    bgcolor="lightcoral"
    flex={2}
    p={2}
    sx={{display:{xs:"none" , sm:'block'}}}
    >
        Sidebar
    </Box>
  )
}

export default Sidebar