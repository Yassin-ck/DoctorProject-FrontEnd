import React, { useContext } from 'react'
import { Button,Grid,Container,Typography, CssBaseline,ImageList,ImageListItem } from '@material-ui/core'
import useStyles from './styles'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const BasePage = () => {

const {user,logoutUser} = useContext(AuthContext)

  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <>
    <CssBaseline />
     
      <main>
        <div className={classes.Container}>
          <Container maxWidth="sm">
            <Typography variant='h3' align='center' color='textPrimary' gutterBottom>
              Doctor Site
            </Typography>
            <Typography variant='h6' align='center' color='textSecondary' paragraph>
              This is a Doctor site , where patience can book there slot as fast and with the demanding department and Hospital
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item >
                 {!user? <Button onClick={()=>navigate('/login')} variant='contained' color='primary'>SignIn</Button>:
                  <Button onClick={()=>logoutUser()} variant='contained' color='primary' >Logout</Button>}
                </Grid>
                <Grid item >
                  <Button onClick={()=>navigate('/register')} variant='outlined' color='primary'>SignUp</Button>
                </Grid>
              </Grid>
            </div>
          </Container>      
        </div>
        <div>
          <Container maxWidth="lg"  className={classes.imagetexts} >
          <ImageList  cols={2} rowHeight={400}>
         
            <ImageListItem  >
              <img
                src={`https://d1uhlocgth3qyq.cloudfront.net/provider-message___b9ca1.jpg?w=164&h=164&fit=crop&auto=format`}
                srcSet="https://d1uhlocgth3qyq.cloudfront.net/provider-message___b9ca1.jpg" sizes="(max-width:1023px) 616px, 1232px" srcset="https://d1uhlocgth3qyq.cloudfront.net/provider-message___b9ca1.jpg 616w, https://d1uhlocgth3qyq.cloudfront.net/provider-message-1232w___4b6fa.jpg 1232w?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
                alt="A provider booking an appointment"
                loading="lazy"
              />
            </ImageListItem>
            <div >
              <Typography  variant='h4' color='textPrimary' style={{margin:"50px 30px 30px 25px"}} >
                Are you a provider interested in reaching new patients?
              </Typography>
                <ul  style={{listStyle:'disc'}} >
                  <li style={{marginBottom:"10px"}}>Reach patients in your area looking for a new provider
                  </li>
                  <li style={{marginBottom:"10px"}}>Fill last-minute openings in your schedule
                  </li>
                  <li style={{marginBottom:"10px"}}>Strengthen your online reputation with verified reviews
                  </li>
                </ul>
                <Button size='large' variant='contained' style={{margin:'30px'}} color='primary' startIcon  >Availiable Now</Button>

            </div>
        
        </ImageList>
              
              
        </Container>
        </div>
        
        </main>
        <footer className={classes.Footer}>
          <Typography variant='h6' align='center' color='primary' gutterBottom> Footer</Typography>
          <Typography variant='subtitle1' align='center' color='textSecondary'>
          Send Us Your Feedbacks @doctorsAcademy
          </Typography>
        </footer>
        </>
  )
}

export default BasePage