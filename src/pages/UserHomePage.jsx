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
    <Container  align='center'  className={classes.userHomeContainer}>
      <CssBaseline />
      <Grid container spacing={2} className={classes.rootGridUserHome}>
        {doctorview.length === 0 ? (
          <Typography variant='overline'>No Doctors Available !!!</Typography>
        ) : (
          doctorview.map((item) => (
            <Grid item key={item.id} >
              <Card className={classes.userHomecard}>
                <CardContent className={classes.userHomecardContent}>
                  <Typography gutterBottom align='left'  color='primary' variant='h4'>
                    Dr. {item.username.toUpperCase()}
                  </Typography>
                  <Typography align='left' variant='subtitle2'>
                    Name: {item.first_name}{item.last_name}
                    </Typography>
                    <Typography align='left' variant='subtitle2'>
                      email: {item.email}
                    </Typography>
                  <Typography align='left' variant='subtitle2'>
                    Hospital: {item.doctor.hospital}
                  </Typography>
                  <Typography align='left' variant='subtitle2'>
                    Department: {item.doctor.department}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  )
}

export default UserHomePage