import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, PenTool, Briefcase, Palette } from "lucide-react";

import StationaryImg from "../../assets/StationaryImg.jpg";
import PaperStationary1 from "../../assets/PaperStationary1.jpg";
import PaperStationary2 from "../../assets/PaperStationary2.jpg";
import PaperStationary3 from "../../assets/PaperStationary3.jpg";

const categoryList = [
    {
        name: "Notebooks",
        desc: "Premium notebooks for school, office, and daily writing needs.",
        icon: BookOpen,
    },
    {
        name: "Pens & Pencils",
        desc: "Smooth writing tools for students, professionals, and artists.",
        icon: PenTool,
    },
    {
        name: "Office Supplies",
        desc: "Essential desk and office items for productivity and organization.",
        icon: Briefcase,
    },
    {
        name: "Art Materials",
        desc: "Creative tools and supplies for drawing, sketching, and design.",
        icon: Palette,
    },
];

const featuredItems = [
    {
        id: "paper-stationery-1",
        title: "Notebook Collection",
        image: PaperStationary1,
        desc: "Durable and stylish notebooks designed for everyday writing and study.",
        tag: "Study Essential",
    },
    {
        id: "paper-stationery-2",
        title: "Writing Essentials",
        image: PaperStationary2,
        desc: "Quality pens, pencils, and stationery items for smooth daily use.",
        tag: "Daily Use",
    },
    {
        id: "paper-stationery-3",
        title: "Office & Art Supplies",
        image: PaperStationary3,
        desc: "A smart selection of office and creative essentials for every workspace.",
        tag: "Creative Setup",
    },
];

function PaperStationary() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-green-50/30 text-gray-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="relative h-[62vh] md:h-[78vh] w-full">
                    <img
                        src={StationaryImg}
                        alt="Paper & Stationery"
                        className="w-full h-full object-cover" 
                        loading="eager"
                        fetchPriority="high"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_30%)]" />

                    <div className="absolute inset-0 flex items-center">
                        <div className="mx-auto w-full max-w-7xl px-6 md:px-16">
                            <div className="max-w-3xl text-white">
                                <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                                    Office & School Essentials
                                </div>

                                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                    Paper & Stationery
                                    <span className="block text-green-300">Made Simple & Premium</span>
                                </h1>

                                <p className="mt-5 max-w-2xl text-sm md:text-lg leading-7 text-gray-200">
                                    Discover high-quality stationery, notebooks, writing tools,
                                    and office essentials designed to support learning,
                                    creativity, and everyday productivity.
                                </p>

                                <div className="mt-8">
                                    <button
                                        onClick={() => navigate("/products")}
                                        className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-900/20 transition hover:bg-green-700"
                                    >
                                        Explore Collection
                                        <ArrowRight size={16} />
                                    </button>
                                </div>

                                <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-200">
                                    <span>School Ready</span>
                                    <span>Office Essentials</span>
                                    <span>Creative Supplies</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 mb-4">
                            Categories
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Everything you need in one place
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7">
                            Explore carefully selected stationery categories for schools,
                            offices, creative work, and everyday organization.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categoryList.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.name}
                                    className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                                        <Icon size={20} />
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {item.name}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-gray-600">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="bg-white py-16 px-6 md:px-16 border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 mb-4">
                            Featured Items
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Popular stationery picks
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7">
                            Browse featured paper and stationery products crafted for quality,
                            usability, and a better everyday experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {featuredItems.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => navigate("/products")}
                                className="group cursor-pointer overflow-hidden rounded-[28px] border border-gray-200 bg-slate-50 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        decoding="async"
                                        className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                                        {item.tag}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 transition group-hover:text-green-700">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-gray-600">
                                        {item.desc}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-500">
                                            Premium Selection
                                        </span>
                                        <span className="text-sm font-semibold text-green-700 opacity-0 transition group-hover:opacity-100">
                                            View Details →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Info Section */}
            <section className="py-16 px-6 md:px-16">
                <div className="max-w-7xl mx-auto rounded-[32px] border border-green-100 bg-gradient-to-r from-green-50 via-white to-slate-50 p-8 md:p-10 shadow-sm">
                    <div className="max-w-3xl">
                        <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-green-700 border border-green-100">
                            Why choose our stationery
                        </div>

                        <h3 className="mt-5 text-2xl md:text-3xl font-bold text-gray-900">
                            Clean quality, daily comfort, better usability
                        </h3>

                        <p className="mt-4 text-sm md:text-base leading-7 text-gray-600">
                            From study materials to office and creative supplies, our
                            stationery collection is designed to keep everyday work simple,
                            organized, and visually refined.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PaperStationary;