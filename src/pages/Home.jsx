// import React from "react";
// import InternshipCarousel from "../components/InternshipCarousel";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import JobCarousel from "../components/JobCarousel";

// import {
//     FaAmazon,
//     FaCcMastercard,
//     FaCcVisa,
//     FaGoogle,
//     FaInstagram,
//     FaMicrosoft,
//     FaPaypal,
//     FaSlack,
//     FaWhatsapp
// } from "react-icons/fa";
// import { FaApple, FaMeta, FaX } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//     const navigate=useNavigate();
//     return (
//         <>
//             <Navbar />
//             <section
//                 className="
//           relative min-h-screen flex items-center justify-center px-6
//           bg-[url('https://imgs.search.brave.com/xInI2wNdPfFTOf0HEVR5krE5aP5KvPQUKPEfv53Nvk0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9pbnRl/cm5zaGlwLXN0cmF0/ZWd5LXN0cmF0ZWd5/LWNvbmNlcHQtaWxs/dXN0cmF0aW9uLWlu/dGVybnNoaXAtc3Ry/YXRlZ3ktODY0MDA5/OTcuanBn')]
//           bg-contain md:bg-cover bg-center bg-no-repeat bg-slate-100
//         "
//             >
//                 <div className="absolute inset-0 bg-gradient-to-b from-slate-600/40 via-white/20 to-white/40"></div>

//                 <div
//                     className="
//             relative z-10 max-w-4xl w-full
//             bg-white/70 backdrop-blur-lg
//             rounded-3xl p-8 md:p-12
//             shadow-[0_20px_60px_rgba(0,0,0,0.15)]
//             space-y-6
//             text-center md:text-left border border-white/30
//           "
//                 >
//                     <span className="inline-block px-4 py-1 text-sm rounded-full bg-sky-500/10 text-sky-700 font-semibold">
//                         Internships to Careers
//                     </span>

//                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
//                         Launch Your Career with
//                         <span className="block text-sky-600">Real-World Internships</span>
//                     </h1>

//                     <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
//                         HirePro connects students with verified internships and helps companies
//                         discover skilled talent ready for full-time roles.
//                     </p>

//                     <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//                         <button className="px-7 py-3 rounded-xl bg-sky-600 text-white font-bold shadow-lg hover:bg-sky-500 hover:-translate-y-0.5 transition" onClick={()=>{navigate("/internship")}}>
//                             Find Internships
//                         </button>

//                         <button className="px-7 py-3 rounded-xl border border-slate-300 text-slate-800 bg-white/70 hover:bg-white transition">
//                             Hire Talent
//                         </button>

//                     </div>

//                     <div className="flex gap-10 pt-8 justify-center md:justify-start text-sm text-slate-600">
//                         <div>
//                             <p className="text-xl font-bold text-slate-900">1k+</p>
//                             Internships
//                         </div>
//                         <div>
//                             <p className="text-xl font-bold text-slate-900">500+</p>
//                             Companies
//                         </div>
//                         <div>
//                             <p className="text-xl font-bold text-slate-900">5k+</p>
//                             Students
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="py-20 px-6">
//                 <div className="max-w-6xl mx-auto rounded-3xl shadow-xl bg-amber-100/60 py-6 ">
//                     <div className="text-center mb-12">
//                         <span className="inline-block px-4 py-1 text-sm rounded-full bg-sky-500/10 text-sky-800 font-semibold mb-4">
//                             Featured Programs
//                         </span>

//                         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
//                             Famous Internship Programs (FY 2026–27)
//                         </h2>

//                         <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
//                             Hand-picked internship programs from top global companies to kick-start your career.
//                         </p>
//                     </div>

//                     <InternshipCarousel />
//                 </div>
//             </section>
//             <section className="py-20 px-6">
//                 <div className="max-w-6xl mx-auto rounded-3xl shadow-xl bg-amber-100/60 py-5 ">
//                     <div className="text-center mb-12">
//                         <span className="inline-block px-4 py-1 text-sm rounded-full bg-sky-500/10 text-sky-800 font-semibold mb-4">
//                             Featured Jobs
//                         </span>
//                         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
//                             Famous Fresher Jobs (FY 2026–27)
//                         </h2>
//                         <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
//                             Hand-picked fresher job programs from top  companies to kick-start your career.
//                         </p>
//                     </div>

//                     <JobCarousel />
//                 </div>
//             </section>

//             {/* COMPANY LOGOS */}
//             <section className="bg-slate-950 py-10 px-6">
//                 <div className="max-w-6xl mx-auto">
//                     <div className="flex items-center justify-center md:justify-start gap-4 mb-8 text-white">
//                         <span className="hidden md:block bg-slate-700 rotate-90 w-12 h-1 rounded-2xl" />
//                         <div className="text-center md:text-left">
//                             <p className="text-3xl font-extrabold">1k+</p>
//                             <p className="text-sm md:text-lg font-bold text-slate-400">
//                                 openings daily
//                             </p>
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 place-items-center text-slate-400">
//                         <FaMicrosoft className="text-3xl md:text-4xl hover:text-white hover:scale-110 transition cursor-pointer" />
//                         <FaAmazon className="text-3xl md:text-4xl hover:text-white hover:scale-110 transition cursor-pointer"/>
//                         <FaGoogle className="text-3xl md:text-4xl hover:text-white hover:scale-110 transition cursor-pointer" />
//                         <FaMeta className="text-3xl md:text-4xl hover:text-white hover:scale-110 transition cursor-pointer"/>
//                         <FaPaypal className="text-3xl md:text-4xl hover:text-white hover:scale-110 transition cursor-pointer" />
//                         <FaApple className="text-3xl md:text-4xl hover:text-white hover:scale-110 transition cursor-pointer"/>
//                         <FaWhatsapp className="text-3xl md:text-4xl hover:text-white hover:scale-110 transition cursor-pointer" />
//                         <FaCcVisa className="text-3xl md:text-4xl hover:text-white hover:scale-110 transition cursor-pointer"/>
//                         <FaX className="text-3xl md:text-4xl hover:text-white hover:scale-110 transition cursor-pointer"/>
//                         <FaInstagram className="text-3xl md:text-4xl hover:text-white hover:scale-110 transition cursor-pointer"/>
//                         <FaSlack className="text-3xl md:text-4xl hover:text-white hover:scale-110 transition cursor-pointer"/>
//                         <FaCcMastercard className="text-3xl md:text-4xl hover:text-white hover:scale-110 transition cursor-pointer"
// />
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </>
//     );
// };

