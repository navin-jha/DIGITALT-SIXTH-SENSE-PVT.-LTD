import React from 'react';
import { motion } from "framer-motion";
import aboutBackground from "../assets/aboutBackground.jpg";
import businessImg from "../assets/businessImg.jpg";
import Ourmission from "../assets/OurMission.jpg";
import OurVision from "../assets/OurVision.jpg";
import OurPrincipal from "../assets/OurPrincipal.jpg";
import companyData from "../assets/companyData.jpg";
import WhyChoose from "../assets/WhyChoose.jpg";
import Products from './Products';

function About() {
    return (
        <div className="overflow-hidden">

            <section className="relative w-full min-h-screen flex items-center ">
                {/* Background Image */}
                <img
                    src={aboutBackground}
                    alt="About Us"
                    loading="eager"
                    fetchPriority="high"
                    className="absolute inset-0 w-full h-full object-cover object-[72%_center]"
                />

                {/* Soft left fade for text readability */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#f5f5f3]/95 via-[#f5f5f3]/82 to-transparent" />

                {/* Extra subtle luxury layer */}
                <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.10),rgba(0,0,0,0.12))]" />

                {/* Content */}
                <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-white/60 backdrop-blur-sm text-sm font-medium tracking-[0.15em] uppercase text-red-600 shadow-sm"
                        >
                            About Our Company
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#111827]"
                        >
                            Digital Sixth Sense
                        </motion.h1>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "92px" }}
                            transition={{ delay: 0.35, duration: 0.6 }}
                            className="h-1.5 bg-red-600 mt-5 rounded-full shadow-sm"
                        />

                        <motion.p
                            initial={{ opacity: 0, x: -35 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="mt-7 text-[15px] sm:text-lg md:text-xl leading-8 text-[#374151] max-w-xl"
                        >
                            Founded in 2018, <strong className="text-[#111827]">Digital Sixth Sense Pvt. Ltd.</strong> is a
                            technology-driven company delivering advanced electronic and IT solutions across India.
                            We empower industries, institutions, and government organizations with innovative,
                            reliable, and future-ready technology.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45, duration: 0.7 }}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <button 
                                onClick={() => window.location.href = "/products"}
                                className="px-7 py-3.5 rounded-full bg-red-600 text-white font-semibold shadow-lg shadow-red-600/20 hover:bg-red-700 transition-all duration-300">
                                Explore Services
                            </button>

                            <button
                                onClick={() => window.location.href = "/contact"}
                                className="px-7 py-3.5 rounded-full border border-[#111827]/15 bg-white/70 backdrop-blur-sm text-[#111827] font-semibold hover:bg-white transition-all duration-300 shadow-sm">
                                Contact Us
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 🔹 Business Sectors Section */}
            <section className="py-16 bg-gray-50">
                <div className="px-5 md:px-20 space-y-16">

                    {/* Our Business Sectors */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Business Sectors</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg md:text-xl">
                                <li>Government sectors & PSUs</li>
                                <li>Social department sector</li>
                                <li>Agriculture and Horticulture business</li>
                                <li>IT sector: Equipment supply & services</li>
                                <li>Education sector: Civil to advanced Public & Private Bodies</li>
                                <li>Medical sector: Tools, machines, infrastructure</li>
                                <li>Civil sector: Construction, expansion, maintenance</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={businessImg}
                                alt="Business Sectors"
                                className="w-full rounded-xl shadow-lg object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Our Mission */}
                    <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg md:text-xl">
                                <li>Empowering businesses with modern IT & electronic solutions</li>
                                <li>Providing reliable and innovative technology support</li>
                                <li>Enhancing efficiency for government and private sectors</li>
                                <li>Ensuring sustainable growth and long-term partnerships</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={Ourmission}
                                alt="Our Mission"
                                className="w-full rounded-xl shadow-lg object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Our Vision */}
                    <div className="flex flex-col items-center gap-12 md:flex-row">
                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg md:text-xl">
                                <li>Innovating solutions for sustainable business growth</li>
                                <li>Enhancing technological capabilities across sectors</li>
                                <li>Fostering long-term partnerships and impact</li>
                                <li>Creating a future-ready digital ecosystem in India</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={OurVision}
                                alt="Our Vision"
                                className="w-full rounded-xl shadow-lg object-cover"
                            />
                        </motion.div>
                    </div>
                    {/* Our Principles Section */}
                    <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Principles</h2>
                            <p className="text-gray-700 text-lg md:text-xl mb-4">
                                We have made our products and services highly feasible by expanding our presence across every state in India.
                                This has made our offerings competitive yet affordable, as we have minimized the reaching costs.
                                <strong>“We are working to make ourselves more accessible to our customers through multiple channels, with the help of the internet.”</strong>
                            </p>
                            <p className="text-gray-700 text-lg md:text-xl mb-4">
                                We evaluate our services from a customer perspective, continually renewing, upgrading, and shifting our processes
                                and quality over time to align with evolving requirements. We believe that
                                <strong>“One satisfied client is equivalent to fivefolds of potential customers.”</strong>
                            </p>
                            <p className="text-gray-700 text-lg md:text-xl">
                                Being a start-up, we believe that any business that adds genuine value to others will, sooner or later, achieve
                                the desired level of growth. <strong>“We serve with a willingness to grow alongside our clients.”</strong>
                            </p>
                        </motion.div>

                        {/* Optional Image Placeholder for Principles */}
                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={OurPrincipal} // You can replace with a custom image if you have
                                alt="Our Principles"
                                className="w-full rounded-xl shadow-lg object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-slate-600  ">
                        <div className=" grid md:grid-cols-2 gap-8 items-center">

                            <div>
                                <img
                                    src={companyData}
                                    alt="Company Highlights"
                                    className="w-full shadow-lg object-cover"
                                />
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 p-5 md:p-9">
                                {[
                                    { number: 7, label: "Years Of Experiences" },
                                    { number: 49, label: "Professional Staffs" },
                                    { number: 276, label: "Happy Clients" },
                                    { number: 15, label: "New Offices" },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center"
                                    >
                                        <span className="text-4xl font-bold text-blue-600">{stat.number}+</span>
                                        <span className="mt-2 text-lg font-medium text-gray-700">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us Section */}
                    <div className="flex flex-col items-center gap-12 md:flex-row">
                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg md:text-xl">
                                <li>
                                    <strong>Feasible, Affordable, and Timely Service:</strong> We provide cost-effective solutions with a dedicated service approach, always within the agreed timelines.
                                </li>
                                <li>
                                    <strong>One-Stop Destination for Customized Corporate Requirements:</strong> We offer a comprehensive solution for all corporate needs, tailored to meet specific requirements under one roof.
                                </li>
                                <li>
                                    <strong>Exceptional Customer & Vendor Retention:</strong> Our strong commitments to vendors and a focus on delivering quality services ensure the highest levels of customer and vendor retention.
                                </li>
                                <li>
                                    <strong>Diverse Client Base Across Various Industries:</strong> We proudly serve clients in industries such as education, civil, defence, medical, and more, offering customized solutions for each sector.
                                </li>
                            </ul>
                        </motion.div>

                        {/* Optional Image Placeholder */}
                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={WhyChoose}
                                alt="Why Choose Us"
                                className="w-full rounded-xl shadow-lg object-cover"
                            />
                        </motion.div>
                    </div>
                    {/* 🔹 Our Team Section */}
                    <div className="py-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                            Our Leadership Team
                        </h2>

                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                {
                                    name: "Benu Gupta",
                                    role: "Director",
                                    desc: "The visionary leader driving innovation, strategy, and success with expertise and creativity.",
                                },
                                {
                                    name: "Ankit Gupta",
                                    role: "Director",
                                    desc: "Driving revenue through strong client relationships and strategic selling.",
                                },

                                {
                                    name: "Amit Adarsh",
                                    role: "COO",
                                    desc: "Driving growth through strategic planning and operational excellence.",
                                },

                                {
                                    name: "Ayush",
                                    role: "Finance Executive",
                                    desc: "Ensuring financial accuracy, transparency, and business efficiency.",
                                },
                                {
                                    name: "Ayushi Agrawal",
                                    role: "Sales Executive",
                                    desc: "Identifying opportunities and converting leads into long-term clients.",
                                },
                                {
                                    name: "Ayan Malik",
                                    role: "Marketing Manager",
                                    desc: "Driving brand growth and customer engagement through innovation.",
                                },
                                {
                                    name: "Abhishek Kumar",
                                    role: "Marketing Manager",
                                    desc: "Leading campaigns to enhance market presence and impact.",
                                },
                                {
                                    name: "Bharat",
                                    role: "Sales Manager",
                                    desc: "Accelerating sales and expanding business reach.",
                                },
                                {
                                    name: "Aryan Jha",
                                    role: "Accountant",
                                    desc: "Maintaining financial records with precision and reliability.",
                                },
                                {
                                    name: "Amit Prajapati",
                                    role: "Sales Head",
                                    desc: "Leading sales strategies and driving business growth.",
                                },
                                {
                                    name: "Siddhant",
                                    role: "Marketing Manager",
                                    desc: "Executing strategies for brand visibility and growth.",
                                },
                                {
                                    name: "Ashok Kumar",
                                    role: "Marketing Manager",
                                    desc: "Enhancing business impact through creative campaigns.",
                                },
                                {
                                    name: "Sunil Kumar Gupta",
                                    role: "Sales Head (Gaya)",
                                    desc: "Driving regional growth and strong market presence.",
                                },
                                {
                                    name: "Deepak Kumar Prasad",
                                    role: "Director – Marketing",
                                    desc: "Strategic leader driving marketing innovation and growth.",
                                },
                                {
                                    name: "Smita Yadav",
                                    role: "Business Development Executive",
                                    desc: "Expanding business opportunities and partnerships.",
                                },
                            ]
                                .sort((a, b) => {
                                    const getPriority = (role) => {
                                        const r = role.toLowerCase();
                                        if (r.includes("director") || r.includes("coo")) return 1;
                                        if (r.includes("head")) return 2;
                                        if (r.includes("manager")) return 3;
                                        if (r.includes("executive")) return 4;
                                        return 5;
                                    };

                                    return getPriority(a.role) - getPriority(b.role);
                                })
                                .map((member, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.03 }}
                                        title={member.desc}
                                        className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 shadow-sm hover:shadow-md hover:border-blue-400 transition cursor-pointer"
                                    >
                                        <h3 className="text-sm md:text-base font-semibold text-gray-800 whitespace-nowrap">
                                            {member.name}
                                        </h3>
                                        <span className="text-xs md:text-sm text-blue-600 font-medium whitespace-nowrap">
                                            - {member.role}
                                        </span>
                                    </motion.div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;