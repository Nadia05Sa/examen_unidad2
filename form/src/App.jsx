import { useEffect, useState } from 'react'
import './App.css'
import Login from './componets/Login'

function App() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [authentication,setAuthentication] = useState(false);
  const correctPassword="12345678";
  const correctEmail="nadia@gmail.com";


  useEffect(()=>{
    if(authentication){
      <label>{user}</label>,
      <label>{email}</label>,
      <label>{password}</label>
    }
  },[authentication, email, password, user]);

  const handleLogin = () => {
    if(password===correctPassword && email===correctEmail){
      setUser(email);
      setAuthentication(true);
    }else{
      setUser(null);
      setAuthentication(false);
      alert("Usuario o contraseña incorrectos");
    }
  };
  return (
      <div>
        <div>
          <Login password={password} setPassword={setPassword} email={email} setEmail={setEmail} handleLogin={handleLogin}></Login>
          {authentication &&
          <div> 
            <label>{user}</label>,
            <label>{email}</label>,
            <label>{password}</label>
            </div>
            }
        </div>
      </div>
  )
}

export default App
