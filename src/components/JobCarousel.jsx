import { useEffect, useState } from "react";
import {
    FaArrowRight,
    FaChevronLeft,
    FaChevronRight,
    FaMoneyBill,
    FaRupeeSign
} from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import data from "../data/jobs.json";

const JobCarousel = () => {
    const [jobs, setJobs] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setJobs(data);
    }, []);

    const next = () => {
        setIndex((prev) => (prev + 1) % jobs.length);
    };

    const prev = () => {
        setIndex((prev) =>
            prev === 0 ? jobs.length - 1 : prev - 1
        );
    };

    if (!jobs.length) return null;

    return (
        <div className="relative max-w-2xl mx-auto flex flex-row items-center">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {jobs.map((item, i) => (
                        <div
                            key={i}
                            className="w-full flex-shrink-0 px-2"
                        >
                            <div className={`bg-slate-900 px-4 py-6 rounded-2xl text-white shadow-lg transition-all duration-500 ${index === i ? "scale-100 shadow-2xl" : "scale-90 opacity-60"}`}>
                                <h3 className="text-lg md:text-xl font-extrabold">
                                    {item.role}
                                </h3>

                                <p className="text-sky-400 font-semibold">
                                    {item.company}
                                </p>

                                <p className="text-slate-300 mt-2 flex items-center gap-1.5">
                                    <FaMapLocationDot />
                                    {item.location}
                                </p>

                                <div className="flex flex-col gap-1 text-sm text-slate-400 mt-3">
                                    <span className="flex items-center gap-1">
                                        <FaMoneyBill />
                                        <FaRupeeSign />
                                        {item.package}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between gap-4 mt-4">
                                    <a
                                        href={item.applyURL}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sky-400 font-semibold hover:underline flex items-center gap-2"
                                    >
                                        Apply <FaArrowRight />
                                    </a>

                                    <button className="px-4 py-2 rounded-xl bg-sky-500 text-slate-900 font-bold hover:bg-sky-300 transition">
                                        Know More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={prev}
                className="absolute -left-9 top-1/3 hover:-translate-y-1 -translate-y-1/2 p-3 bg-slate-800 text-white rounded-full hover:bg-slate-500 hover:scale-102 transition"
            >
                <FaChevronLeft />
            </button>

            <button
                onClick={next}
                className="absolute -right-9 top-1/3 hover:-translate-y-1 -translate-y-1/2 p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition"
            >
                <FaChevronRight />
            </button>
        </div>
    );
};

export default JobCarousel;
