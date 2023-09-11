import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Container,CssBaseline,Grid,Card,CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core'
import useStyles from './styles'

const UserHomePage = () => {
const {DoctorView,doctorview} = useContext(AuthContext)
const classes = useStyles()

useEffect(() => {
    DoctorView()
  
    }, [])
    

  return (
    <>
    <Container maxWidth="md" className={classes.userHomeContainer}>
      <CssBaseline />
      <Grid container className={classes.rootGridUserHome}>
        {doctorview.length === 0 ? <p>No Doctors Available</p> : doctorview.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card className={classes.userHomecard} style={{ margin: "10px" }}>
              <CardContent className={classes.userHomecardContent}>
                <Typography gutterBottom align='center' variant='h4'>
                  Dr. {item.username}
                </Typography>
                <CardMedia
                  image='https://source.unsplash.com/random'
                  title='Image Title'
                  className={classes.CardMediaImage}
                />
                <Typography variant='h6'>
                  Hospital: {item.doctor.hospital}
                </Typography>
                <Typography variant='h6'>
                  Department: {item.doctor.department}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  
    </>
  )
}

export default UserHomePage