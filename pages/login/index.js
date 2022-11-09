import { Box, Card, Divider, FormControl, FormGroup, InputLabel, OutlinedInput, Typography, Button, CircularProgress, FormControlLabel, Checkbox } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { isObjEmpty } from "../../utils/objectUtil";
import { LOGIN_MUTATION, REGISTER_MUTATION } from "../../graphQL/Mutations";
import { useMutation } from "@apollo/client";
import alertMessage from "../../utils/alertMessage";
import { getStorage, removeStorage, setStorage } from "../../utils/storage";
import { useStoreActions } from "easy-peasy";
import { useRouter } from "next/router";




const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
});



const LoginPage = () => {
  const [registration, { data, loading }] = useMutation(LOGIN_MUTATION);


  const authAction = useStoreActions(actions => actions.auth)
  const router = useRouter();

  const [remember, setRemember] = useState(true)
  

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });


  const onSubmit = async (formData) => {
    if (!isObjEmpty(errors)) return null;

    const { email, password } = formData;

    try {
      await registration({
        variables: {
          email,
          password
        }
      })

      if (remember) {
        setStorage('loginInfo', { email, password })
      }else{
        removeStorage("loginInfo")
      }
    } catch (error) {
      console.log('error', error);
      alertMessage('Invalid Credentials!', 'error');
    }
  };


  useEffect(() => {
    if (data) {
      const authInfo = {
        user: data.login.user,
        token: data.login.jwt
      }
      setStorage('authInfo', authInfo);
      authAction.setLogin(authInfo)
      alertMessage('Login Successful!', 'success');
      router.push('/')
    }
  }, [data])

  useEffect(() => {
    const rememberUser = getStorage('loginInfo')
    if (rememberUser) {
      setValue("email", rememberUser.email)
      setValue("password", rememberUser.password)
    }
  }, [])




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
          <Typography>Sign In</Typography>
        </Box>
        <Divider sx={{ mb: 4 }} />
        <Box sx={{ px: 5 }}>


          <FormGroup sx={{ my: 2 }}>
            <InputLabel>Enter Email</InputLabel>
            <FormControl sx={{ width: '100%' }}>
              <OutlinedInput
                type="email"
                name="email"
                required
                inputProps={{
                  autoComplete: "new-password",
                }}
                {...register('email')}
              />
            </FormControl>
            <Typography variant="inherit" color="red">
              {errors.email?.message}
            </Typography>
          </FormGroup>


          <FormGroup sx={{ my: 2 }}>
            <InputLabel>Enter Password</InputLabel>
            <FormControl sx={{ width: '100%' }}>
              <OutlinedInput
                type="password"
                name="password"
                inputProps={{
                  autoComplete: "new-password",
                }}
                required
                {...register('password')}
              />
            </FormControl>
            <Typography variant="inherit" color="red">
              {errors.password?.message}
            </Typography>
          </FormGroup>



          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              my: 2,
              alignItems: "center",
              color: "##000000AD"
            }}>
            <FormGroup>
              <FormGroup>
                <FormControlLabel control={<Checkbox checked={remember} onChange={e => setRemember(e.target.checked)} />} label="Remember Me" sx={{ color: "#000000AD" }} />
              </FormGroup>
            </FormGroup>

            <Link
              href="/forgot-password"
            >
              <a
                style={{
                  color: "#000",
                  textDecoration: "none",
                  color: "#000000AD",
                  fontFamily: 'Rubik',
                  fontStyle: "normal",
                }}
              >Forgotten Password?</a>
            </Link>
          </Box>

          <Button
            onClick={handleSubmit(onSubmit)}
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: "#3C1FF4",
              color: "#fff",
              py: 1.5
            }}>
            {loading ? <CircularProgress color="info" size={25} /> : 'Sign In'}
          </Button>


          <Button
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: "#c64030",
              color: "#fff",
              py: 1.5,
              mt: 3
            }}>Login with Google</Button>

          <Button
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: "#4267B2",
              color: "#fff",
              py: 1.5,
              mt: 3
            }}>Login with Facebook</Button>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pb: 2,
              mt: 3
            }}>
            <Typography>Don't have an account?</Typography>
          </Box>
          <Box>
            <Link
              href="/register"
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
              >Sign up</a>
            </Link>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default LoginPage;