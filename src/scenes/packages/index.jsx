import {Box, Typography, useTheme} from '@mui/material'
import {tokens} from '../../theme'

const Packages = () => {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);

  return (
    <Box>
      <Typography>
        ADD PACKAGE
      </Typography>
      
    </Box>
  )
}

export default Packages;