import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import internships from "../data/internship.json";
import {
    FaMapMarkerAlt,
    FaRupeeSign,
    FaCalendarAlt,
    FaUsers,
    FaBriefcase,
} from "react-icons/fa";

const Internships = () => {
    const [openIndex, setOpenIndex] = useState(null);
    useEffect(() => {
        const intern_id = localStorage.getItem("intern_card");
        if (intern_id !== null) {
            setOpenIndex(parseInt(intern_id));
            const element = document.getElementById(intern_id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
                localStorage.removeItem("intern_card")
            }
        }}, []);
    return (<>
        <Navbar />
        <section className="min-h-screen bg-slate-100 px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900">
                        Internship Opportunities
                    </h1>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        Explore verified internships from top companies across India and
                        work-from-home roles.
                    </p>
                </div>
                <div className="space-y-10">
                    {internships.map((item, index) => (
                        <div
                            key={item.id}
                            id={`${index}`}
                            className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-slate-200"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                <div>
                                    <h2 className="text-2xl font-extrabold text-slate-900">
                                        {item.role}
                                    </h2>
                                    <p className="text-sky-600 font-semibold text-lg">
                                        {item.company}
                                    </p>
                                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-600">
                                        <span className="flex items-center gap-2">
                                            <FaMapMarkerAlt /> {item.location}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <FaRupeeSign /> {item.stipend}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <FaCalendarAlt /> {item.duration}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 min-w-[220px]">
                                    <a
                                        href={item.applyUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-sky-600 text-white text-center py-3 rounded-xl font-bold hover:bg-sky-500 transition"
                                    >
                                        Apply Now
                                    </a>
                                    <div className="flex justify-between text-sm text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <FaUsers /> 120 applicants
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaBriefcase /> 2 openings
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {item.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-8">
                                <button
                                    onClick={() =>
                                        setOpenIndex(openIndex === index ? null : index)
                                    }
                                    className="text-sky-600 font-semibold hover:underline"
                                >
                                    {openIndex === index
                                        ? "Hide Details"
                                        : "View Internship Details"}
                                </button>
                                {openIndex === index && (
                                    <div className="mt-6 space-y-6 text-slate-700">
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-2">
                                                About the Internship
                                            </h3>
                                            <p className="leading-relaxed">
                                                This internship offers hands-on experience in the role
                                                of <strong>{item.role}</strong>, allowing candidates to
                                                work with real-world projects and gain industry-ready
                                                skills.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-2">
                                                Who Can Apply
                                            </h3>
                                            <ul className="list-disc pl-6 space-y-1">
                                                <li>Students or fresh graduates</li>
                                                <li>Available for {item.duration}</li>
                                                <li>Have relevant skills mentioned above</li>
                                                <li>Strong willingness to learn</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-2">
                                                Additional Information
                                            </h3>
                                            <ul className="list-disc pl-6 space-y-1">
                                                <li>Flexible work environment (role dependent)</li>
                                                <li>Certificate on successful completion</li>
                                                <li>Performance-based full-time opportunity</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-2">
                                                About the Company
                                            </h3>
                                            <p className="leading-relaxed">
                                                <strong>{item.company}</strong> is a growing organization
                                                offering innovative solutions and a collaborative work
                                                culture focused on learning and growth.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Footer />
    </>
    );
};

export default Internships;
