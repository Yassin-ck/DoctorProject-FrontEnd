import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const AdminBlock = () => {
  const [block, setBlock] = useState([]);
  const {authToken} = useContext(AuthContext)
  const {id} = useParams()




  const BlockuserHandler = async (action) => {
    console.warn(action,'action');

    const response = await axios(`${import.meta.env.VITE_SERVER_URL}userprofile/${id}/`, {
       
        method:action == undefined?'GET':'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken.access}`
    },
   data:action != undefined ?{ is_active: action }:undefined
 
    }); 
    let data = await response.data
    if (response.status==200) {
        action != undefined ? alert(data.msg) : null;
        action == undefined ? setBlock(data):setBlock(prevBlock => ({...prevBlock,is_active: action }));
    }else{
        action != undefined ? alert(data.msg) : null;
    }
  };
useEffect(() => {
    BlockuserHandler()  

}, [])


  return (
    <>
        <h1>{block.username}</h1>
        <h1>{block.email}</h1>
        <h1>{block.first_name}</h1>
        <h1>{block.last_name}</h1>
        {block.doctor?<>
            
            <h1>{block.doctor.hospital} </h1>
        
        <h1>{block.doctor.department}</h1>
       
        </>:null}
    { !block.is_active ? <button onClick={(e)=>BlockuserHandler(true)} >Unblock User</button>:
    <button onClick={(e)=>BlockuserHandler(false)} >Block User</button>}
    </>
  );
};

export default AdminBlock;
