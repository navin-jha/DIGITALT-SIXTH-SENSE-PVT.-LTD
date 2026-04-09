import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactCard from "@/components/ui/ContactCard";

import SmartTvs from "@/assets/SmartTvs.jpg";
import leptops from "@/assets/leptops.jpg";
import surveillance from "@/assets/surveillance.jpg";
import ups from "@/assets/ups.jpg";
import officeSupplies from "@/assets/office.jpg";
import furniture from "@/assets/furniture.jpg";
import contactUsHome from "@/assets/contactUsHome.jpg";

const Home = () => {
    return (
        <div className="overflow-hidden">
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
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                <div className="relative z-20 max-w-3xl mx-auto px-4 text-center">
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
                        industries, education, and government sectors.
                    </motion.p>

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="mt-6 sm:mt-8"
                    >
                        <Button className="bg-blue-500 text-white hover:bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg text-sm sm:text-base">
                            Explore Products
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* 🔹 Marquee Section */}
            <section className="overflow-hidden whitespace-nowrap bg-gray-100 py-2">
                <motion.div
                    animate={{ x: ["220%", "-100%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="inline-block text-sm font-medium px-4"
                >
                    Trusted by DRDO • AIIMS • Indian Railways • Government Projects •
                    Enterprise Clients •
                </motion.div>
            </section>

            {/* 🔹 About Section */}
            <section className="text-center max-w-3xl mx-auto py-8 sm:py-12 px-4">
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
                    className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg"
                >
                    Established in 2018, Digital Sixth Sense Pvt. Ltd. is a rapidly
                    growing technology-driven company providing advanced electronic and IT
                    solutions across India.
                </motion.p>
            </section>

            {/* 🔹 Products Section */}
            <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
                    Our Products & Services
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-3">
                    {[
                        { name: "Smart TVs & Displays", img: SmartTvs },
                        { name: "Laptops & Workstations", img: leptops },
                        { name: "Surveillance Systems", img: surveillance },
                        { name: "UPS & Power Solutions", img: ups },
                        { name: "Office Supplies", img: officeSupplies },
                        { name: "Furniture Solutions", img: furniture },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden group h-64 sm:h-72 md:h-80 lg:h-96 shadow-xl"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center px-2 sm:px-4">
                                    {item.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
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
                            help businesses grow with the latest technology, reliable support,
                            and tailored services.
                        </p>
                    </div>

                    <ContactCard />
                </div>
            </section>
        </div>
    );
};

export default Home;