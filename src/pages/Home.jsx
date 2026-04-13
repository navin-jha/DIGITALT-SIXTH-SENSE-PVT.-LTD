import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactCard from "@/components/ui/ContactCard";

import SmartTvs from "../assets/SmartTvs.jpg";
import leptops from "../assets/leptops.jpg";
import surveillance from "../assets/surveillance.jpg";
import ups from "../assets/ups.jpg";
import officeSupplies from "../assets/office.jpg";
import furniture from "../assets/Furniture.jpg";
import contactUsHome from "../assets/contactUsHome.jpg";

const Home = () => {
    const products = [
        {
            name: "Smart TVs & Displays",
            img: SmartTvs,
            desc: "Professional display solutions for classrooms, offices, control rooms, and institutional environments.",
        },
        {
            name: "Laptops & Workstations",
            img: leptops,
            desc: "Reliable computing systems for enterprise teams, education, administration, and technical workloads.",
        },
        {
            name: "Surveillance Systems",
            img: surveillance,
            desc: "CCTV, IP camera, and security monitoring solutions for safety, supervision, and compliance.",
        },
        {
            name: "UPS & Power Solutions",
            img: ups,
            desc: "Power backup infrastructure for uninterrupted operations, critical systems, and equipment safety.",
        },
        {
            name: "Office Supplies",
            img: officeSupplies,
            desc: "Copier paper, stationery, writing essentials, desk accessories, and institutional consumables.",
        },
        {
            name: "Furniture Solutions",
            img: furniture,
            desc: "Modern office, school, and workspace furniture designed for comfort, function, and productivity.",
        },
    ];

    const industries = [
        "Government",
        "Defence",
        "Healthcare",
        "Education",
        "Railways",
        "Corporate",
        "Research",
        "Public Sector",
    ];

    const highlights = [
        {
            title: "Established in 2018",
            desc: "A rapidly growing technology-driven company serving institutions and enterprises across India.",
        },
        {
            title: "Wide Product Portfolio",
            desc: "Electronics, computing, surveillance, UPS systems, stationery, furniture, and project support.",
        },
        {
            title: "Trusted Approach",
            desc: "Focused on reliability, innovation, precision, and integrity in every business engagement.",
        },
        {
            title: "Pan-India Support",
            desc: "Serving clients through offices in Noida, Ranchi, Varanasi, and New Delhi.",
        },
    ];

    const clients = [
        "DRDO",
        "AIIMS",
        "Indian Railways",
        "Indian Army",
        "Indian Air Force",
        "India Post",
        "BHEL",
        "BSNL",
        "NTPC",
        "SBI",
        "NPCIL",
        "Jharkhand Govt.",
    ];

    const certifications = [
        "Startup India Aligned",
        "MSME Recognition",
        "Make in India Focus",
        "Government Procurement Experience",
    ];

    return (
        <div className="overflow-hidden bg-white">
            {/* 🔹 Hero Section with Fullscreen Video */}
            <section className="relative w-full min-h-screen text-white flex items-center justify-center overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src="/hero.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black/55 z-10"></div>

                <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    >
                        Empowering India with Advanced Technology
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-100"
                    >
                        Delivering high-quality electronic, digital, and IT solutions for
                        industries, education, healthcare, surveillance, and government sectors.
                    </motion.p>

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button className="bg-blue-500 text-white hover:bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg text-sm sm:text-base">
                            Explore Products
                        </Button>
                        <Button
                            variant="outline"
                            className="border-white text-white bg-white/10 hover:bg-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg text-sm sm:text-base"
                        >
                            Contact Us
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* 🔹 Marquee Section */}
            <section className="overflow-hidden whitespace-nowrap bg-gray-100 py-2 border-y">
                <motion.div
                    animate={{ x: ["220%", "-100%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="inline-block text-sm font-medium px-4 text-gray-700"
                >
                    Trusted by DRDO • AIIMS • Indian Railways • Indian Army • Enterprise Clients • Government Projects • Pan-India Solutions •
                </motion.div>
            </section>

            {/* 🔹 About Section */}
            <section className="text-center max-w-4xl mx-auto py-10 sm:py-14 px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                >
                    About Company
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-7"
                >
                    Established in 2018, Digitalt Sixth Sense Pvt. Ltd. is a rapidly
                    growing technology-driven company providing advanced electronic,
                    scientific, and digital solutions across India.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-7"
                >
                    We specialize in displays, computing systems, surveillance,
                    communication, power backup, office supplies, and customized
                    project-based solutions for institutions, industries, and enterprise
                    clients.
                </motion.p>
            </section>

            {/* 🔹 Highlights Section */}
            <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 text-center"
                        >
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-7">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 🔹 Industries Section */}
            <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        Industries We Serve
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg">
                        Supporting institutional, public sector, and enterprise
                        requirements with dependable technology and infrastructure solutions.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
                        {industries.map((item, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm sm:text-base text-gray-700"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 Products Section */}
            <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-4">
                    Our Products & Services
                </h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg mb-8 sm:mb-12">
                    From displays and computing systems to surveillance, power
                    solutions, office supplies, and furniture, we deliver complete
                    technology-backed infrastructure support.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4">
                    {products.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden group h-72 sm:h-80 md:h-80 lg:h-[28rem] shadow-xl"
                        >
                            <img
                            
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition duration-500"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
                                <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                                    {item.name}
                                </h3>
                                <p className="text-white/90 text-xs sm:text-sm md:text-base mt-3 max-w-md leading-6">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 🔹 Why Choose Us */}
            <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        Why Choose Us
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg">
                        Our work is built on reliability, innovation, precision, and
                        integrity, with a focus on long-term client value.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                        {[
                            "High-quality electronic and digital solutions",
                            "Institutional and project-based supply capability",
                            "Trusted support for government and enterprise sectors",
                            "Future-ready, value-driven technology approach",
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm text-gray-700"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 Clients Section */}
            <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        Trusted By Leading Organizations
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                        We have served respected institutions across defence,
                        healthcare, railways, public sector, and enterprise ecosystems.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
                        {clients.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="rounded-xl border border-gray-200 bg-white py-4 px-3 shadow-sm text-gray-800 font-medium text-sm sm:text-base"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 Certifications Section */}
            <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        Recognition & Certifications
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg">
                        Our profile reflects alignment with national initiatives and
                        institutional credibility.
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {certifications.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5 text-gray-700 font-medium"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 Pan India Presence */}
            <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        Pan-India Presence
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                        With offices and operational presence across multiple cities, we
                        support organizations with dependable product delivery and service
                        coordination across India.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                        {[
                            "Head Office - Noida",
                            "Branch Office - Ranchi",
                            "Regional Office - Varanasi",
                            "Registered & Coordination Presence - New Delhi",
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5 text-gray-700 font-medium"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
                    <div className="flex flex-col justify-center">
                        <div className="w-full overflow-hidden rounded-2xl shadow-md mb-5 bg-white">
                            <img
                                src={contactUsHome}
                                alt="Contact Us"
                                loading="lazy"
                                decoding="async"
                                fetchPriority="low"
                                className="w-full h-64 sm:h-72 md:h-80 object-cover"
                            />
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                            Ready to Transform Your Business?
                        </h2>

                        <p className="text-gray-600 text-sm sm:text-base leading-7 max-w-xl">
                            Get in touch with us for modern IT and electronic solutions. We
                            help businesses, institutions, and public-sector organizations
                            grow with reliable products, tailored support, and practical
                            technology deployment.
                        </p>
                    </div>
                    <ContactCard />
                </div>
            </section>
        </div>
    );
};

export default Home;