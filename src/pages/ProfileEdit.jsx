import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProfileEdit = () => {
  const {authToken,user,setLoading} = useContext(AuthContext)
  const navigate = useNavigate()
  const [edit,setEdit]=useState(()=>localStorage.getItem('data')?JSON.parse(localStorage.getItem('data')):null)

      const EditProfile = async (e) =>{

          e.preventDefault()
          const response = await axios(`${import.meta.env.VITE_SERVER_URL}profile/`,{
              method:'PATCH',
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':`Bearer ${authToken.access}`
              },
              data: {
                  username: e.target.username.value,
                  email: e.target.email.value,          
                  ...(e.target.firstname.value && { first_name: e.target.firstname.value }),
                  ...(e.target.lastname.value && {last_name: e.target.lastname.value}),
                  doctor: user.is_doctor? {
                    ...(e.target.hospital.value && { hospital: e.target.hospital.value }),
                    ...(e.target.department.value && { department: e.target.department.value }),
                  }:undefined,
                }
          
      })
      
        let data = await response.data
        console.log(data);
        console.log(response.status);
        if (response.status==200){
            localStorage.setItem('data',data.Profile)
            let getUserdata= localStorage.getItem('data')
            setEdit(getUserdata)
            console.log(edit,'dt');
            navigate('/home')

        }
        }
       
        useEffect(() => {
          setLoading(true)

        }, [])
        
        
  return (
    <div>
   
    <form onSubmit={EditProfile}>
    <input type='text' defaultValue={edit.first_name?edit.first_name:''} required name='firstname' placeholder='first'/>
    <input type='text' defaultValue={edit.last_name?edit.last_name:''} required name='lastname' placeholder='last'/>
    <input type='email' defaultValue={ edit.email} name='email' required placeholder='email' />
    <input type='text' defaultValue={edit.username} name='username' required placeholder='user' />
    {user && user.is_doctor ? <> <input type='text' defaultValue={edit.doctor.hospital?edit.doctor.hospital:''} required name='hospital' placeholder='hospt' />
    <input type='text' defaultValue={ edit.doctor.department?edit.doctor.department:''} name='department' required placeholder='depa' /></>:null}
    <input type='submit' />
    </form>
    
    
    </div>
  )
}

export default ProfileEdit