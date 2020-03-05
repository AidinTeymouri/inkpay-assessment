import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'

const Counter = ({ counter }) => (
  <Paper elevation={3}>
    <Box m={2}>
      <Typography variant="h6">Counter</Typography>
    </Box>
    <Box display="flex" justifyContent="center" alignItems="center" m={2}>
      <Typography variant="h5">{counter}</Typography>
    </Box>
  </Paper>
)

export default Counter
