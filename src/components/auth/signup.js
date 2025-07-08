import React,{useState} from 'react';
const Signup = () =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const handleSignup =(e) =>{
        e.preventDefault();
        console.log("Signup email:",email,"password:",password);
    };
    return (
        <div>
            <h2>signup page</h2>
            <form onSubmit={handleSignup}>
                <input 
                type='email'
                placeholder='enter your email'
                value={email}
                onChange = {
                    (e) => setEmail(e.target.value)
                }
                required
                />
                <input 
                type="password"
                placeholder='enter passowrd'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                />
                <input
                type='password'
                placeholder='confirm password'
                value={password}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                required
                />
            </form>
            
        </div>
    )
};
export default Signup;