// export default Home;


import React, { useEffect, useRef, useState } from "react";
import InternshipCarousel from "../components/InternshipCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobCarousel from "../components/JobCarousel";

import {
    FaAmazon,
    FaCcMastercard,
    FaCcVisa,
    FaGoogle,
    FaInstagram,
    FaMicrosoft,
    FaPaypal,
    FaSlack,
    FaWhatsapp
} from "react-icons/fa";
import { FaApple, FaMeta, FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const internshipRef = useRef(null);
    const jobRef = useRef(null);

    const [internshipVisible, setInternshipVisible] = useState(false);
    const [jobVisible, setJobVisible] = useState(false);
    useEffect(() => {
        const options = {
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target === internshipRef.current) {
                    setInternshipVisible(entry.isIntersecting);
                }
                if (entry.target === jobRef.current) {
                    setJobVisible(entry.isIntersecting);
                }
            });
        }, options);

        if (internshipRef.current) observer.observe(internshipRef.current);
        if (jobRef.current) observer.observe(jobRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar />

            <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-sky-100 via-white to-blue-50">

                <div className="max-w-4xl w-full bg-white/80 backdrop-blur-lg rounded-3xl p-10 shadow-2xl space-y-6 text-center md:text-left border border-white/40">

                    <span className="inline-block px-4 py-1 text-sm rounded-full bg-sky-500/10 text-sky-700 font-semibold">
                        Hire Smart. Hire Fast.
                    </span>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
                        Welcome to
                        <span className="block text-sky-600">HirePro Platform</span>
                    </h1>

                    <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
                        Connecting companies with skilled candidates. Verified profiles.
                        Real experience. Faster hiring.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <button
                            className="px-7 py-3 rounded-xl bg-sky-600 text-white font-bold shadow-lg hover:bg-sky-500 hover:-translate-y-1 transition duration-300"
                            onClick={() => navigate("/login")}
                        >
                            Find Internships
                        </button>

                        <button className="px-7 py-3 rounded-xl border border-slate-300 text-slate-800 bg-white hover:bg-slate-50 transition duration-300" onClick={()=>{navigate("/login")}}>
                            Hire Talent
                        </button>
                    </div>
                </div>
            </section>

            <section
                ref={internshipRef}
                className={`py-20 px-6 transition-all duration-700 ${internshipVisible
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-40"
                    }`}
            >
                <div className="max-w-6xl mx-auto rounded-3xl shadow-2xl bg-gradient-to-r from-sky-50 to-blue-100 py-10 px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-slate-800">
                            Featured Internship Programs
                        </h2>
                        <p className="text-slate-500 mt-3">
                            Top companies hiring for 2026–27
                        </p>
                    </div>

                    <InternshipCarousel />
                </div>
            </section>
            <section
                ref={jobRef}
                className={`py-20 px-6 transition-all duration-700 ${jobVisible ? "scale-100 opacity-100" : "scale-90 opacity-40"
                    }`}
            >
                <div className="max-w-6xl mx-auto rounded-3xl shadow-2xl bg-gradient-to-r from-purple-50 to-indigo-100 py-10 px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-slate-800">
                            Featured Fresher Jobs
                        </h2>
                        <p className="text-slate-500 mt-3">
                            Launch your full-time career
                        </p>
                    </div>

                    <JobCarousel />
                </div>
            </section>

            <section className="py-24 bg-slate-900 text-white text-center px-6">
                <h2 className="text-4xl font-bold mb-12">
                    Why Choose HirePro?
                </h2>

                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    <div className="bg-slate-800 p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
                        <h3 className="text-xl font-bold mb-3 text-sky-400">
                            Verified Profiles
                        </h3>
                        <p className="text-slate-400">
                            Every candidate submits experience before approval.
                        </p>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
                        <h3 className="text-xl font-bold mb-3 text-sky-400">
                            Fast Hiring
                        </h3>
                        <p className="text-slate-400">
                            Companies can hire candidates instantly.
                        </p>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
                        <h3 className="text-xl font-bold mb-3 text-sky-400">
                            Experience-Based Matching
                        </h3>
                        <p className="text-slate-400">
                            Smart filtering based on skills & experience.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-slate-950 to-slate-800 py-14 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 place-items-center text-slate-400">
                    <FaMicrosoft className="text-4xl hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
                    <FaAmazon className="text-4xl hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
                    <FaGoogle className="text-4xl hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
                    <FaMeta className="text-4xl hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
                    <FaPaypal className="text-4xl hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
                    <FaApple className="text-4xl hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
                    <FaWhatsapp className="text-4xl hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
                    <FaCcVisa className="text-4xl hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
                    <FaX className="text-4xl hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
                    <FaInstagram className="text-4xl hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
                    <FaSlack className="text-4xl hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
                    <FaCcMastercard className="text-4xl hover:text-white hover:scale-125 transition duration-300 cursor-pointer" />
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;
