import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin,FaInstagram, FaGithub, FaGlobe } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-black flex text-sky-200 flex-col gap-4 items-center py-5 px-3" >
            <h2 className="text-xl md:text-3xl font-extrabold">WebnD - Web & Design Society</h2>
            <p className="text-lg md:text-2xl font-bold">Design &bull; Develop &bull; Innovate</p>
            <div className="flex items-center gap-6">
                <ul className="flex flex-row sm:flex-row gap-6 items-center">
                    <li><Link to="/" className="hover:text-sky-400 transition">Home</Link></li>
                    <li><Link to="/internships" className="hover:text-sky-400 transition">Internships</Link></li>
                    <li><Link to="/companies" className="hover:text-sky-400 transition">Companies</Link></li>
                </ul>
            </div>
            <div className="flex gap-2.5 scale-110">
            <a href="https://github.com/webd-iitbbs" target="_blank" rel="noopener" className="hover:-translate-y-1 transition-all ease-in-out"><FaGithub /></a>
            <a href="https://in.linkedin.com/company/webd-iitbbs" target="_blank" rel="noopener" className="hover:-translate-y-1 transition-all ease-in-out"><FaLinkedin /></a>
            <a href="https://www.instagram.com/webnd.iitbbs/" target="_blank" rel="noopener" className="hover:-translate-y-1 transition-all ease-in-out"><FaInstagram /></a>
            <a href="https://gymkhana.iitbbs.ac.in/clubs/webd.php" target="_blank" rel="noopener" className="hover:-translate-y-1 transition-all ease-in-out"><FaGlobe /></a>
            </div>
        </footer>
    )
}

export default Footer;

