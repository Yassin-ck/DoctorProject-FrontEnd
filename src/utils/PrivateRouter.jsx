
import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = ({children, ...rest }) => {
  const { user } = useContext(AuthContext);
  

  return (
    
    <>{user ? children:
      <Navigate to='/login'/>}
</>
  )
};

export default PrivateRouter;