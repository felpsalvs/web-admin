import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const Subscription = () => {
  const features = [
    "Every feature on the FREE plan",
    "Full access to the Pactto app on iPhones, iPads, Android, Mac, Windows, and Web",
    "Max screen recording duration on Pactto Desktop: unlimited",
    "Max review duration on mobile: unlimited",
    "Max review duration on Pactto Web: 12 minutes",
    "Max review duration on Pactto Desktop: 20 minutes",
    "Manage and use your reference video library on the Web and Desktop",
    "Review videos uploaded by you, using the browser",
    "Add your own logo to create branded reviews",
    "If you sell reviews, the Pactto take rate for paid reviews is 3%, instead of 12% for free users",
    "Integrate Pactto to your website so anyone can send, and pay, for your video feedback",
    "Share your videos with others (no more sending video files around)",
  ];

  return (
    <Box m="20px">
      <Typography variant="h6" gutterBottom>
        <span style={{ color: "#6e6e6e" }}>You have access to</span>{" "}
        <span style={{ color: "#fff" }}>PACTTO PRO</span>{" "}
        <span style={{ color: "#6e6e6e" }}>as a trial.</span>{" "}
        <span style={{ color: "#fff" }}>0 days left</span>
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#B8B8B8",
          color: "#181818",
          marginY: "20px",
          fontWeight: 'bold',
          borderRadius: '30px',
          padding: "15px 70px",
          textTransform: "uppercase",
          "&:hover": {
            backgroundColor: "#1bb289",
          },
        }}
      >
        SUBSCRIBE TO PACTTO PRO
      </Button>

      <Typography variant="h6" mb="15px">
        The PACTTO PRO subscription allows you to:
      </Typography>

      <List>
        {features.map((feature, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <DoneIcon sx={{ color: "#1DE9B6" }} />
            </ListItemIcon>
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Subscription;
