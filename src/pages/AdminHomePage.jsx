import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AdminHomePage = () => {
    const [views, setView] = useState([]); // Provide an initial default value as an empty array
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
                setView(data);

            }
        
    }

    useEffect(() => {
        AdminHome();

    }, []);


    return (
        <>
            {!views ? ( 
                <p>Loading...</p>
            ) : (
                views.map((item) => (
                   <div style={{display:"flex",flexDirection:"row"}}> 
                    {!item.is_doctor?
                        
                        <div key={item.id}>
                        <Link style={{color:'black',textDecoration:'none'}} to={`/adminhome/${item.id}`}>
                            <h1>{item.id}</h1>
                            <h1>{item.username}</h1>
                            <h1>{item.first_name}</h1>
                            <h1>{item.last_name}</h1>
                            <h1>{item.email}</h1>
                          
                        </Link>
                        <hr/>
                        
                        </div>
                        :
                    <div key={item.id}>
                        <Link style={{color:'black',textDecoration:'none'}} to={`/adminhome/${item.id}`}>
                            <h1>{item.id}</h1>
                            <h1>{item.username}</h1>
                            <h1>{item.first_name}</h1>
                            <h1>{item.last_name}</h1>
                            <h1>{item.email}</h1>
                            <h1>{item.doctor.hospital}</h1>
                            <h1> {item.doctor.department}</h1>

                        </Link>
                        <hr/>
                    </div>
                
                }
                    </div>
                ))
            )}
        </>
    )
}

export default AdminHomePage
