import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Hey Felipe, welcome to Pactto!" subtitle="" />
      </Box>

      <Box>
        <Typography
          variant="h1"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          My uploads
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
