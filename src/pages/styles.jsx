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
      padding:"50px",
      "&:hover":{
        
        backgroundColor:'ivory',
        borderRadius:"5px",
        boxShadow:"20px 20px 20px rgba(0,0,0,.1)",
        transition:"box-shadow .5s ease",
        transition: 'transform 0.3s ease-in-out',
        transform: 'scale(1.02)',

      }
    },
  //   userHomeContainer: {
  //     marginTop: "50px",
  //     [theme.breakpoints.up('md')]: {
  //       marginLeft: '180px',
  //     },
  //   },
  //   userHomecard: {
  //     height: "100%",
  //     width: '300px',
  //   },
  // CardMediaImage: {
  //   paddingTop: "56.25%",
  // },
  // userHomecardContent: {
  //   flexGrow: 1,
  // },

  userHomeContainer: {
    marginTop: theme.spacing(2),
    marginLeft:"200px"
  },
  rootGridUserHome: {
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  userHomecard: {
    width: '500px', // Adjust the card width as needed
    margin: theme.spacing(1),
    boxShadow:"2px 2px 5px rgba(0,0,.1)",
    transition: 'transform 0.3s ease-in-out',
    position:"relative",
    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow:"4px 4px 5px rgba(0,0,.1)",
      transition: 'box-shadow 0.3s ease',
      

    },
  },
  
  // rootGridUserHome: {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(1, 1fr)", 
  //   gap: "20px",
  //   [theme.breakpoints.up('sm')]: {
  //     gridTemplateColumns: "repeat(2, 1fr)", 
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     gridTemplateColumns: "repeat(3, 1fr)",
  //     maxWidth: "none", 
  //   }},
    ProfileContainer:{
      marginTop:"30px",
      backgroundColor:"lightgrey",
      boxShadow: '2px 2px 5px rgba(0,  0, 0.2)',
      transition:'box-shadow .4s ease',
      "&:hover":{
          boxShadow: '2px 2px 0px rgba(0,  0, 0.2)',
          borderRadius:"5px"
        }
        
      },
      BlockContainer:{
      marginTop:"30px",
      backgroundColor:"lightgrey",
      boxShadow: '2px 2px 5px rgba(0,  0, 0.2)',
      

    },
    toolbar :{
      display: 'flex',
      justifyContent: "space-between",
    },
    
    searchInput: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      
    },
    searchInputBar:{
      width:"300px",
      padding:'13px',
      border:'1px solid blue',
      borderRadius:"4px 4px",
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition:'all 0.3s ease',
      backgroundColor:"ivory",
      "&:hover":{
        backgroundColor:"#f5f5f5",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        outline:'none',
        backgroundColor:"white",

      },
      "&:focus":{
        backgroundColor:"#fff",
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        outline:"none"

      }
    },
    
    
  }));
  
  export default useStyles