
import { Route,Routes } from 'react-router-dom'
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
import Header from './components/Header'

const App = () => {

return (
    <>   
    <AuthProvider> 
    <Header />
  
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
