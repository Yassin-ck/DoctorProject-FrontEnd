import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, ButtonGroup, Container, CssBaseline,Grid, Typography } from "@material-ui/core";
import { Edit,Delete } from "@material-ui/icons";
import useStyles from "./styles";
 
const HomePage = () => {
  const classes = useStyles()
  const { user, authToken,logoutUser} = useContext(AuthContext);
  const [details, setDetails] = useState();
  const navigate = useNavigate()



    const homePageDetails = async (e) => {    
        const response = await axios(`${import.meta.env.VITE_SERVER_URL}profile/`, {
          method: e?'DELETE':'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken.access}`
          }
        });
        const data = await response.data;
        console.log(response.status);
        if (response.status === 200) {

          if (e){
            alert(data.msg)
            logoutUser()
          }
          setDetails(data)
            localStorage.setItem('data',JSON.stringify(data))

        } else {
          data.email?alert(data.email):data.msg.username?alert(data.msg.username):alert('invalid data')
        }      
    }
  
const deleteHandler=(e)=>{
  const confirm = window.confirm('Are You Sure?')
  if (confirm){
    homePageDetails(e)
  }else{
    null;
  }
}


    
useEffect(() => {
    homePageDetails()
}, [])

  return (
    <>
      <Container maxWidth="sm" className={classes.ProfileContainer} >
        <CssBaseline />
          <Grid Container style={{margin:"50px",padding:"90px"}}   >
            <Grid item style={{marginBottom:"20px"}}   >
              <Typography variant="h4" color="primary"   >{user && user.is_doctor  ? (
                <>
                Dr. {details?details.username.toUpperCase():user.username.toUpperCase()}{details && user.is_doctor && !details.doctor.hospital | !details.doctor.department ?
                   <Typography color="error" variant="subtitle2"> Please update your profile to verify !!!</Typography>:null}
                </>
                ) : user.is_admin?
                <>
                Mr.{details?details.username.toUpperCase():user.username.toUpperCase()}<Typography style={{color:"green"}} variant="subtitle2"> You Are An Admin</Typography>
                </>
                :(
                  <>
                  Mr. {details?details.username.toUpperCase():user.username.toUpperCase()}
                  </>
                  )}</Typography>
            
            </Grid>
            <Grid item style={{marginBottom:"20px"}}>
            {!details  ? <p>Loading...</p> :(
              <>
                  <Typography  style={{marginBottom:"10px"}} variant="subtitle2">First name : {details.first_name}</Typography> 
                  <Typography style={{marginBottom:"10px"}}  variant="subtitle2"> Last name : {details.last_name}</Typography> 
                  <Typography  style={{marginBottom:"10px"}} variant="subtitle2"> Email : {details.email}</Typography> 
                 {user && user.is_doctor?(<> <Typography style={{marginBottom:"10px"}}  variant="subtitle2">first name : {details.username}</Typography> 
                  <Typography style={{marginBottom:"10px"}}  variant="subtitle2">Hospital : {details.doctor.hospital}</Typography> 
                  <Typography style={{marginBottom:"10px"}}  variant="subtitle2">Department : {details.doctor.department}</Typography> </>):null}
                  
                                   
                  </>
                  )}
                  </Grid>
                  <Grid item >
                  <ButtonGroup variant="contained"  aria-label="outlined button group">
  <Button onClick={()=>navigate('/editprofile')} style={{color:"Highlight"}}  ><Edit />Edit</Button>
  <Button onClick={e=>deleteHandler(e)}   style={{color:"firebrick"}}><Delete />Delete</Button>
</ButtonGroup>
                  </Grid>

                  </Grid>
          
          </Container>
          </>
          );
        }
        
        export default HomePage;
        