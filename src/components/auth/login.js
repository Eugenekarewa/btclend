import React from "react"; 
import {useState,useEffect} from "react"
const Login = () =>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin = (e) =>{
        e.preventDefault();
        //authentication logic
    }
    return (
        <div>
            <h2>login page</h2>
            <form onSubmit={handleLogin}>
                <input
                type="email"
                placeholder="enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
                <input 
                type="password"
                placeholder="enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default Login;
