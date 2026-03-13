import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Userlogin = () => {
    const [Email, setEmail]=useState('');
    const [password,setPass]=useState('');

    const [Data, setData]=useState();

    const submitHandler=(e)=>{
        e.preventDefault();

        setEmail('');
        setPass('');
    }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
        <div>
             <form onSubmit={(e)=>{
                submitHandler(e)
             }}>
        <h3 className="text-ml mb-2">Enter your email</h3>
        
        <input
        required
        value={Email}
        onChange={(e)=>{
            setEmail(e.target.value)
        }}
        className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        type="email" 
        placeholder="Email"
        />

        <h3 className="mb-2 mt-2">Password</h3>
        
        <input 
        required
         value={password}
        onChange={(e)=>{
            setPass(e.target.value)
        }} 
        className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        type="password" 
        placeholder="Password"
        />

        <button className="w-full bg-black text-white py-3 rounded mt-5"> Login </button>
            </form>
      <Link to='/signup' className="text-blue-600 text-center">Create Account</Link>
        </div>

        <div>
            <Link to='/captain-login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">Login as Captain</Link>
        </div>
    </div>
  );
};

export default Userlogin;