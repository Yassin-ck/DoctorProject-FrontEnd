import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Typography,Container,Grid,CssBaseline,Box, TextField,Button} from '@material-ui/core'
import useStyles from './styles'


const ProfileEdit = () => {
  const classes = useStyles()
  const {authToken,user,setLoading} = useContext(AuthContext)
  const navigate = useNavigate()
  const [edit,setEdit]=useState(()=>localStorage.getItem('data')?JSON.parse(localStorage.getItem('data')):null)

  const EditProfile = async (e) =>{
    e.preventDefault()     
          const response = await axios(`${import.meta.env.VITE_SERVER_URL}profile/`,{
              method:'PATCH',
              headers:{
                  'Content-Type':'multipart/form-data',
                  'Authorization':`Bearer ${authToken.access}`
              },
              data: {
                  username: e.target.username.value,
                  email: e.target.email.value,          
                  ...(e.target.firstname.value && { first_name: e.target.firstname.value }),
                  ...(e.target.lastname.value && {last_name: e.target.lastname.value}),
                  doctor: user.is_doctor? {
                    ...(e.target.hospital.value && { hospital: e.target.hospital.value }),
                    ...(e.target.department.value && { department: e.target.department.value }),
                  }:undefined,
                }
          
      })
      
        let data = await response.data
        console.log(data);
        console.log(response.status);
        if (response.status==200){
            localStorage.setItem('data',data.Profile)
            let getUserdata= localStorage.getItem('data')
            setEdit(getUserdata)
            console.log(edit,'dt');
            navigate('/home')

        }
        }
       
        useEffect(() => {
          setLoading(true)

        }, [])
        
        
  return (
    <>
      <Container maxWidth="xs"className={classes.EditProfileContainer}>
      <CssBaseline />
      <Typography variant='h5' color="primary" align='center' gutterBottom style={{marginBottom:"40px"}} >Update Profile</Typography>
  
        <Box
        component="form"
        onSubmit={EditProfile}
        sx={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center", 
          
       
        }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
              name='firstname'
              required
              type='text'
              defaultValue={edit.first_name?edit.first_name:""}
              label="first name"
              fullWidth
              variant='standard'
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
              name='lastname'
              required
              type='text'
              defaultValue={edit.last_name?edit.last_name:""}
              label="last name"
              fullWidth
              variant='standard'
              />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                required
                name="username"
                defaultValue={edit.username}
                label="username"
                fullWidth
                variant='standard'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                required
                name="email"
                defaultValue={edit.email}
                label="Email Address"
                fullWidth
                variant='standard'
                />
              </Grid>
              {user && user.is_doctor?<>
                <Grid item xs={12} sm={6} >
                  <TextField
                  required
                  name="hospital"
                  defaultValue={edit.doctor.hospital?edit.doctor.hospital:''}
                  label="Hospital"
                  fullWidth
                  variant='standard'
                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField
                  required
                  name="department"
                  defaultValue={edit.doctor.department?edit.doctor.department:''}
                  label="Department"
                  fullWidth
                  variant='standard'
                  accept="image/*"
                  
                  />
                  </Grid>
          
                </>:null}
          
                <Grid item xs={12}>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                 style={{backgroundColor:""}}
                
              > Submit
                </Button>
                </Grid>
                  
          </Grid>
        </Box>
      </Container>
          
          </>
  )
}

export default ProfileEdit