import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { Button,Typography,Grid,Container,CssBaseline } from '@material-ui/core';
import useStyles from './styles';

const AdminBlock = () => {
  const classes = useStyles()
  const [block, setBlock] = useState([]);
  const {authToken,user} = useContext(AuthContext)
  const {id} = useParams()


  const BlockuserHandler = async (action) => {
    console.warn(action,'action');
   

      
     
    const response = await axios(`${import.meta.env.VITE_SERVER_URL}userprofile/${id}/`, {
       
        method:action == undefined?'GET':'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken.access}`
    },
   data:action != undefined ?{ is_active: action }:undefined
 
    }); 
    let data = await response.data
    if (response.status==200) {
        action == undefined ? setBlock(data):setBlock(prevBlock => ({...prevBlock,is_active: action }));
    }else{
        action != undefined ? alert(data.msg) : null;
    }

  }

  const blockHandler=(e)=>{
    const confirm = window.confirm('Are You Sure?')
    if (confirm){
      BlockuserHandler(e)
    }else{
      null;
    }
  }


useEffect(() => {
    BlockuserHandler()  

}, [])


  return (
    <>
    <Container maxWidth="sm" className={classes.BlockContainer} >
    <CssBaseline />
      <Grid Container style={{margin:"50px",padding:"90px"}}   >
        <Grid item style={{marginBottom:"20px"}}   >
          <Typography variant="h4" color="primary"   >{user && user.is_doctor  ? (
            <>
            Dr. {user.username.toUpperCase()}
            </>
            ) 
            :(
              <>
               {user.username.toUpperCase()}
              </>
              )}</Typography>
        
        </Grid>
        <Grid item style={{marginBottom:"20px"}}>
        {!block  ? <p>Loading...</p> :(
          <>
              <Typography  style={{marginBottom:"10px"}} variant="subtitle2">First name : {block.first_name}</Typography> 
              <Typography style={{marginBottom:"10px"}}  variant="subtitle2"> Last name : {block.last_name}</Typography> 
              <Typography  style={{marginBottom:"10px"}} variant="subtitle2"> Email : {block.email}</Typography> 
             {user && user.is_doctor?(<> <Typography style={{marginBottom:"10px"}}  variant="subtitle2">first name : {block.username}</Typography> 
              <Typography style={{marginBottom:"10px"}}  variant="subtitle2">Hospital : {block.doctor.hospital}</Typography> 
              <Typography style={{marginBottom:"10px"}}  variant="subtitle2">Department : {block.doctor.department}</Typography> </>):null}
              
                               
              </>
              )}
              </Grid>
              <Grid item >
              
              </Grid>

              { !block.is_active ? <Button onClick={(e)=>BlockuserHandler(true)} variant="outlined" style={{color:"Highlight"}} >Unblock User</Button>:
              <Button onClick={(e)=>blockHandler(false)}  style={{color:"firebrick"}}  variant="outlined" >Block User</Button>}
              </Grid>
      
      </Container>
    </>
    );
  };
  
  export default AdminBlock;
  