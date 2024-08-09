import {Box, Typography, useTheme} from '@mui/material'
import {tokens} from '../../theme'
import Header from '../../components/Header'

const Library = () => {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);

  return (
    <Box>
      <Header title='Select a video' subtitle='Chats' />
    </Box>
  )
}

export default Library;