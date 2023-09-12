import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { AppBar,Toolbar,Typography} from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import useStyles from '../pages/styles'

const Header = () => {
  const {user,logoutUser,DoctorView} = useContext(AuthContext)
  const classes = useStyles()


  
  return (
    <>

    <AppBar position='relative'>
    <Toolbar className={classes.toolbar}>
      <AddCircle className={classes.icons} />
      <Typography variant='h6'>Doctor</Typography>
      <Typography variant='h6'>
        <Link to="/" style={{ color: "white", fontWeight: "bolder", fontSize: "17px", textDecoration: "none", paddingLeft: '15px' }}>Home</Link>
      </Typography>
      <div className={classes.searchInput}>
      {user&&!user.is_doctor& !user.is_admin? <input className={classes.searchInputBar} onChange={(e)=>DoctorView(e)} placeholder='Search' />:null}
      </div>
    </Toolbar>
  </AppBar>
    
    
  </>
  )
}

export default Header


