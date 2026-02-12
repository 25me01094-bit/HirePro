

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";

const CompanySignup = () => {

    const navigate = useNavigate();
    const formRef = useRef(null);

    const [status, setStatus] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [isEmailVerified, setIsEmailVerified] = useState(false);

    const [generatedOTP, setGeneratedOTP] = useState("");
    const [enteredOTP, setEnteredOTP] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const [isChecked, setIsChecked] = useState(false);

    const [data, setData] = useState({
        companyName: "",
        companyType: "",
        gstin: "",
        tan: "",
        website: "",
        hrName: "",
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

        const companies = JSON.parse(localStorage.getItem("companies")) || [];
        const exists = companies.some(
            (company) => company.email === data.email
        );

        if (exists) {
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
            alert("Email Verified Successfully");
        } else {
            alert("Invalid OTP");
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

        const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{3}$/;
        if (!gstRegex.test(data.gstin)) {
            alert("Invalid GSTIN format");
            return;
        }

        const tanRegex = /^[A-Z]{4}[0-9]{5}[A-Z]{1}$/;
        if (!tanRegex.test(data.tan)) {
            alert("Invalid TAN format");
            return;
        }

        if (data.mobileNumber.length !== 10) {
            alert("Mobile number must be 10 digits");
            return;
        }

        const { confirmPassword, ...dataToStore } = data;

        const companies = JSON.parse(localStorage.getItem("companies")) || [];

        const exists = companies.some(
            (company) =>
                company.username === dataToStore.username ||
                company.email === dataToStore.email ||
                company.gstin === dataToStore.gstin
        );

        if (exists) {
            alert("Company already registered with same Username/Email/GSTIN");
            return;
        }

        companies.push(dataToStore);
        localStorage.setItem("companies", JSON.stringify(companies));

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_SECOND,
                {
                    userType: "Company",

                    email: data.email,
                    username: data.username,
                    mobileNumber: data.mobileNumber,

                    companyName: data.companyName,
                    companyType: data.companyType,
                    gstin: data.gstin,
                    tan: data.tan,
                    website: data.website,
                    hrName: data.hrName,

                    name: "",
                    dob: "",
                    qualification: "",
                    college: "",
                    experience: "",
                    address: "",
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

        alert("Company Registration Successful!");
        navigate("/login");
    };

    return (
        <>
            <Navbar />

            <div className="min-h-screen py-10 bg-slate-100 flex flex-col items-center">
                <h1 className="text-3xl font-extrabold mb-6">
                    Company Registration
                </h1>

                <form className="space-y-4 w-full max-w-lg px-6" ref={formRef}>

                    <input
                        type="email"
                        name="email"
                        placeholder="Official Email"
                        value={data.email}
                        onChange={handleChange}
                        required
                        className="input-style"
                        disabled={isEmailVerified}
                    />

                    {data.email && (
                        <p className={`text-sm font-semibold ${emailValid ? "text-green-600" : "text-red-600"}`}>
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
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                    className="mt-1 w-4 h-4"
                                />
                                <label className="text-sm">
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
                                        disabled={!isChecked}
                                        className="w-full py-2 bg-green-400 rounded-xl font-bold"
                                    >
                                        Verify OTP
                                    </button>
                                </>
                            )}
                        </>
                    )}

                    {isEmailVerified && (
                        <>
                            <input type="text" name="companyName"
                                placeholder="Company Name"
                                value={data.companyName}
                                onChange={handleChange}
                                required className="input-style" />

                            <input type="text" name="companyType"
                                placeholder="Company Type"
                                value={data.companyType}
                                onChange={handleChange}
                                required className="input-style" />

                            <input type="text" name="gstin"
                                placeholder="GSTIN"
                                value={data.gstin}
                                onChange={handleChange}
                                required className="input-style" />

                            <input type="text" name="tan"
                                placeholder="TAN Number"
                                value={data.tan}
                                onChange={handleChange}
                                required className="input-style" />

                            <input type="text" name="website"
                                placeholder="Company Website"
                                value={data.website}
                                onChange={handleChange}
                                required className="input-style" />

                            <input type="text" name="hrName"
                                placeholder="HR / Hiring Manager Name"
                                value={data.hrName}
                                onChange={handleChange}
                                required className="input-style" />

                            <input type="tel" name="mobileNumber"
                                placeholder="Contact Number"
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
                                required className="input-style" />

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

                            <input type="password" name="confirmPassword"
                                placeholder="Confirm Password"
                                value={data.confirmPassword}
                                onChange={handleChange}
                                required className="input-style" />

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
                                Register Company
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
            </div>

            <Footer />
        </>
    );
};

export default CompanySignup;
