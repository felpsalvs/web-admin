import {Box, TextField} from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";

import Header from '../../components/Header'

const Shared = () => {

  return (
      <Box m="20px">
      <Header title='There are no public web links you created' />
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search"
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 1 }} />,
          }}
        />
      <Header title='There are no private web links you created' />
      <Box>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search"
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 1 }} />,
          }}
        />
      </Box>
    </Box>
  )
}

export default Shared;