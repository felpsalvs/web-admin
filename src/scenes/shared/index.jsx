import {Box, Typography, useTheme} from '@mui/material'
import {tokens} from '../../theme'
import Header from '../../components/Header'

const Shared = () => {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);

  return (
    <Box>
      <Header title='There are no public web links you created' subtitle='Chats' />
      <Header title='There are no private web links you created' subtitle='Chats' />
    </Box>
  )
}

export default Shared;