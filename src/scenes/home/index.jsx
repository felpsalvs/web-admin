import { Box, Typography, Button, TextField, useTheme, Link, Chip } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Hey Felipe, welcome to Pactto!" />
      </Box>

      <Box mb="20px">
        <Box display="flex" alignItems="center" mb="10px">
          <Chip label="DONE" color="secondary" />
          <Typography variant="body1" ml="10px">
            Open your inbox and verify your email
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mb="10px">
          <Chip label="DONE" color="secondary" />
          <Typography variant="body1" ml="10px">
            Check the{' '}
            <Link href="https://example.com/video" color="secondary" underline="hover">
              short video of Pactto in action
            </Link>
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mb="10px">
          <Chip label="DONE" color="secondary" />
          <Typography variant="body1" ml="10px">
            Wanna record your computer screen or review files? Download Pactto for{' '}
            <Link href="https://example.com/mac" color="secondary" underline="hover">
              Mac
            </Link>{' '}
            or{' '}
            <Link href="https://example.com/windows" color="secondary" underline="hover">
              Windows
            </Link>
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <Chip label="DONE" color="secondary" />
          <Typography variant="body1" ml="10px">
            Wanna review videos, images or audio files with your phone or tablet? Download Pactto for{' '}
            <Link href="https://example.com/ios" color="secondary" underline="hover">
              iOS
            </Link>{' '}
            or{' '}
            <Link href="https://example.com/android" color="secondary" underline="hover">
              Android
            </Link>
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" mb="20px">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          My uploads
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{fontWeight: "bold"}}
          startIcon={<AddIcon />}
        >
          Upload New Video
        </Button>
      </Box>

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

export default Home;
