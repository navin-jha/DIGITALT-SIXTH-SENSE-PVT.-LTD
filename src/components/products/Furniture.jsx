import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sofa, LampFloor, ShieldCheck, BadgeDollarSign } from "lucide-react";

import FurnitureImg from "../../assets/FurnitureImg.jpg";
import OfficeChare from "../../assets/OfficeChare.jpg";
import WoodenChair from "../../assets/WoodenChair.jpg";
import officeMetting from "../../assets/officeMetting.jpg";

function Furniture() {
    const navigate = useNavigate();

    const categories = [
        "Sofas",
        "Chairs",
        "Tables",
        "Beds",
        "Office Furniture",
        "Home Decor",
    ];

    const products = [
        {
            id: 1,
            title: "office chair",
            desc: "Comfortable and stylish office chair for your workspace with a refined modern look.",
            img: OfficeChare,
            tag: "Office Furniture",
        },
        {
            id: 2,
            title: "Wooden Chair",
            desc: "Premium wooden chair with elegant finishing crafted for comfort and everyday use.",
            img: WoodenChair,
            tag: "Classic Seating",
        },
        {
            id: 3,
            title: "Office Meeting sofa",
            desc: "Stylish and functional meeting sofa designed for collaborative workspaces.",
            img: officeMetting,
            tag: "Office sofa",
        },
    ];

    const features = [
        {
            icon: <ShieldCheck size={20} />,
            title: "Premium Quality",
            desc: "Durable materials and refined craftsmanship made for long-lasting everyday use.",
        },
        {
            icon: <LampFloor size={20} />,
            title: "Timeless Design",
            desc: "Elegant furniture pieces that blend beautifully with both modern and classic interiors.",
        },
        {
            icon: <BadgeDollarSign size={20} />,
            title: "Value for Money",
            desc: "Luxury-inspired designs with practical pricing for homes, offices, and workspaces.",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-[#f7f3ee] text-gray-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="relative h-[68vh] md:h-[82vh] w-full">
                    <img
                        src={FurnitureImg}
                        alt="Furniture"
                        className="h-full w-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.15),transparent_30%)]" />

                    <div className="absolute inset-0 flex items-center">
                        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
                            <div className="max-w-3xl text-white">
                                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
                                    <Sofa size={16} />
                                    Premium Home & Office Furniture
                                </div>

                                <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
                                    Elegant Furniture
                                    <span className="block text-amber-300">For Modern Spaces</span>
                                </h1>

                                <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
                                    Upgrade your home and office with thoughtfully designed furniture
                                    crafted for comfort, durability, and timeless visual appeal.
                                </p>

                                <div className="mt-8">
                                    <button
                                        onClick={() => navigate("/products")}
                                        className="inline-flex items-center gap-2 rounded-2xl bg-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-900/20 transition hover:bg-amber-800"
                                    >
                                        Explore Collection
                                        <ArrowRight size={16} />
                                    </button>
                                </div>

                                <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-200">
                                    <span>Premium Finish</span>
                                    <span>Comfort Focused</span>
                                    <span>Modern & Timeless</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="px-6 py-16 md:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center">
                        <div className="mb-4 inline-flex rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
                            Categories
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Shop by Category
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                            Discover curated furniture collections designed to bring warmth,
                            style, and functionality into every room.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
                        {categories.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-stone-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <h3 className="font-semibold text-gray-800">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="bg-white px-6 py-16 md:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center">
                        <div className="mb-4 inline-flex rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-700">
                            Featured Furniture
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Popular Furniture Picks
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                            Browse selected furniture pieces crafted to bring comfort, style,
                            and balance to your living and work spaces.
                        </p>
                    </div>

                    <div className="grid m-w-full grid-cols-1 gap-8 md:grid-cols-3">
                        {products.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => navigate(`/product/${item.id}`)}
                                className="group cursor-pointer overflow-hidden rounded-[28px] border border-stone-200 bg-[#fcfaf7] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-700 shadow-sm">
                                        {item.tag}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="mb-2 text-xl font-semibold text-gray-800 transition group-hover:text-amber-700">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm leading-6 text-gray-500">
                                        {item.desc}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between">
                                        <span className="text-sm font-medium text-stone-500">
                                            Premium Collection
                                        </span>

                                        <span className="text-sm font-semibold text-amber-700 opacity-0 transition group-hover:opacity-100">
                                            View Details →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="px-6 py-16 md:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center">
                        <div className="mb-4 inline-flex rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
                            Why Choose Us
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Built for Comfort and Style
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                            We combine elegant aesthetics, dependable materials, and practical
                            value to create furniture that feels premium in every setting.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition hover:shadow-lg"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                                    {item.icon}
                                </div>

                                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-6 text-gray-500">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Furniture;