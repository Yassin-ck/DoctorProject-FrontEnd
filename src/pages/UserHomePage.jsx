import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const UserHomePage = () => {
const {DoctorView,doctorview} = useContext(AuthContext)

useEffect(() => {
    DoctorView()
  
    }, [])
    

  return (
    <div>
    {doctorview.length===0?<p>No Doctor Availiable</p>:doctorview.map((item)=>
        
        <div key={item.id}>
        <h1>{item.id}</h1>
        <h1>{item.username}</h1>
        <h1>{item.first_name}</h1>
        <h1>{item.last_name}</h1>
        <h1>{item.email}</h1>
        <h1>{item.doctor.hospital}</h1>
        <h1>{item.doctor.department}</h1>
        <hr></hr>
        
        
        </div>
    )}
    </div>
  )
}

export default UserHomePage