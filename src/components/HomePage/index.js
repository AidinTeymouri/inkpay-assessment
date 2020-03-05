import React from 'react'
import { Box, Typography } from '@material-ui/core'

const HomePage = ({ children }) => (
  <Box display="flex" height="100%" justifyContent="center" alignItems="center" flexDirection="column">
    <Box m={2}>
      <Typography variant="h4">Home Page</Typography>
    </Box>
    {children}
  </Box>
)

export default HomePage
