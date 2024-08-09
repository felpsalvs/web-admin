import {Box, Typography, useTheme} from '@mui/material'
import {tokens} from '../../theme'
import Header from '../../components/Header'

const Pacttos = () => {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);

  return (
    <Box>
      <Header title='Pacttos (Chats)' subtitle='Chats' />
      
    </Box>
  )
}

export default Pacttos;