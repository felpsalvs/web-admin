import { useState } from 'react';
import { Box, Button, TextField, Avatar, IconButton } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AddIcon from '@mui/icons-material/Add';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const ProfilePage = () => {
  const [avatar, setAvatar] = useState('/path-to-avatar.jpg');

  const validationSchema = Yup.object({
    headline: Yup.string().required('Headline is required'),
    aboutMe: Yup.string().required('About Me is required'),
    expertise: Yup.string().required('Expertise is required'),
    award: Yup.string().required('Award is required'),
    socialMedia: Yup.string().required('Social media channel is required'),
    youtube: Yup.string().url('Invalid URL').required('YouTube video URL is required'),
    quote: Yup.string().required('Quote is required'),
    quoteAuthor: Yup.string().required('Quote Author is required'),
  });

  const formik = useFormik({
    initialValues: {
      headline: '',
      aboutMe: '',
      expertise: '',
      award: '',
      socialMedia: '',
      youtube: '',
      quote: '',
      quoteAuthor: '',
    },
    validationSchema,
    onSubmit: (values) => {
      if (!avatar) {
        alert('Avatar is required');
      } else {
        console.log('Form data:', values);
      }
    },
  });

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file)); 
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box p="20px">
        <Box display="flex" justifyContent="space-between" mb="20px">
          <Button type="submit" variant="contained" color="profile">
            LAUNCH
          </Button>
          <Button variant="contained" disabled>
            SAVE
          </Button>
        </Box>

        <Box fontWeight="bold" mb="10px">Hero</Box>
        <TextField
          fullWidth
          variant="filled"
          placeholder="Public Name"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          variant="filled"
          placeholder="Headline"
          name="headline"
          value={formik.values.headline}
          onChange={formik.handleChange}
          error={formik.touched.headline && Boolean(formik.errors.headline)}
          helperText={formik.touched.headline && formik.errors.headline}
          sx={{ mb: 4 }}
        />

        <Box fontWeight="bold" mb="10px">About Me</Box>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="filled"
          placeholder="About Me"
          name="aboutMe"
          value={formik.values.aboutMe}
          onChange={formik.handleChange}
          error={formik.touched.aboutMe && Boolean(formik.errors.aboutMe)}
          helperText={formik.touched.aboutMe && formik.errors.aboutMe}
          sx={{ mb: 4 }}
        />

        <TextField
          fullWidth
          variant="filled"
          placeholder="Expertise Title"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          variant="filled"
          placeholder="Add expertise"
          name="expertise"
          value={formik.values.expertise}
          onChange={formik.handleChange}
          error={formik.touched.expertise && Boolean(formik.errors.expertise)}
          helperText={formik.touched.expertise && formik.errors.expertise}
          sx={{ mb: 4 }}
        />

        <TextField
          fullWidth
          variant="filled"
          placeholder="Awards Title"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          variant="filled"
          placeholder="Add award"
          name="award"
          value={formik.values.award}
          onChange={formik.handleChange}
          error={formik.touched.award && Boolean(formik.errors.award)}
          helperText={formik.touched.award && formik.errors.award}
          sx={{ mb: 4 }}
        />

        <Box fontWeight="bold" mb="10px">Give me a follow</Box>
        <TextField
          fullWidth
          variant="filled"
          placeholder="Add social media channel"
          name="socialMedia"
          value={formik.values.socialMedia}
          onChange={formik.handleChange}
          error={formik.touched.socialMedia && Boolean(formik.errors.socialMedia)}
          helperText={formik.touched.socialMedia && formik.errors.socialMedia}
          sx={{ mb: 4 }}
        />

        <Box fontWeight="bold" mb="10px">YouTube video</Box>
        <TextField
          fullWidth
          variant="filled"
          placeholder="YouTube video URL"
          name="youtube"
          value={formik.values.youtube}
          onChange={formik.handleChange}
          error={formik.touched.youtube && Boolean(formik.errors.youtube)}
          helperText={formik.touched.youtube && formik.errors.youtube}
          sx={{ mb: 4 }}
        />

        <Box display="flex" mb="20px">
          <Box flex="1">
            <Box fontWeight="bold" mb="10px">Footer</Box>
            <TextField
              fullWidth
          rows={4}
          multiline
              variant="filled"
              placeholder="Quote"
              name="quote"
              value={formik.values.quote}
              onChange={formik.handleChange}
              error={formik.touched.quote && Boolean(formik.errors.quote)}
              helperText={formik.touched.quote && formik.errors.quote}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              variant="filled"
              placeholder="Quote Author"
              name="quoteAuthor"
              value={formik.values.quoteAuthor}
              onChange={formik.handleChange}
              error={formik.touched.quoteAuthor && Boolean(formik.errors.quoteAuthor)}
              helperText={formik.touched.quoteAuthor && formik.errors.quoteAuthor}
            />
          </Box>

          <Box flex="1" ml="20px" textAlign="center">
            <Box fontWeight="bold" mb="10px">Avatar</Box>
            <Box position="relative" display="inline-block">
              <Avatar
                alt="User Avatar"
                src={avatar}
                sx={{ width: 100, height: 100 }}
              />
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="icon-button-file"
                type="file"
                onChange={handleAvatarChange}
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                  }}
                >
                  Change
                  <PhotoCamera />
                </IconButton>
              </label>
            </Box>
            <Box fontWeight="bold" mb="10px" mt="20px">Carousel</Box>
            <Button variant="contained" color="secondary" startIcon={<AddIcon />}>
              ADD IMAGE
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default ProfilePage;
