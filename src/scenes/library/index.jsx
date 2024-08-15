import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PlusIcon from "@mui/icons-material/Add";

const Library = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h2" fontWeight="bold">
          Select a video
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ ml: 2, backgroundColor: "#1DE9B6", color: "#000" }}
          startIcon={<PlusIcon />}
        >
          Upload New Video
        </Button>
      </Box>
      <Typography variant="body2" color="#6e6e6e" mt="40px">
        Videos uploaded to the reference video library can be used in
        side-by-side comparisons, or can be shared with learners directly.
      </Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="20px"
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
      </Box>
    </Box>
  );
};

export default Library;
