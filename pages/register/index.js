import { Box, Card, Divider, FormControl, FormGroup, InputLabel, OutlinedInput, Typography, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { isObjEmpty } from "../../utils/objectUtil";




const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters')
    .max(20, 'Username must not exceed 20 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
});



const Register = () => {

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });


  const onSubmit = (data) => {
    if (!isObjEmpty(errors)) return null;

    console.log('data', data);
  };


  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center"
    }}>
      <Card
        variant="outlined"
        sx={{
          width: 500,
          boxShadow: "1px 3px 14px 1px rgba(0, 0, 0, 0.2)",
          borderRadius: "3px",
          py: 5,
          justifySelf: "center",
          my: 10
        }}>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          mb: 2
        }}>
          <Typography>Sign Up</Typography>
        </Box>
        <Divider sx={{ mb: 4 }} />
        <Box sx={{
          px: 5,
        }}>
          <FormGroup sx={{ my: 2 }}>
            <InputLabel>Username</InputLabel>
            <FormControl sx={{ width: '100%' }}>
              <OutlinedInput
                type="text"
                name="username"
                required
                {...register('username')}
              />
            </FormControl>
            <Typography variant="inherit" color="red">
              {errors.username?.message}
            </Typography>
          </FormGroup>

          <FormGroup sx={{ my: 2 }}>
            <InputLabel>Enter Email</InputLabel>
            <FormControl sx={{ width: '100%' }}>
              <OutlinedInput
                type="email"
                name="email"
                required
                {...register('email')}
              />
            </FormControl>
            <Typography variant="inherit" color="red">
              {errors.email?.message}
            </Typography>
          </FormGroup>

          {/* <FormGroup sx={{ my: 2 }}>
            <InputLabel>Enter Password</InputLabel>
            <FormControl sx={{ width: '100%' }}>
              <OutlinedInput
                type="password"
              />
            </FormControl>
          </FormGroup> */}


          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: "#3C1FF4",
              color: "#fff",
              py: 1.5
            }}>Sign Up</Button>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 2
            }}>
            <Typography>You have an already account?</Typography>
          </Box>
          <Box>
            <Link
              href="/login"
            >
              <a
                style={{
                  color: "#000",
                  textDecoration: "none",
                  color: "#000000AD",
                  fontFamily: 'Rubik',
                  fontStyle: "normal",
                  border: "1px solid #000",
                  padding: "10px 0",
                  textAlign: "center",
                  width: "100%",
                  display: "block"
                }}
              >Sign In</a>
            </Link>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Register;