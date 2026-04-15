import React, { useEffect, useState } from "react";

const cardData = {
    Government: {
        frontDesc:
            "Technology and infrastructure solutions tailored for public sector operations and governance.",
        backDesc:
            "We support government bodies with scalable procurement, IT infrastructure, and project execution aligned with policy and compliance.",
    },
    Defence: {
        frontDesc:
            "Secure and reliable solutions built for defence and strategic operations.",
        backDesc:
            "We deliver mission-critical technology, surveillance, and infrastructure support for defence sector requirements.",
    },
    Healthcare: {
        frontDesc:
            "Advanced systems designed to enhance healthcare delivery and infrastructure.",
        backDesc:
            "We provide medical IT systems, monitoring solutions, and infrastructure support for hospitals and healthcare institutions.",
    },
    Education: {
        frontDesc:
            "Digital and physical infrastructure to empower modern learning environments.",
        backDesc:
            "We support schools, colleges, and institutions with smart classrooms, IT systems, and learning solutions.",
    },
    Railways: {
        frontDesc:
            "Reliable infrastructure and technology solutions for transportation systems.",
        backDesc:
            "We provide systems and support for railway operations, safety infrastructure, and modernization projects.",
    },
    Corporate: {
        frontDesc:
            "Enterprise-grade solutions for business productivity and scalability.",
        backDesc:
            "We deliver IT systems, office infrastructure, and scalable solutions for corporate environments.",
    },
    Research: {
        frontDesc:
            "Precision-focused solutions for research and innovation ecosystems.",
        backDesc:
            "We support R&D organizations with specialized equipment, IT systems, and infrastructure solutions.",
    },
    "Public Sector": {
        frontDesc:
            "Robust and scalable systems for public sector operations and services.",
        backDesc:
            "We provide infrastructure, procurement, and technology solutions for public sector enterprises.",
    },
};

const FlipCard = ({ item, index, activeIndex, setActiveIndex }) => {
    const isFlipped = activeIndex === index;

    const handleClick = () => {
        if (window.innerWidth < 768) {
            setActiveIndex(isFlipped ? null : index);
        }
    };

    const data = cardData[item];

    return (
        <div className="group w-full [perspective:1400px]" onClick={handleClick}>
            <div
                className={`relative w-full rounded-[28px] transition-transform duration-700 [transform-style:preserve-3d]
                h-[320px] sm:h-[360px] md:h-[400px] lg:h-[420px] xl:h-[440px]
                ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
                md:group-hover:[transform:rotateY(180deg)]`}
            >
                {/* FRONT */}
                <div className="absolute inset-0 rounded-[28px] border border-slate-200 bg-gradient-to-b
                     from-white to-slate-50 p-6 shadow-sm [backface-visibility:hidden]">
                    <div className="flex h-full flex-col justify-between">
                        <div>
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl
                                 border border-slate-200 bg-white shadow-sm">
                                <div className="h-6 w-6 rounded-md bg-slate-800" />
                            </div>

                            <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                                {item}
                            </h3>

                            <p className="mt-4 text-lg text-slate-600">
                                {data?.frontDesc}
                            </p>
                        </div>

                        <div className="border-t border-slate-200 pt-5">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                <span className="md:hidden">Tap to explore</span>
                                <span className="hidden md:inline">Hover to explore</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rounded-[28px] bg-slate-900 p-6 text-white
                     shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex h-full flex-col justify-between">
                        <div>
                            <span className="inline-flex rounded-full border border-white/15
                                 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em]">
                                {item}
                            </span>

                            <h3 className="mt-6 text-2xl font-semibold">
                                Tailored Business Support
                            </h3>

                            <p className="mt-4 text-lg text-slate-300">
                                {data?.backDesc}
                            </p>
                        </div>

                        <div className="border-t border-white/10 pt-5">
                            <p className="text-sm font-medium">
                                Reliable • Scalable • Sector-ready
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const IndustriesSection = ({ industries }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setActiveIndex(null);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-full mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold">Industries We Serve</h2>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {industries.map((item, index) => (
                        <FlipCard
                            key={item}
                            item={item}
                            index={index}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;