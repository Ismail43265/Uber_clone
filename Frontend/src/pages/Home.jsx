import React from "react";
import Uber from "../assets/Uber.png"
import traffic from "../assets/traffic.png"
import { Link } from "react-router-dom";

const Home=()=>{
    return(
    <div>
        <div style={{ backgroundImage: `url(${traffic})` }} className='bg-cover bg-center h-screen pt-8 w-full bg-red-400 flex justify-between flex-col'>
            <img className="w-15 ml-8" src={Uber} alt="Uber-logo" />
            <div className="bg-white py-4 px-4 ">
                <h2 className="text-3xl font-bold">Get started with Uber</h2>
                <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
            </div>
        </div>
    </div>
    )
}

export default Home;