import { Box, Card, FormControlLabel, Divider, FormControl, FormGroup, InputLabel, OutlinedInput, Typography, Checkbox, Button } from "@mui/material";
import Link from "next/link";
import React from "react";



const Login = () => {
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
          <FormGroup sx={{ my: 2 }}>
            <InputLabel>Enter Email</InputLabel>
            <FormControl sx={{ width: '100%' }}>
              <OutlinedInput
                type="text"
              />
            </FormControl>
          </FormGroup>

          <FormGroup sx={{ my: 2 }}>
            <InputLabel>Enter Password</InputLabel>
            <FormControl sx={{ width: '100%' }}>
              <OutlinedInput
                type="password"
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
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: "#3C1FF4",
              color: "#fff",
              py: 1.5
            }}>Sign In</Button>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 2
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

export default Login;
