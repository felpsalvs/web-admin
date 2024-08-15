import { Box, Button, TextField, MenuItem, Select, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";


const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  country: yup.string().required("required"),
  activities: yup.array().min(1, "Select at least one activity"),
  otherActivity: yup.string(),
  password: yup.string().required("required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  activities: [],
  otherActivity: "",
  password: "",
  confirmPassword: "",
};

const countries = [
  "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", 
  "Brazil", "China", "India", "Japan", // ... Adicione outros países conforme necessário
];

const Info = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const handleReset = (resetForm) => {
    resetForm();
  };

  return (
    <Box m="20px">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <Box display="flex" justifyContent="space-between" mb="20px">
              <Button color="primary" variant="outlined" onClick={() => handleReset(resetForm)}>
                Reset Changes
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>

            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <Select
                fullWidth
                variant="filled"
                displayEmpty
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country}
                name="country"
                error={!!touched.country && !!errors.country}
                sx={{ gridColumn: "span 4" }}
              >
                <MenuItem value="" disabled>
                  Country
                </MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </Select>

              {/* New Section: Main Activities */}
              <Box gridColumn="span 4">
                <Typography variant="h6">What is your main activity? Or activities</Typography>
                {["Video", "Design", "Development", "Sports", "Medical", "Inspections"].map((activity) => (
                  <FormControlLabel
                    key={activity}
                    control={
                      <Checkbox
                        name="activities"
                        value={activity}
                        checked={values.activities.includes(activity)}
                        onChange={handleChange}
                      />
                    }
                    label={activity}
                    sx={{ display: "block" }}
                  />
                ))}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Other"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.otherActivity}
                  name="otherActivity"
                  sx={{ mt: 2 }}
                />
              </Box>

              {/* New Section: User handle and password */}
              <Box gridColumn="span 4" mt={4}>
                <Typography variant="h6">User handle and password</Typography>
                <TextField
                  fullWidth
                  variant="filled"
                  type="email"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ mt: 2 }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="password"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  sx={{ mt: 2 }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="password"
                  label="Confirm Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  error={!!touched.confirmPassword && !!errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  sx={{ mt: 2 }}
                />
              </Box>

              {/* New Section: Deletion Notice */}
              <Box gridColumn="span 4" mt={2}>
                <Typography variant="caption">
                  To delete your Pactto account and remove your data permanently from all Pactto apps and services, please click here.
                </Typography>
              </Box>

            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Info;
