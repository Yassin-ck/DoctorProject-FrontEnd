import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { CssBaseline,Button,Typography,Box,Avatar,Container, TextField, FormControlLabel,Checkbox, Grid  } from '@material-ui/core'
import {  LockOutlined } from "@material-ui/icons"
import useStyles  from "./styles"
import { Link } from "react-router-dom"

const LoginPage = () => {
const classes = useStyles()
const {UserLogin} = useContext(AuthContext)
  return (
    <>
    <Container maxWidth="xs" className={classes.LoginContainer} >
      <CssBaseline />
        <Box 
        sx={{
          marginTop:8,
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          padding:'20px'
        }}
        >
          <Avatar sx={{m:1}} >
            <LockOutlined />
          </Avatar>
            <Typography variant="h5" component="h1">
            Sign In
            </Typography>
              <Box 
              noValidate
              component="form"
              onSubmit={UserLogin}
              
              >
              
                <TextField
                name='email'
                label="Email Address"
                type="email"
                fullWidth
                required
                autoComplete="email"
                autoFocus
                />
                <br/>
                <br/>
                <TextField
                name='password'
                label="Password"
                type="password"
                fullWidth
                required
                autoComplete="password"
                className={classes.Textfield}
                />
                
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary"  />}
                  label="Remember me"
                />
                <div style={{height:'25px'}}></div>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                
              >
                Sign In
              </Button>
              <Grid container style={{marginTop:"10px"}} >
                <Grid item>
                  <Typography variant="overline" gutterBottom>
                    Don't you have an Account ? <Link to="/register"> SignUp</Link>
                  </Typography>
                </Grid>
              </Grid>
                            
              </Box>
              </Box>
    </Container>
    </>
  )
}

export default LoginPage