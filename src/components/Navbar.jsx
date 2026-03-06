import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const dataCurrent = localStorage.getItem("currentUser");

        if (dataCurrent) {
            const parsedUser = JSON.parse(dataCurrent);
            setIsLoggedIn(true);
            setUserName(parsedUser.name || parsedUser.companyName || "User");
        } else {
            setIsLoggedIn(false);
            setUserName("");
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        setIsLoggedIn(false);
        setUserName("");
        alert("Logged out successfully");
        setOpen(false);
    };

    return (
        <>
            <header className="bg-slate-800 sticky top-0  text-white w-full px-6 py-4  flex items-center justify-between">

                <span className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-purple-600 bg-clip-text text-transparent">
                    <Link to="/">HirePro</Link>
                </span>

                <div className="flex items-center gap-6">

                    <ul className="hidden md:flex gap-6 items-center scale-110">
                        <li><Link to="/" className="hover:text-sky-400 transition">Home</Link></li>
                        <li><Link to="/internship" className="hover:text-sky-400 transition">Internships</Link></li>
                        <li><Link to="/company" className="hover:text-sky-400 transition">Jobs</Link></li>
                    </ul>

                    {!isLoggedIn && (
                        <Link
                            to="/login"
                            className="hidden md:flex border px-4 py-2 rounded-md bg-sky-400 text-slate-900 hover:scale-110 hover:bg-sky-300 transition-all duration-300"
                        >
                            Login
                        </Link>
                    )}

                    {isLoggedIn && (
                        <div className="hidden md:flex items-center gap-4">
                            <span className="text-sky-300 font-semibold">
                                Welcome, {userName}
                            </span>

                            <button
                                onClick={handleLogout}
                                className="border px-4 py-2 rounded-md bg-sky-400 text-slate-900 hover:scale-110 hover:bg-sky-300 transition-all duration-300"
                            >
                                Log Out
                            </button>
                        </div>
                    )}

                    {!isLoggedIn && (
                        <>
                            <Link
                                to="/signup"
                                className="hidden md:flex border border-sky-400 px-4 py-2 rounded-md hover:bg-sky-400 hover:text-slate-900 transition"
                            >
                                Sign Up
                            </Link>

                            <Link
                                to="/companysignup"
                                className="hidden md:flex border border-sky-400 px-4 py-2 rounded-md hover:bg-sky-400 hover:text-slate-900 transition"
                            >
                                Company Sign Up
                            </Link>
                        </>
                    )}

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex flex-col gap-1"
                    >
                        <span className={`w-6 h-1 bg-sky-200 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`w-6 h-1 bg-sky-200 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
                        <span className={`w-6 h-1 bg-sky-200 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </button>

                </div>
            </header>
            <div className={`md:hidden bg-slate-900 text-white overflow-hidden transition-all duration-500 ${open ? "max-h-96 py-6" : "max-h-0"}`}>
                <div className="flex flex-col items-center gap-6">

                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/internship" onClick={() => setOpen(false)}>Internships</Link>
                    <Link to="/company" onClick={() => setOpen(false)}>Jobs</Link>

                    {!isLoggedIn && (
                        <>
                            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
                            <Link to="/signup" onClick={() => setOpen(false)}>Sign Up</Link>
                            <Link to="/companysignup" onClick={() => setOpen(false)}>Company Sign Up</Link>
                        </>
                    )}

                    {isLoggedIn && (
                        <>
                            <span className="text-sky-400 font-semibold">
                                Welcome, {userName}
                            </span>

                            <button
                                onClick={handleLogout}
                                className="bg-sky-400 text-slate-900 px-4 py-2 rounded-md"
                            >
                                Log Out
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
