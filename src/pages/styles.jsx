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
}
}))


export default useStyles