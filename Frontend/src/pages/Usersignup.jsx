import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Usersignup = () => {
  const [firstName, setFirst]=useState('');
  const [lastName,setLast]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPass]=useState('');
  const [confPassword, setConfPass]=useState('');

  const submitHandler=(e)=>{
    e.preventDefault();

    setEmail('');
    setFirst('');
    setLast('');
    setPass('');
    setConfPass('');
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
        <div>
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>

        <h3 className="text-ml mb-2">Enter full Name</h3>

        <div className="flex justify-content">
          <input
        required
        className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        type="text" 
        placeholder="First-Name"
        value={firstName}
        onChange={(e)=>{
          setFirst(e.value.target);
        }}
        />

        <input
        required
        className="bg-[#eeeeee] ml-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        type="text" 
        placeholder="Second-Name"
        value={lastName}
        onChange={(e)=>{
          setLast(e.value.target);
        }}
        />
        </div>
        
        
        <h3 className="text-ml mb-2">Enter your email</h3>
        
        <input
        required
        className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        type="email" 
        placeholder="Email"
        value={email}
        onChange={(e)=>{
          setEmail(e.value.target);
        }}
        />

        <h3 className="mb-2 mt-2">Password</h3>
        
        <input 
        required
        className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        type="password" 
        placeholder="Password"
        value={password}
        onChange={(e)=>{
          setPass(e.value.target);
        }}
        />

        <h3 className="mb-2 mt-2">Confirm Password</h3>
        
        <input 
        required
        className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        type="password" 
        placeholder="Confirm Password"
        value={confPassword}
        onChange={(e)=>{
          setConfPass(e.value.target);
        }}
        />

        <button className="w-full bg-black text-white py-3 rounded mt-5"> Create </button>
            </form>
      <Link to='/login' className="text-blue-600 text-center">login using email</Link>
        </div>
    </div>
  );
};

export default Usersignup;