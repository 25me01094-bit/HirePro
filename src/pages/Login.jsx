import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
    })

    const navigate = useNavigate();

    const passchange = () => {
        navigate("/forgetpassword");
        return;
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const storedData = JSON.parse(localStorage.getItem("users")) || [];
        if (storedData.length === 0) {
            alert("No users found ; First Signup")
            return;
        }
        const isAvailable = storedData.find((user) => user.username === data.username)

        if (!isAvailable) {
            alert("Not registered yet");
            navigate("/signup")
            return;
        }
        else {

            if (isAvailable.password !== data.password) {
                alert("Wrong password");
                return;
            }
            else {
                localStorage.setItem("currentUser", JSON.stringify(isAvailable));
                alert("Login successfull!!")
                navigate("/");
                return;
            }
        }
    }
    return (<>
        <Navbar />
        <div className="min-h-screen py-5 bg-slate-100 place-items-center ">
            <h1 className="text-3xl md:text-4xl text-sky-950 font-extrabold underline">Login To Your Account</h1><br />
            <p className="px-4"><label htmlFor="username" className="text-lg md:text-xl  font-bold ">
                Username :
            </label>{" "}
                <input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    required
                    className="border border-slate-900   px-4 py-2 rounded-md w-full max-w-md focus:outline-none focus:ring-1 focus:ring-slate-900" /><br /><br /><br /></p>
            <p className="px-4"><label htmlFor="password" className="text-lg md:text-xl font-bold ">
                Password :
            </label>{" "}
                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    data-emailjs-ignore="true"
                    value={data.password}
                    onChange={handleChange}
                    required
                    className="border border-slate-900   px-4 py-2 rounded-md w-full max-w-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                /><br /><br /><br />
                <button onClick={handleSubmit}
                    type="submit"
                    className="w-full max-w-md  py-3 rounded-2xl bg-sky-400 text-slate-900 font-bold hover:bg-sky-300 transition-all" disabled={data.username  ?false:true}
                >
                    Login
                </button>
                <br /><br />
                <button onClick={passchange}
                    type="button"
                    className="w-full max-w-md  py-3 rounded-2xl bg-sky-400 text-slate-900 font-bold hover:bg-sky-300 transition-all"
                >
                    Forget Password
                </button></p>
                <br />
                <><p className="text-center mt-4">
                    <span className="text-slate-700">Don't have an account? </span>
                    <button
                        onClick={()=>{
                            navigate("/signup");
                            return;
                        }}
                        className="text-sky-600 font-bold hover:underline cursor-pointer"
                        type="button" 
                    >
                        Create your account
                    </button>
                </p></>

            
        </div>
        <Footer />
    </>
    )
}

export default Login