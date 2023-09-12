import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import './AdminPage.css'
import { CssBaseline } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'


const AdminHomePage = () => {
    const navigate = useNavigate()
    const [patience, setPatience] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const { authToken } = useContext(AuthContext);
    const AdminHome = async () => {
     
            const response = await axios(`${import.meta.env.VITE_SERVER_URL}userprofile/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken.access}`
                }
            });

            const data = await response.data;
            console.log(data);
            if (response.status===200){
                const usersData = data.filter((item) => item.is_doctor);
                console.log('user',usersData);
                const doctorsData = data.filter((item) => !item.is_doctor);
                setPatience(usersData);
                setDoctors(doctorsData);
              } else {
                console.error('Failed to fetch data');
              
            }
        
    }

    useEffect(() => {
        AdminHome();

    }, []);


    return (
        <>
        <CssBaseline />
        <div className="admin-panel">
        <div className="user-list">
          <h2>Doctors</h2>
          {patience.map((item) => (
            
            <div key={item.id} className="user-card">
              <h3>{item.username.toUpperCase()}</h3>
              <h4>{item.email}</h4>
              {/* Add other user details here */}
              <button onClick={()=>navigate(`/adminhome/${item.id}`)}>View</button>
            </div>
          ))}
        </div>
        <div className="doctor-list">
          <h2>Users</h2>
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <h3>{doctor.username}</h3>
              <h4>{doctor.email}</h4>
              {/* Add other doctor details here */}
              <button onClick={()=>navigate(`/adminhome/${doctor.id}`)}>View</button>
            </div>
          ))}
        </div>
      </div>
      </>

)
}

export default AdminHomePage
