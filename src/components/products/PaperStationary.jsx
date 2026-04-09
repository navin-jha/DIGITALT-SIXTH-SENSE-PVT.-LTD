import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import StationaryImg from "/src/assets/stationaryImg.jpg";
import PaperStationary1 from "/src/assets/paperStationary1.jpg";
import PaperStationary2 from "/src/assets/paperStationary2.jpg";
import PaperStationary3 from "/src/assets/paperStationary3.jpg";

const categoryList = [
    {
        name: "Notebooks",
        desc: "Premium notebooks for school, office, and daily writing needs.",
    },
    {
        name: "Pens & Pencils",
        desc: "Smooth writing tools for students, professionals, and artists.",
    },
    {
        name: "Office Supplies",
        desc: "Essential desk and office items for productivity and organization.",
    },
    {
        name: "Art Materials",
        desc: "Creative tools and supplies for drawing, sketching, and design.",
    },
];

const featuredItems = [
    {
        id: "paper-stationery-1",
        title: "Notebook Collection",
        image: PaperStationary1,
        desc: "Durable and stylish notebooks designed for everyday writing and study.",
    },
    {
        id: "paper-stationery-2",
        title: "Writing Essentials",
        image: PaperStationary2,
        desc: "Quality pens, pencils, and stationery items for smooth daily use.",
    },
    {
        id: "paper-stationery-3",
        title: "Office & Art Supplies",
        image: PaperStationary3,
        desc: "A smart selection of office and creative essentials for every workspace.",
    },
];

function PaperStationary() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 text-gray-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="relative h-[58vh] md:h-[70vh] w-full">
                    <img
                        src={StationaryImg}
                        alt="Paper & Stationery"
                        className="w-full h-full object-cover"
                        fetchPriority="high"
                        decoding="async"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

                    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                        <div className="max-w-3xl">
                            <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                                Office & School Essentials
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                Paper & Stationery
                            </h1>

                            <p className="mt-5 max-w-2xl mx-auto text-sm md:text-lg leading-7 text-gray-200">
                                Discover high-quality stationery, notebooks, writing tools, and
                                office essentials designed to support learning, creativity, and
                                productivity.
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <Button
                                    onClick={() => navigate("/products")}
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg"
                                >
                                    Shop Now
                                </Button>

                                <Button
                                    onClick={() => navigate("/products")}
                                    variant="outline"
                                    className="border-white text-white bg-white/10 hover:bg-white/20 rounded-xl px-6 py-3"
                                >
                                    Explore Collection
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-14 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 mb-4">
                            Categories
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Everything you need in one place
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                            Explore carefully selected stationery categories for schools,
                            offices, creative work, and everyday organization.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categoryList.map((item) => (
                            <div
                                key={item.name}
                                onClick={() => navigate("/products")}
                                className="cursor-pointer rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {item.name}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {item.desc}
                                </p>
                                <Button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate("/products");
                                    }}
                                    className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white rounded-xl"
                                >
                                    Explore
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="bg-white py-14 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 mb-4">
                            Featured Items
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Popular stationery picks
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                            Browse featured paper and stationery products crafted for quality,
                            usability, and a better everyday experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featuredItems.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => navigate("/products")}
                                className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-slate-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        decoding="async"
                                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-5">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                        {item.desc}
                                    </p>

                                    <Button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate("/products");
                                        }}
                                        className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white rounded-xl"
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PaperStationary;