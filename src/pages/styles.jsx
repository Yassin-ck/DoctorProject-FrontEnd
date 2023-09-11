import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme)=>({
Container:{
    backgroundColor:theme.palette.background.paper,
    padding:theme.spacing(6,0,8)
},
icons:{
    marginRight:theme.spacing(1)
},
buttons:{
    marginTop:theme.spacing(3)
},
imagetexts:{
    margin:'50px'
},
Footer:{
    backgroundColor:theme.palette.background.paper,
    padding:"50px 0"
},
LoginContainer:{
    marginTop: "100px",
    border: '2px solid none',
    padding: '0px 0px  60px 0px',
    borderRadius: "5px",
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
    transition: 'box-shadow 0.3s ease', 
    "&:hover": {
        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
    },
},
RegistrationContainer:{
    marginTop: "60px",
    border:"2px solid none",
    padding:"30px 30px 60px 30px",
    borderRadius:"5px",
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition:'box-shadow .4s ease',
    "&:hover":{
        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)'
    }
    
},
EditProfileContainer:{
    marginTop:"50px",
    marginBottom:"50px",
    backgroundColor:theme.palette.background.paper,
    padding:"50px"
},
userHomeContainer: {
    marginTop: "50px",
    [theme.breakpoints.up('md')]: {
      marginLeft: '180px',
    },
  },
  userHomecard: {
    height: "100%",
    width: '300px',
  },
  CardMediaImage: {
    paddingTop: "56.25%",
  },
  userHomecardContent: {
    flexGrow: 1,
  },
  rootGridUserHome: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)", 
    gap: "20px",
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: "repeat(2, 1fr)", 
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: "repeat(3, 1fr)",
      maxWidth: "none", 
  }}
}));

export default useStyles