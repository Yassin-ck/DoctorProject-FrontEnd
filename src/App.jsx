
import { Link, Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'
import PrivateRouter from './utils/PrivateRouter'
import RegistrationPage from './pages/RegistrationPage'
import ProfileEdit from './pages/ProfileEdit'
import AdminHomePage from './pages/AdminHomePage'
import AdminBlock from './pages/AdminBlock'
import UserHomePage from './pages/UserHomePage'
import BasePage from './pages/basePage'
import { AppBar,Toolbar,Typography} from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import useStyles from './pages/styles'


const App = () => {
const classes = useStyles()

return (
    <>   
    <AuthProvider>
    <AppBar position='relative'>
    <Toolbar>
    <AddCircle className={classes.icons} />
    <Typography variant='h6'>Doctor</Typography>
    <Typography variant='h6'>
      <Link  to="/" style={{ color: "white" ,fontWeight:"bolder",fontSize:"17px" ,textDecoration:"none",paddingLeft:'15px' }}>Home</Link>
      </Typography>
      </Toolbar>
  </AppBar>
    <Routes>
    <Route path='/' element={ < BasePage />}/>
    <Route path='/home' element={<PrivateRouter><HomePage/></PrivateRouter> }/>
    <Route path='/login' element={<LoginPage/>  }/>
    <Route path='/register'  element={<RegistrationPage/>} />
    <Route path='/adminhome' element={<PrivateRouter> <AdminHomePage/> </PrivateRouter>} />
    <Route path='/editprofile' element={<PrivateRouter><ProfileEdit/> </PrivateRouter>  }/>
    <Route path='/adminhome' element={<PrivateRouter><AdminHomePage/> </PrivateRouter> }/>
    <Route path='/adminhome/:id' element={<PrivateRouter><AdminBlock/></PrivateRouter>  }/>
    <Route path='/userhome' element={<PrivateRouter><UserHomePage/> </PrivateRouter> }/>    
    </Routes>
    </AuthProvider>
    </>

  )
}

export default App
