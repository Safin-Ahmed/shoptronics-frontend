import { Box, Card, FormControlLabel, Divider, FormControl, FormGroup, InputLabel, OutlinedInput, Typography, Checkbox, Button, CircularProgress, FormLabel } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../graphQL/Mutations";
import { useStoreActions } from "easy-peasy";







const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: ""
  })

  const setError = useStoreActions(actions => actions.error.setError);


  const [login, { data, loading, error, reset }] = useMutation(LOGIN_MUTATION);



  const handleChange = e => setValues({
    ...values,
    [e.target.name]: e.target.value
  })

  const loginHandler = (e) => {
    e.preventDefault();

    const { email, password } = values;
    console.log('values', values)


    if (!email || !password) {
      setValues({
        email,
        password,
        error: !email ? 'Email field is required!' : 'Password field is required'
      })
      return;
    }

    setValues({
      ...values,
      error: ""
    })

    login({
      variables: {
        email,
        password
      }
    });
  }


  console.log('loading', loading);
  console.log('data', data?.login?.jwt);


  useEffect(() => {
    if (error) {
      setError({ message: JSON.stringify(error), type: 'error' })
    }
  }, [error])



  const facebookLoginHandler = () => {
    // console.log('click to login')
  }



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
        <Box sx={{
          px: 5,
        }}>
          {values.error && <FormLabel sx={{ color: "red" }}>{values.error}</FormLabel>}
          {data?.login?.jwt && <FormLabel color="success">Login Successful</FormLabel>}
          <form onSubmit={loginHandler}>
            <FormGroup sx={{ my: 2 }}>
              <InputLabel>Enter Email</InputLabel>
              <FormControl sx={{ width: '100%' }}>
                <OutlinedInput
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </FormControl>
            </FormGroup>

            <FormGroup sx={{ my: 2 }}>
              <InputLabel>Enter Password</InputLabel>
              <FormControl sx={{ width: '100%' }}>
                <OutlinedInput
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </FormControl>
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
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" sx={{ color: "#000000AD" }} />
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
          </form>

          <Button
            // onClick={(e) => {
            //   e.preventDefault();
            //   signIn();
            // }}
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: "#c64030",
              color: "#fff",
              py: 1.5,
              mt: 3
            }}>Login with Google</Button>

          <Button
            onClick={facebookLoginHandler}
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
      </Card >
    </Box >
  );
};


// export const getServerSideProps = async ({ req }) => {
//   const session = await getSession({ req });
//   return {
//     props: {
//       session,
//     },
//   };
// };

export default Login;
