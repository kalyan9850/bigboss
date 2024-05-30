import React from "react";
import img from '../src/images/aboutimg1.jpg'
export default function About(){

    return(
        <>
        <div className="main">
            <img src={img} alt="error" className=" w-[40px] " />
        </div>

        <div className="bg-yellow-300 text-white flex justify-center font-extrabold">

            hello from about 
        </div>
        </>
    )
}