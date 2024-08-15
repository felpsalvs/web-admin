import { useState } from "react";
import {
  Typography,
  Button,
  Slider,
  Box,
  FormControlLabel,
  Select,
  MenuItem,
  Checkbox,
  IconButton,
  FormControl
} from "@mui/material";
import { Circle as CircleIcon } from "@mui/icons-material";

function Settings() {
  const [settings, setSettings] = useState({
    showLogo: true,
    startWithMicrophoneEnabled: true,
    startWithCameraEnabled: true,
    videosLoadedStartMuted: false,
    notesDisappearAfter1Second: true,
    trackpadPinchToZoom: false,
    trackpadRepositionWith2FingerSwipe: false,
  });

  const [brushSize, setBrushSize] = useState(30);

  const handleSettingChange = (setting) => (event) => {
    setSettings({ ...settings, [setting]: event.target.checked });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Review Settings
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", mb: 2, gap: 1 }}
        >
          <Button color="primary" variant="contained" sx={{fontWeight: 'bold', color: '#000'}}>
            RESET CHANGES
          </Button>
          <Button color="secondary" variant="contained" disabled>
            SAVE CHANGES
          </Button>
        </Box>

        {[
          { label: "Show logo", setting: "showLogo" },
          {
            label: "Start with microphone enabled",
            setting: "startWithMicrophoneEnabled",
          },
          {
            label: "Start with camera enabled",
            setting: "startWithCameraEnabled",
          },
          {
            label: "Videos loaded start muted",
            setting: "videosLoadedStartMuted",
          },
          {
            label: "Notes disappear after 1 second",
            setting: "notesDisappearAfter1Second",
          },
          { label: "Trackpad: pinch to zoom", setting: "trackpadPinchToZoom" },
          {
            label: "Trackpad: reposition with 2-finger swipe",
            setting: "trackpadRepositionWith2FingerSwipe",
          },
        ].map(({ label, setting }) => (
          <FormControlLabel
            key={setting}
            control={
              <Checkbox
                checked={settings[setting]}
                onChange={handleSettingChange(setting)}
                color="secondary"
              />
            }
            label={label}
            sx={{ display: "block", mb: 1 }}
          />
        ))}

        <Box sx={{display: 'flex', alignItems: 'center', gap: '20px'}}>
        <Typography gutterBottom>Brush size for tools</Typography>
        <Slider
          value={brushSize}
          onChange={(event, newValue) => setBrushSize(newValue)}
          aria-label="Default" valueLabelDisplay="auto"
          color="secondary"
          sx={{ width: '160px' }}
          />
          </Box>

        <Typography gutterBottom sx={{ mt: 3 }}>
          Note color options
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {["#008000", "#FF0000", "#FFFFFF", "#000000"].map((color) => (
            <IconButton key={color} sx={{ color }}>
              <CircleIcon />
            </IconButton>
          ))}
        </Box>

        {[
          { label: "Camera", setting: "camera" },
          { label: "Microphone", setting: "microphone" },
          { label: "Speakers", setting: "speakers" },
        ].map(({ label, setting }) => (
          <FormControl sx={{ m: 1 }} key={setting}>
            <Typography gutterBottom>{label}</Typography>
            <Select sx={{width: '212px'}} defaultValue="">
              <MenuItem value="">Select {label.toLowerCase()}</MenuItem>
            </Select>
          </FormControl>
        ))}
      </Box>
    </Box>
  );
}

export default Settings;
