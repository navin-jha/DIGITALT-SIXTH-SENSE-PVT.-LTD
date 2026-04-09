import React from "react";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaPaperPlane,
} from "react-icons/fa";
import { ArrowRight, Building2, Mail, PhoneCall } from "lucide-react";

import contactUs from "../assets/contactUs.jpg";
import headOffice from "../assets/headOffice.png";
import CoordinationOffice from "../assets/CoordinationOffice.png";
import BranchOffice from "../assets/BranchOffice.png";
import RegionalOffice from "../assets/RegionalOffice.png";
import RegisteredOffice from "../assets/RegisteredOffice.png";

const offices = [
    {
        name: "Head Office",
        address: "C-53, C Block, Sector-2, Noida, Uttar Pradesh – 201301",
        mapLink: "https://www.google.com/maps/place/C-53-54...",
        image: headOffice,
    },
    {
        name: "Coordination Office",
        address: "Barakhamba Road, New Delhi – 110001",
        mapLink: "https://www.google.com/maps/search/904-905...",
        image: CoordinationOffice,
    },
    {
        name: "Branch Office",
        address: "Ranchi, Jharkhand – 834005",
        mapLink: "https://www.google.com/maps/place/Sukhdev...",
        image: BranchOffice,
    },
    {
        name: "Regional Office",
        address: "Varanasi – 221005",
        mapLink: "https://www.google.com/maps/place/Karmajeetpur...",
        image: RegionalOffice,
    },
    {
        name: "Registered Office",
        address: "Lajpat Nagar, New Delhi – 110024",
        mapLink: "https://www.google.com/maps/search/A-121...",
        image: RegisteredOffice,
    },
];

const phones = [
    "+91 81508 40094",
    "+91 98106 01381",
    "+91 98732 37861",
    "+91 93306 57740",
];

function Contact() {
    return (
        <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Hero Section */}
            <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
                <img
                    src={contactUs}
                    alt="Contact Us"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-slate-900/60 to-blue-900/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center md:px-10 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
                    >
                        <Mail size={16} />
                        Let’s Connect
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
                    >
                        Contact Us
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-5 max-w-2xl text-base leading-7 text-gray-200 md:text-xl"
                    >
                        Let’s get in touch. We’d love to hear from you and help you with
                        the right solutions for your needs.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-4"
                    >
                        <a
                            href="#contact-form"
                            className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700"
                        >
                            Send Message
                        </a>
                        <a
                            href="#locations"
                            className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                            View Locations
                        </a>
                    </motion.div>
                </div>
            </section>

            <section
                id="contact-form"
                className="relative z-10 -mt-12 px-6 pb-10 md:px-10 lg:px-16"
            >
                <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    {/* Form Card */}
                    <div className="rounded-[28px] border border-white/70 bg-white/95 p-5 shadow-xl backdrop-blur-md md:p-7 lg:p-8">
                        <div className="mb-6">
                            <div className="mb-3 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                                Get in Touch
                            </div>
                            <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
                                Send us a message
                            </h2>
                            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">
                                Have a question or business inquiry? Fill out the form and our team
                                will get back to you shortly.
                            </p>
                        </div>

                        <form className="grid gap-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                            />

                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                            />

                            <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600">
                                Send Message
                                <FaPaperPlane size={14} />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info Card */}
                    <div className="rounded-[28px] bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 p-5 text-white shadow-xl md:p-7 lg:p-8">
                        <div className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur-sm">
                            Contact Details
                        </div>

                        <h3 className="text-xl font-extrabold md:text-2xl">
                            We’re here to help
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-300">
                            Reach out to us for support, inquiries, and business discussions.
                        </p>

                        <div className="mt-6 space-y-4">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-300">Email Address</p>
                                        <a
                                            href="mailto:info@company.com"
                                            className="mt-1 block text-sm font-semibold text-white hover:text-blue-300"
                                        >
                                            info@company.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                                <div className="mb-3 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-300">Phone Numbers</p>
                                        <p className="text-sm font-semibold text-white">Call us directly</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {phones.map((num, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5"
                                        >
                                            <PhoneCall size={15} className="text-blue-300" />
                                            <span className="text-sm text-slate-100">{num}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
                                        <Building2 size={17} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-300">Business Hours</p>
                                        <p className="mt-1 text-sm font-semibold text-white">
                                            Monday to Saturday
                                        </p>
                                        <p className="text-sm text-slate-300">9:00 AM to 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations */}
            <section
                id="locations"
                className="px-6 py-10 md:px-10 lg:px-16 lg:py-14"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center">
                        <div className="mb-3 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                            Our Offices
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
                            Our Locations
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                            Visit any of our offices across different locations. Find the
                            nearest branch and connect with us directly.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                        {offices.map((office, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="group overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={office.image}
                                        alt={office.name}
                                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700 shadow">
                                        Office Location
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
                                        {office.name}
                                    </h3>

                                    <div className="mt-4 flex items-start gap-3">
                                        <FaMapMarkerAlt className="mt-1 text-blue-500" />
                                        <p className="text-sm leading-6 text-gray-600">
                                            {office.address}
                                        </p>
                                    </div>

                                    <a
                                        href={office.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                                    >
                                        View Map
                                        <ArrowRight size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="px-6 pb-14 md:px-10 lg:px-16">
                <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 p-8 text-white shadow-2xl md:p-12">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                                Let’s Talk
                            </p>
                            <h3 className="mt-2 text-2xl font-extrabold md:text-3xl">
                                Ready to connect with our team?
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-blue-50 md:text-base">
                                Contact us today for inquiries, support, or business
                                discussions. We’re always happy to help.
                            </p>
                        </div>

                        <a
                            href="mailto:info@company.com"
                            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                        >
                            Email Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;