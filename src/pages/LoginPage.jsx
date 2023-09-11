import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"


const LoginPage = () => {

const {UserLogin} = useContext(AuthContext)
  return (
    <div>
    <form onSubmit={UserLogin}>
    <input type="email" required name="email" placeholder="Enter Your Email"/>
    <input type="password" required name="password" placeholder="Enter Your Email"/>
    <input type="submit" />
    </form>
    <Link to='/register' >Register</Link>

    </div>
  )
}

export default LoginPage