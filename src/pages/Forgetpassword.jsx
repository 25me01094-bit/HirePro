import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Forgetpassword = () => {

    const navigate = useNavigate(); // ✅ fixed

    const [data, setData] = useState({
        username: "",
        securityQuestion: "",
        password: "",
        confirmPassword: "",
        answer: "",
    });

    const [isMatched, setisMatched] = useState(false);
    const [isJustified, setisJustified] = useState(false);

    const storedData = JSON.parse(localStorage.getItem("users")) || [];

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const changePassword = () => {
        const requestUser = storedData.find(
            (user) => user.username === data.username
        );

        if (!requestUser) {
            alert("User not found");
            return;
        }

        if (data.password !== data.confirmPassword) {
            alert("Password isn't matching with the confirm password area");
            setData((prev) => ({
                ...prev,
                password: "",
                confirmPassword: "",
            }));
            return;
        }

        const updatedUsers = storedData.map((user) =>
            user.username === data.username
                ? { ...user, password: data.password }
                : user
        );

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        alert("Password Changed Successfully");

        setData({
            username: "",
            securityQuestion: "",
            password: "",
            confirmPassword: "",
            answer: "",
        });

        setisMatched(false);
        setisJustified(false);

        navigate("/login");
    };

    const passquestion = () => {
        const requestUser = storedData.find(
            (user) => user.username === data.username
        );

        if (!requestUser) {
            alert("User doesn't exist");
            setData((prev) => ({
                ...prev,
                username: "",
            }));
            return;
        }

        if (data.securityQuestion !== requestUser.securityQuestion) {
            alert("Security Question doesn't match");
            setData((prev) => ({
                ...prev,
                securityQuestion: "",
            }));
            setisMatched(false);
        } else {
            setisMatched(true);
        }
    };

    const checkanswer = () => {
        const requestUser = storedData.find(
            (user) => user.username === data.username
        );

        if (!requestUser) {
            alert("User not found");
            return;
        }

        if (data.answer !== requestUser.answer) {
            alert("Answer is wrong for security question");
            setData((prev) => ({
                ...prev,
                answer: "",
            }));
            setisJustified(false);
        } else {
            setisJustified(true);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen py-5 bg-slate-100 place-items-center">
                <h1 className="text-3xl md:text-4xl text-sky-950 font-extrabold underline text-center">
                    Retrieve Your Account Credentials
                </h1>
                <br />

                <p className="px-4">
                    <label className="text-lg md:text-xl font-bold text-black">
                        Username :
                    </label>{" "}
                    <input
                        type="text"
                        placeholder="Choose a username"
                        name="username"
                        value={data.username}
                        onChange={handleChange}
                        disabled={isMatched}
                        required
                        className="border border-slate-900 px-4 py-2 rounded-md w-full max-w-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                </p>

                <br /><br />

                <p className="px-4">
                    <label className="text-lg md:text-xl font-bold text-black">
                        Security Question :
                    </label>{" "}
                    <input
                        type="text"
                        placeholder="Enter your security question"
                        name="securityQuestion"
                        value={data.securityQuestion}
                        onChange={handleChange}
                        required
                        className="border border-slate-900 px-4 py-2 rounded-md w-full max-w-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                </p>

                <br />

                {isMatched && (
                    <p className="text-black px-4">
                        <label className="text-lg md:text-xl font-bold">
                            Answer :
                        </label>{" "}
                        <input
                            type="text"
                            placeholder="Give answer of the security question"
                            name="answer"
                            value={data.answer}
                            onChange={handleChange}
                            required
                            className="border border-slate-900 px-4 py-2 rounded-md w-full max-w-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                        />
                    </p>
                )}

                <br />

                {isJustified && (
                    <>
                        <p className="text-black px-4">
                            <label className="text-lg md:text-xl font-bold">
                                Password :
                            </label>{" "}
                            <input
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                                required
                                className="border border-slate-900 px-4 py-2 rounded-md w-full max-w-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                            />
                        </p>

                        <p className="text-black px-4">
                            <label className="text-xl md:text-2xl font-bold">
                                Re-enter Password :
                            </label>{" "}
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                name="confirmPassword"
                                value={data.confirmPassword}
                                onChange={handleChange}
                                required
                                className="border border-slate-900 px-4 py-2 rounded-md w-full max-w-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                            />
                        </p>
                    </>
                )}

                <br /><br />

                <p className="px-4">
                    <button
                        onClick={
                            isMatched
                                ? (isJustified ? changePassword : checkanswer)
                                : passquestion
                        }
                        type="button"
                        className="w-full max-w-md py-3 px-5 rounded-2xl bg-sky-400 text-slate-900 font-bold hover:bg-sky-300 transition-all"
                        disabled={!data.username.trim() || !data.securityQuestion.trim()}
                    >
                        {isMatched
                            ? (isJustified ? "Change Password" : "Verify Answer")
                            : "Verify Security Question"}
                    </button>
                </p>

                <br /><br /><br />
            </div>
            <Footer />
        </>
    );
};

export default Forgetpassword;
