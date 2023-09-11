import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import {CssBaseline,Box,Container, Avatar, Typography,Grid, TextField, FormControlLabel, Button,Checkbox} from '@material-ui/core'
import {  LockOutlined } from '@material-ui/icons'
import useStyles from './styles'



const RegistrationPage = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    let UserRegister = async (e) => {
        e.preventDefault();
        console.log({'username': e.target.username.value,
        'email': e.target.email.value,
        'password': e.target.password.value,
        'password2': e.target.password2.value
 });
        const isDoctor = document.getElementById('is_doctor_checkbox').checked;
        console.log(isDoctor);
        try{
        let response = await axios(`${import.meta.env.VITE_SERVER_URL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            'username': e.target.username.value,
            'email': e.target.email.value,
            'password': e.target.password.value,
            'password2': e.target.password2.value,
            'is_doctor': isDoctor
          }
        });
        
        const data = await response.data
        console.log(data);
        console.log(response.status);
        if (response.status === 201) {
          navigate('/login');
          alert(data.msg);
        } else {
          data.msg.non_field_errors ? alert(data.msg.non_field_errors) :
            data.msg.email ? alert(data.msg.email) : alert('Something Went Wrong');
        }
      }catch(error){
console.log(error);
alert(error.response.data.msg.non_field_errors)
      }}
      
      return (
        <> 
        <Container maxWidth="xs" component="main"  className={classes.RegistrationContainer} >
        <CssBaseline/>
          <Box 
          sx={{
            marginTop:8,
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
          }}>
              <Avatar sx={{m:1,bgcolor:"secondary.main"}}>
                <LockOutlined />
              </Avatar>
                <Typography component="h1" variant='h5' style={{marginBottom:'20px'}} >SIgn Up</Typography>
                  <Box component="form" noValidate  onSubmit={UserRegister} >
                   <Grid container spacing={2}>
                    <Grid item xs={12} >
                      <TextField 
                      autoComplete='given-name'
                      name='username'
                      fullWidth
                      required
                      label="UserName"
                      autoFocus                      
                      />
                    </Grid>
                    <Grid item xs={12} >
                      <TextField 
                      autoComplete='email'
                      name='email'
                      fullWidth
                      required
                      label="Email Address"
                      type='email'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                      <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      autoComplete="new-password"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                      <TextField
                      required
                      fullWidth
                      name="password2"
                      label="Confirm Password"
                      type="password"
                      autoComplete="confirm-password"
                    />
                    </Grid>
                    <Grid item xs={12} >
                    <div style={{display:'flex'}}>
                    <FormControlLabel
                    control={<Checkbox id='is_doctor_checkbox' name='is_doctor' color="primary" />}
                    label="Doctor"
                  />
                    </div>
                    </Grid>
                      <Button
                      type='submit'
                      variant='contained'
                      fullWidth
                      color='primary'
                      sx={{ mt:3,mb:2 }}
                      >
                      Sign Up
                      </Button>
                <Grid item gutterBottom>
                  <Typography variant="overline" gutterBottom>
                    Already have an Account ? <Link to="/login"> SignIn</Link>
                  </Typography>
              </Grid>
                  </Grid>
                </Box>
            </Box>
          </Container>
        </>
      );

      
}

export default RegistrationPage
