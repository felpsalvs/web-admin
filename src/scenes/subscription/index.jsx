import {Box, Typography, useTheme} from '@mui/material'
import {tokens} from '../../theme'
import Header from '../../components/Header'

const Subscription = () => {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);

  return (
    <Box>
      <Header title='SUBSCRIBE TO PACTTO PRO' subtitle='Chats' />
    </Box>
  )
}

export default Subscription;