import { Box, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../../components/Header";

const Pacttos = () => {
  return (
    <Box m="20px">
      <Header title="Pacttos (Chats)" />
      <Typography display="flex" justifyContent="center" textAlign="center">
        No Pacttos found
      </Typography>
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
  );
};

export default Pacttos;
