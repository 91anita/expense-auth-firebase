import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "./login.css"
import { auth } from '../../firebase'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate =useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {navigate('/home')})
      .catch((error) => console.error(error));
  };
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {navigate('/home')})
      .catch((error) => console.error(error));
  };

  return (
    <div className="sign-up-form">
      <h1 className="h1">SignUp</h1>
    
      <input
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        className="input-box" 
        placeholder="Your Email"
        name="email"
      /><br/>
      
      <input
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        className="input-box"
        placeholder="Your Password"
        name="password"
      /><br/>
      <button onClick={register} className="signup-btn">
        Sign up
      </button>
      <hr/>
      <p className="or">OR
        </p>
      <button onClick={signIn} className="signup-btn">
        Have an Account? Login
      </button>
     
    </div>
  );
}
export default Login;
