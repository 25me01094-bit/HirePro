
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();
    const formRef = useRef(null);

    const [status, setStatus] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [isEmailVerified, setIsEmailVerified] = useState(false);

    const [generatedOTP, setGeneratedOTP] = useState("");
    const [enteredOTP, setEnteredOTP] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const [data, setData] = useState({
        name: "",
        dob: "",
        qualification: "",
        college: "",
        experience: "",
        address: "",
        mobileNumber: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        securityQuestion: "",
        answer: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

        if (name === "password") {
            const strongRegex =
                /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{9,}$/;

            const mediumRegex =
                /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*]{8,}$/;

            if (strongRegex.test(value)) {
                setPasswordStrength("Strong");
            } else if (mediumRegex.test(value)) {
                setPasswordStrength("Medium");
            } else {
                setPasswordStrength("Weak");
            }
        }

        if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in)$/;
            setEmailValid(emailRegex.test(value));
        }
    };

    const generateOTP = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    const handleOTP = (e) => {
        e.preventDefault();

        if (!emailValid) {
            alert("Enter valid email (.com or .in)");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some(
            (user) => user.email === data.email
        );

        if (userExists) {
            alert("Email already exists");
            return;
        }

        const otp = generateOTP();
        setGeneratedOTP(otp);

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FIRST,
            {
                email: data.email,
                otp: otp,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                alert("OTP sent to your email");
                setOtpSent(true);
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to send OTP");
            });
    };

    const verifyOTP = () => {
        if (enteredOTP === generatedOTP) {
            setIsEmailVerified(true);
            alert("Email Verified Successfully ");
        } else {
            alert("Invalid OTP ");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isEmailVerified) {
            alert("Verify Email First");
            return;
        }

        const strongPassword =
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{9,}$/;

        if (!strongPassword.test(data.password)) {
            alert("Password must contain uppercase, number & special character");
            return;
        }

        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        if (data.mobileNumber.length !== 10) {
            alert("Mobile number must be 10 digits");
            return;
        }

        const { confirmPassword, ...dataToStore } = data;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.some(
            (user) =>
                user.username === dataToStore.username ||
                user.email === dataToStore.email
        );

        if (userExists) {
            alert("Username or Email already exists");
            return;
        }
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID_SECOND,
            {
                userType: "Job Seeker",

                email: data.email,
                username: data.username,
                mobileNumber: data.mobileNumber,

                name: data.name,
                dob: data.dob,
                qualification: data.qualification,
                college: data.college,
                experience: data.experience,
                address: data.address,

                companyName: "",
                companyType: "",
                gstin: "",
                tan: "",
                website: "",
                hrName: "",
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )

            .then(
                () => setStatus("Confirmation email sent"),
                (error) => {
                    console.log(error);
                    setStatus("Failed to send email");
                }
            );


        users.push(dataToStore);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Sign Up Successful!!");
        navigate("/login");
    };
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <Navbar />

            <div className="min-h-screen py-10 bg-slate-100 flex flex-col items-center">
                <h1 className="text-3xl font-extrabold mb-6">
                    Create Your Account
                </h1>

                <form className="space-y-4 w-full max-w-lg px-6">

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={handleChange}
                        required
                        className="input-style"
                        disabled={isEmailVerified}
                    />

                    {data.email && (
                        <p className={`text-sm font-semibold ${emailValid ? "text-green-600" : "text-red-600"
                            }`}>
                            {emailValid
                                ? "Valid Email Format"
                                : "Email must contain @ and end with .com or .in"}
                        </p>
                    )}

                    {!isEmailVerified && (
                        <>
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                    className="mt-1 w-4 h-4"
                                />

                                <label htmlFor="terms" className="text-sm">
                                    I agree to the{" "}
                                    <span className="text-sky-600 font-semibold cursor-pointer hover:underline">
                                        Terms & Conditions
                                    </span>
                                </label>
                            </div>

                            <button
                                className="w-full py-2 bg-sky-400 rounded-xl font-bold"
                                onClick={handleOTP}
                            >
                                Send OTP
                            </button>

                            {otpSent && (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        value={enteredOTP}
                                        onChange={(e) => setEnteredOTP(e.target.value)}
                                        className="input-style"
                                    />

                                    <button
                                        type="button"
                                        onClick={verifyOTP}
                                        className="w-full py-2 bg-green-400 rounded-xl font-bold"
                                        disabled={isChecked ? false : true}
                                    >
                                        Verify OTP
                                    </button>
                                </>
                            )}
                        </>
                    )}
                    {isEmailVerified && (
                        <>
                            <input type="text" name="name" placeholder="Name"
                                value={data.name} onChange={handleChange}
                                required className="input-style" />
                            <input type="date" name="dob"
                                value={data.dob} onChange={handleChange}
                                required className="input-style" />

                            <input type="text" name="qualification"
                                placeholder="Qualification"
                                value={data.qualification}
                                onChange={handleChange}
                                required className="input-style" />

                            <input type="text" name="college"
                                placeholder="College Name"
                                value={data.college}
                                onChange={handleChange}
                                required className="input-style" />

                            <textarea name="experience"
                                placeholder="Experience Details"
                                rows="3"
                                value={data.experience}
                                onChange={handleChange}
                                required className="input-style" />

                            <input type="text" name="address"
                                placeholder="Address"
                                value={data.address}
                                onChange={handleChange}
                                required className="input-style" />

                            <input type="tel" name="mobileNumber"
                                placeholder="Mobile Number"
                                value={data.mobileNumber}
                                onChange={handleChange}
                                required className="input-style" />

                            <input type="text" name="username"
                                placeholder="Username"
                                value={data.username}
                                onChange={handleChange}
                                required className="input-style" />

                            <input type="password" name="password"
                                placeholder="Password"
                                value={data.password}
                                onChange={handleChange}
                                required
                                className="input-style" />

                            <input type="password" name="confirmPassword"
                                placeholder="Confirm Password"
                                value={data.confirmPassword}
                                onChange={handleChange}
                                required
                                className="input-style" />
                            {data.password && (
                                <div className="flex items-center gap-3">
                                    <div className={`h-2 w-24 rounded ${passwordStrength === "Strong"
                                        ? "bg-green-500"
                                        : passwordStrength === "Medium"
                                            ? "bg-yellow-500"
                                            : "bg-red-500"
                                        }`}></div>

                                    <p className={`font-semibold ${passwordStrength === "Strong"
                                        ? "text-green-600"
                                        : passwordStrength === "Medium"
                                            ? "text-yellow-600"
                                            : "text-red-600"
                                        }`}>
                                        {passwordStrength} Password
                                    </p>
                                </div>
                            )}
                            <input type="text" name="securityQuestion"
                                placeholder="Security Question"
                                value={data.securityQuestion}
                                onChange={handleChange}
                                required className="input-style" />

                            <input type="text" name="answer"
                                placeholder="Answer"
                                value={data.answer}
                                onChange={handleChange}
                                required className="input-style" />


                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="w-full py-3 rounded-2xl bg-sky-500 font-bold"
                            >
                                Sign Up
                            </button>
                        </>
                    )}
                </form>

                {status && (
                    <p className="text-green-600 mt-4">{status}</p>
                )}

                <div className="mt-6">
                    <Link to="/login" className="text-sky-600 font-bold">
                        Already have an account? Login
                    </Link>
                </div>
            </div >

            <Footer />
        </>
    );
};

export default Signup;


