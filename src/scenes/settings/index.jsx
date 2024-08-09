import {Box, Typography, useTheme} from '@mui/material'
import {tokens} from '../../theme'
import Header from '../../components/Header'

const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);

  return (
    <Box>
      <Header title='Review Settings' subtitle='Chats' />
    </Box>
  )
}

export default Settings;