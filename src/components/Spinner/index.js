import React from 'react'
import { Box, Spinner as Spin } from 'grommet'

const Spinner = () => {
  return (
    <Box justify='center' pad='xlarge' height='300px' align='center'>
      <Spin size='large' />
    </Box>
  )
}

export default Spinner
