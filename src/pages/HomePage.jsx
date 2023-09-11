import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
 
const HomePage = () => {
  const { user, authToken,logoutUser} = useContext(AuthContext);
  const [details, setDetails] = useState();

    const homePageDetails = async (e) => {

        const response = await axios(`${import.meta.env.VITE_SERVER_URL}profile/`, {
          method: e?'DELETE':'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken.access}`
          }
        });
        const data = await response.data;
        console.log(response.status);
        if (response.status === 200) {

          if (e){
            alert(data.msg)
            logoutUser()
          }
          setDetails(data)
            localStorage.setItem('data',JSON.stringify(data))

        } else {
          data.email?alert(data.email):data.msg.username?alert(data.msg.username):alert('invalid data')
        }      
    }
useEffect(() => {
    homePageDetails()
}, [])

  return (
    <>
      {user && user.is_doctor  ? (
        <>
          Welcome Doctor {user.username}.{details && user.is_doctor && !details.doctor.hospital | !details.doctor.department ? <p>Please update your profile to verify.</p>:null}
        </>
      ) : user.is_admin?null:(
        <>
          Welcome {user.username}.
        </>
      )}

      {!details  ? <p>Loading...</p> :(
        <div>
          <h1>{details.id}</h1>
          <h1>{details.username}</h1>
          <h1>{details.first_name}</h1>
          <h1>{details.last_name}</h1>
          <h1>{details.email}</h1>
          <h1>{details.password}</h1>

          { user&& user.is_doctor ? (
            <>
              <h1>{details.doctor.hospital}</h1>
              <h1>{details.doctor.department}</h1>
            </>
          ) : null}
          <Link to='/editprofile'> Edit Profile </Link>
          <button onClick={e=>homePageDetails(e)}> Delete</button>
        </div>
      )}
    </>
  );
}

export default HomePage;
