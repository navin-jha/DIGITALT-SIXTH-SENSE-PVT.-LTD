import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactCard from "@/components/ui/ContactCard";
import IndustriesSection from "@/components/ui/IndustriesSection";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import SmartTvs from "../assets/SmartTvs.jpg";
import laptops from "../assets/laptops.jpg";
import surveillance from "../assets/surveillance.jpg";
import ups from "../assets/ups.jpg";
import officeSupplies from "../assets/office.jpg";
import furniture from "../assets/Furniture.jpg";
import contactUsHome from "../assets/contactUsHome.jpg";

import DRDO from "../assets/DRDO.jpg";
import AIIMS from "../assets/AIIMS.png";
import IndianRailways from "../assets/Indian_Railways.png";
import IndianArmy from "../assets/IndianArmy.jpg";
import IndianAirForce from "../assets/IndianAirForce.jpg";
import IndiaPost from "../assets/IndiaPost.png";
import BHEL from "../assets/BHEL.png";
import BSNL from "../assets/BSNL.png";
import NTPC from "../assets/NTPC.png";
import SBI from "../assets/SBI.jpg";
import NPCIL from "../assets/NPCIL.png";
import JharkhandGovt from "../assets/JharkhandGovt.jpg";

const PRODUCTS = [
    {
        name: "Smart TVs & Displays",
        img: SmartTvs,
        desc: "Professional display solutions for classrooms, offices, control rooms, and institutional environments.",
    },
    {
        name: "Laptops & Workstations",
        img: laptops,
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

const INDUSTRIES = [
    "Government",
    "Defence",
    "Healthcare",
    "Education",
    "Railways",
    "Corporate",
    "Research",
    "Public Sector",
];

const HIGHLIGHTS = [
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

const STATS = [
    { value: "2018", label: "Established" },
    { value: "Pan-India", label: "Operational Reach" },
    { value: "6+", label: "Core Solution Segments" },
    { value: "Govt & Enterprise", label: "Trusted Focus" },
];

const CLIENTS = [
    { title: "DRDO", img: DRDO },
    { title: "AIIMS", img: AIIMS },
    { title: "Indian Railways", img: IndianRailways },
    { title: "Indian Army", img: IndianArmy },
    { title: "Indian Air Force", img: IndianAirForce },
    { title: "India Post", img: IndiaPost },
    { title: "BHEL", img: BHEL },
    { title: "BSNL", img: BSNL },
    { title: "NTPC", img: NTPC },
    { title: "SBI", img: SBI },
    { title: "NPCIL", img: NPCIL },
    { title: "Jharkhand Govt.", img: JharkhandGovt },
];

const CERTIFICATIONS = [
    "Startup India Aligned",
    "MSME Recognition",
    "Make in India Focus",
    "Government Procurement Experience",
];

const WHY_CHOOSE_US = [
    "High-quality electronic and digital solutions",
    "Institutional and project-based supply capability",
    "Trusted support for government and enterprise sectors",
    "Future-ready, value-driven technology approach",
];

const PRESENCE_LOCATIONS = [
    "Head Office - Noida",
    "Branch Office - Ranchi",
    "Regional Office - Varanasi",
    "Registered Presence - New Delhi",
];

const STRIP_ITEMS = [
    "Trusted by Leading Institutions",
    "Government Supply Solutions",
    "Enterprise Technology Support",
    "Pan-India Operations",
    "Electronics & Infrastructure Partner",
    "Reliable Institutional Procurement",
    "Trusted by Leading Institutions",
    "Government Supply Solutions",
    "Enterprise Technology Support",
    "Pan-India Operations",
    "Electronics & Infrastructure Partner",
    "Reliable Institutional Procurement",
];

const fadeUp = {
    initial: { opacity: 0, y: 35 },
    animate: { opacity: 1, y: 0 },
};

const HeroSection = memo(function HeroSection({ products, stats }) {
    return (
        <section className="relative min-h-screen w-full overflow-hidden text-white">
            <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
            />
            <div className="absolute inset-0 bg-black/65" />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs tracking-wide text-white/90 backdrop-blur-sm sm:text-sm"
                        >
                            Trusted Technology & Infrastructure Partner
                        </motion.span>

                        <motion.h1
                            initial={fadeUp.initial}
                            animate={fadeUp.animate}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                        >
                            Empowering India with Advanced Technology Solutions
                        </motion.h1>

                        <motion.p
                            initial={fadeUp.initial}
                            animate={fadeUp.animate}
                            transition={{ duration: 0.8, delay: 0.25 }}
                            className="mt-5 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg"
                        >
                            Delivering reliable electronics, IT systems, surveillance, power
                            solutions, office infrastructure, and institutional support for
                            government, education, healthcare, railways, and enterprise sectors.
                        </motion.p>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="mt-6 flex flex-col justify-center gap-4 sm:mt-8 sm:flex-row"
                        >
                            <Button className="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white shadow-lg hover:bg-blue-600 sm:px-6 sm:py-3 sm:text-base">
                                Explore Products
                            </Button>
                            <Button
                                variant="outline"
                                className="rounded-lg border-white bg-white/10 px-4 py-2 text-sm text-white shadow-lg hover:bg-white/20 sm:px-6 sm:py-3 sm:text-base"
                            >
                                Contact Us
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={fadeUp.initial}
                            animate={fadeUp.animate}
                            transition={{ duration: 0.8, delay: 0.55 }}
                            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
                        >
                            {stats.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-sm"
                                >
                                    <h3 className="text-lg font-bold sm:text-xl">{item.value}</h3>
                                    <p className="mt-1 text-xs text-gray-200 sm:text-sm">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.35 }}
                        className="hidden lg:block"
                    >
                        <div className="grid grid-cols-2 gap-5">
                            {products.slice(0, 4).map((item) => (
                                <div
                                    key={item.name}
                                    className="group relative h-52 overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-sm"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        decoding="async"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-4">
                                        <h3 className="text-base font-semibold text-white">
                                            {item.name}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

const MovingStrip = memo(function MovingStrip({ items }) {
    return (
        <section className="overflow-hidden border-y bg-slate-950 py-3">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="flex w-max items-center gap-8 whitespace-nowrap px-4 text-sm font-medium text-white/90"
            >
                {items.map((item, index) => (
                    <span key={`${item}-${index}`} className="flex items-center gap-3">
                        <span className="text-blue-400">●</span>
                        {item}
                    </span>
                ))}
            </motion.div>
        </section>
    );
});

const ClientRowCard = memo(function ClientRowCard({ item, softBg = false }) {
    return (
        <div
            className={`flex min-w-[190px] items-center gap-4 rounded-2xl border border-gray-200 px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:min-w-[220px] ${softBg ? "bg-slate-50" : "bg-white"
                }`}
        >
            <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl p-2 ${softBg ? "bg-white" : "bg-gray-50"
                    }`}
            >
                <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="max-h-10 max-w-full object-contain"
                />
            </div>
            <p className="text-sm font-semibold text-gray-800 sm:text-base">{item.title}</p>
        </div>
    );
});

const ClientsSection = memo(function ClientsSection({ duplicatedClients }) {
    return (
        <section className="bg-white py-12 sm:py-16">
            <div className="mx-auto mb-8 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold sm:text-4xl">
                    Trusted By Leading Organizations
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base md:text-lg">
                    We proudly support respected institutions across defence, healthcare,
                    public sector, railways, energy, banking, and enterprise ecosystems.
                </p>
            </div>

            <div className="space-y-6 overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                    className="flex w-max gap-5 px-4"
                >
                    {duplicatedClients.map((item, index) => (
                        <ClientRowCard key={`${item.title}-row1-${index}`} item={item} />
                    ))}
                </motion.div>

                <motion.div
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="flex w-max gap-5 px-4"
                >
                    {duplicatedClients.map((item, index) => (
                        <ClientRowCard
                            key={`${item.title}-row2-${index}`}
                            item={item}
                            softBg
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
});

const ProductCard = memo(function ProductCard({ item }) {
    return (
        <div className="group relative h-[260px] min-w-[290px] overflow-hidden rounded-3xl shadow-xl sm:min-w-[360px]">
            <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/90">{item.desc}</p>
            </div>
        </div>
    );
});

const FeaturedSolutionsSection = memo(function FeaturedSolutionsSection({
    duplicatedProducts,
}) {
    return (
        <section className="overflow-hidden bg-gray-50 py-12 sm:py-16">
            <div className="mx-auto mb-8 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Featured Solutions
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base md:text-lg">
                    Explore our core technology and infrastructure offerings designed for
                    modern organizations and institutions.
                </p>
            </div>

            <div className="overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                    className="flex w-max gap-6 px-4"
                >
                    {duplicatedProducts.map((item, index) => (
                        <ProductCard key={`${item.name}-${index}`} item={item} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
});

const AboutSection = memo(function AboutSection() {
    return (
        <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold sm:text-4xl"
                >
                    About Us
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-5 text-sm leading-7 text-gray-600 sm:text-base md:text-lg"
                >
                    Digitalt Sixth Sense Pvt. Ltd. is a technology-driven company delivering
                    reliable electronics, IT systems, surveillance, office infrastructure,
                    and project-based solutions for institutions, industries, and enterprise
                    clients across India.
                </motion.p>
            </div>
        </section>
    );
});

const HighlightsSection = memo(function HighlightsSection({ highlights }) {
    return (
        <section className="px-4 py-6 sm:px-6 sm:py-10 md:px-8">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {highlights.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
});

const WhyChooseUsSection = memo(function WhyChooseUsSection({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const descriptions = [
        "We deliver dependable products and solutions with a strong focus on long-term performance and quality assurance.",
        "Our team supports institutional and project-based requirements with structured execution and practical delivery.",
        "We understand the expectations of government, enterprise, and large-scale organizations with a professional approach.",
        "Our solutions are designed to stay relevant, scalable, and aligned with future business and technology needs.",
    ];

    return (
        <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8">
            <div className="mx-auto max-w-5xl text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Us</h2>
                <p className="mt-4 text-sm text-gray-600 sm:text-base md:text-lg">
                    Our work is built on reliability, innovation, precision, and integrity,
                    with a focus on long-term client value.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {items.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => setActiveIndex(index)}
                                className={`cursor-pointer rounded-3xl border p-6 text-left shadow-sm transition duration-300 ${isActive
                                        ? "border-blue-500 bg-blue-50/60 shadow-lg"
                                        : "border-gray-200 bg-white hover:-translate-y-1 hover:shadow-lg"
                                    }`}
                            >
                                <div className="flex items-start gap-3">
                                    <span
                                        className={`mt-1 flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold transition ${isActive
                                                ? "bg-blue-600 text-white"
                                                : "bg-blue-100 text-blue-600"
                                            }`}
                                    >
                                        ✓
                                    </span>

                                    <div className="w-full">
                                        <p className="text-sm leading-7 font-medium text-gray-800 sm:text-base">
                                            {item}
                                        </p>

                                        <AnimatePresence initial={false}>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                    animate={{
                                                        opacity: 1,
                                                        height: "auto",
                                                        marginTop: 12,
                                                    }}
                                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-sm leading-6 text-gray-600">
                                                        {descriptions[index]}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
});


const CertificationsPresenceSection = memo(function CertificationsPresenceSection({
    certifications,
    locations,
}) {
    return (
        <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 md:px-8">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                        Recognition & Certifications
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                        Our profile reflects alignment with national initiatives and
                        institutional credibility.
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {certifications.map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-gray-200 bg-gray-50 p-4 font-medium text-gray-700"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                    <h2 className="text-2xl font-bold sm:text-3xl">Pan-India Presence</h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                        With offices and operational presence across multiple cities, we
                        support organizations with dependable product delivery and service
                        coordination across India.
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {locations.map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-gray-200 bg-gray-50 p-4 font-medium text-gray-700"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

const MemoIndustriesSection = memo(IndustriesSection);
const MemoContactCard = memo(ContactCard);

const CtaSection = memo(function CtaSection() {
    return (
        <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-12">
                <div className="flex flex-col justify-center">
                    <div className="mb-5 w-full overflow-hidden rounded-3xl bg-white shadow-md">
                        <img
                            src={contactUsHome}
                            alt="Contact Us"
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                            className="h-64 w-full object-cover sm:h-72 md:h-80"
                        />
                    </div>

                    <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Ready to Transform Your Business?
                    </h2>

                    <p className="max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                        Get in touch with us for modern IT and electronic solutions. We help
                        businesses, institutions, and public-sector organizations grow with
                        reliable products, tailored support, and practical technology
                        deployment.
                    </p>
                </div>

                <MemoContactCard />
            </div>
        </section>
    );
});

const Home = () => {
    const duplicatedClients = useMemo(() => [...CLIENTS, ...CLIENTS], []);
    const duplicatedProducts = useMemo(() => [...PRODUCTS, ...PRODUCTS], []);

    return (
        <div className="overflow-hidden bg-white text-gray-900">
            <HeroSection products={PRODUCTS} stats={STATS} />
            <MovingStrip items={STRIP_ITEMS} />
            <ClientsSection duplicatedClients={duplicatedClients} />
            <FeaturedSolutionsSection duplicatedProducts={duplicatedProducts} />
            <AboutSection />
            <HighlightsSection highlights={HIGHLIGHTS} />
            <MemoIndustriesSection industries={INDUSTRIES} />
            <WhyChooseUsSection items={WHY_CHOOSE_US} />
            <CertificationsPresenceSection
                certifications={CERTIFICATIONS}
                locations={PRESENCE_LOCATIONS}
            />
            <CtaSection />
        </div>
    );
};

export default Home;

