import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const RegistrationPage = () => {
   
    const navigate = useNavigate()
    let UserRegister = async (e) => {
        e.preventDefault();
        
        const isDoctor = document.getElementById('is_doctor_checkbox').checked;
        try{
        let response = await axios(`${import.meta.env.VITE_SERVER_URL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            'username': e.target.username.value,
            'email': e.target.email.value,
            'password': e.target.password.value,
            'password2': e.target.password2.value,
            'is_doctor': isDoctor
          }
        });
        
        const data = await response.data
        console.log(data);
        console.log(response.status);
        if (response.status === 201) {
          navigate('/login');
          alert(data.msg);
        } else {
          data.msg.non_field_errors ? alert(data.msg.non_field_errors) :
            data.msg.email ? alert(data.msg.email) : alert('Something Went Wrong');
        }
      }catch(error){
console.log(error);
alert(error.response.data.msg.non_field_errors)
      }}
      
      return (
        <> 
          <form onSubmit={UserRegister}>
            <input type='text' name='username' placeholder='Enter Username' required />
            <input type='email' name='email' placeholder='Enter email' required />
            <input type='password' name='password' placeholder='Enter password' required />
            <input type='password' name='password2' placeholder='Confirm password' required />
            <label>doctor</label>
            <input type='checkbox' name='is_doctor' id='is_doctor_checkbox' />
            <input type='submit' />
          </form>
        </>
      );

      
}

export default RegistrationPage