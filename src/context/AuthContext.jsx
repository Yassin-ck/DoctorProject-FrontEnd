import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [doctorview,setDoctorview] = useState([])
  const [user, setUser] = useState(() =>
  localStorage.getItem("authtokens")
  ? jwt_decode(localStorage.getItem("authtokens"))
  : null
  );
  let [authToken, SetAuthToken] = useState(() =>
  localStorage.getItem("authtokens")
  ? JSON.parse(localStorage.getItem("authtokens"))
  : null
  );
  const navigate = useNavigate();
  const location = useLocation()



  let UserLogin = async (e) => {
    e.preventDefault();

    try{
      let response = await axios(`${import.meta.env.VITE_SERVER_URL}login/`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: e.target.email.value,
          password: e.target.password.value,
        },
      });

    let data = await response.data;
    if (response.status == 200) {
      const decodedToken = jwt_decode(data.access);
      setUser(decodedToken);
      SetAuthToken(data);
      localStorage.setItem("authtokens", JSON.stringify(data));
      decodedToken.is_admin
        ? navigate("/adminhome")
        : decodedToken.is_doctor
        ? navigate("/home")
        : navigate("/userhome");
    } else {
      alert("somwthing Went Wrong");
    }
  }catch(error){
    alert(error.response.data.detail)
  }}



  const DoctorView = async (e)=>{
      if(!location.pathname.includes('userhome')){
        navigate('/userhome')
      }
    const response = await axios (!e?`${import.meta.env.VITE_SERVER_URL}home/`:`${import.meta.env.VITE_SERVER_URL}home/?q=${e.target.value}`,{
        method:'GET',
        headers:{
            'Content-Type':'applicaton/json',
            'Authorization':`Bearer ${authToken.access}`
        }
    })
    let data = await response.data
    console.log(data);
        if (response.status == 200){
            setDoctorview(data)
            
        }
        
}







  const updateToken = async () => {
    try{
    const response = await axios(`${import.meta.env.VITE_SERVER_URL}refresh/`, {
    method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      data: { refresh: authToken?.refresh },
    });
    let data = await response.data;
    if (response.status == 200) {
      SetAuthToken(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authtokens", JSON.stringify(data));
    } else {
      logoutUser();
    }
    if (loading) {
      setLoading(false);
  }
  }catch{

  }}

  useEffect(() => {
    let fiftynineminute = 1000 * 60 * 59 ;
    if (loading) {
      updateToken();
    }
    let interval = setInterval(() => {
      if (authToken) {
        updateToken();
      }
    }, fiftynineminute);
    return () => clearInterval(interval);
  }, [authToken, loading]);

  const logoutUser = () => {
    setUser(null);
    SetAuthToken(null);
    localStorage.removeItem("authtokens");
    localStorage.removeItem("data");
    navigate('/')
  };

  const state = {
    user: user,
    authToken: authToken,
    UserLogin: UserLogin,
    logoutUser: logoutUser,
    setUser: setUser,
    setLoading:setLoading,
    DoctorView:DoctorView,
    doctorview:doctorview
  };

  return <AuthContext.Provider value={state}>
  
  {children}
  
  </AuthContext.Provider>;
};


