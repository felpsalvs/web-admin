import { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormControlLabel, Checkbox, MenuItem } from '@mui/material';

const Packages = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box p="20px">
      <Box display="flex" justifyContent="space-between" mb="20px">
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          + ADD PACKAGE
        </Button>
        <Button variant="contained" disabled>
          SAVE CHANGES
        </Button>
        <Button variant="contained" color="secondary">
          PAYMENT DETAILS
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>Describe your package</DialogTitle>
        <DialogContent>
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="20px">
            <Box>
              <TextField
                fullWidth
                label="Package name"
                variant="filled"
                defaultValue="Change the name of package"
              />
              <TextField
                fullWidth
                label="Package description"
                variant="filled"
                multiline
                rows={4}
                placeholder="Add description to this package"
                sx={{ mt: 2 }}
              />
              <TextField
                fullWidth
                label="Package details (user will view only)"
                variant="filled"
                multiline
                rows={4}
                placeholder="Add details"
                sx={{ mt: 2 }}
              />
              <TextField
                fullWidth
                label="Package instructions (customers will view too)"
                variant="filled"
                multiline
                rows={4}
                placeholder="Add instructions"
                sx={{ mt: 2 }}
              />
            </Box>

            <Box>
              <Box mb={2}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Single file review (e.g. video, image, or PDF)"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Single link review (e.g. LinkedIn URL, portfolio)"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Single review of multiple files (e.g. 2 videos and 1 image, reviewed together)"
                />
              </Box>
              <Box mb={2}>
                <Box mb={1}>Review file type</Box>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Video"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Image"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="File (PDF, txt, etc)"
                />
              </Box>
            </Box>

            <Box>
              <TextField
                fullWidth
                label="Currency"
                variant="filled"
                              defaultValue="USD"
                sx={{ mb: 2 }}
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="BRL">BRL</MenuItem>
              </TextField>
              <TextField
                fullWidth
                label="Package cost"
                variant="filled"
                type="number"
                defaultValue="25"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Number of reviews (credits) in this package"
                variant="filled"
                type="number"
                defaultValue="1"
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Publish Package
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Packages;
