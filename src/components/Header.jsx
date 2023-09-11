import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const Header = () => {
  const {user,logoutUser,DoctorView} = useContext(AuthContext)
  

  
  return (
   <>
   
   < >
   <Link to={!user? '/':user&&user.is_admin?'/adminhome':user&&user.is_doctor?'/home':'/userhome'} >Home</Link></>
   <span> | </span>
   
   {user?<button onClick={logoutUser}>Logout</button>: <Link to='/login' >Login</Link> }
   <span> | </span>
   {!user?null:user &&  user.is_doctor ?null:<Link to='/home'  >Profile</Link>}
   {user&&!user.is_doctor& !user.is_admin?<input type='text' onChange={(e)=>DoctorView(e)} placeholder='Search Doctor Here' />:null}
   
   </>
  )
}

export default Header