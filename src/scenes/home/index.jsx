import { Box, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='HOME' subtitle='Hey Felipe, welcome to Pactto!'/>
        <p>Open your inbox and verify your email</p>
        <p>Check the <a href="https://www.youtube.com/watch?v=CvbvDGsZsKM&t=93s">short video of Pactto in action</a></p>
        <p>Wanna record your computer screen or review files? Download Pactto for Mac or Windows</p>
        <p>Wanna review videos, images or audio files with your phone or tablet? Download Pactto for iOS or Android</p>
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
  )
}

export default Home;