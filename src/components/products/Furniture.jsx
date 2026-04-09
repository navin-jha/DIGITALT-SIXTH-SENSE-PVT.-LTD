import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import FurnitureImg from "../../assets/FurnitureImg.jpg";
import ModernSofa from "../../assets/ModernSofa.jpg";
import WoodenChair from "../../assets/WoodenChair.jpg";
import LuxuryBed from "../../assets/LuxuryBed.jpg";

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
            title: "Modern Sofa",
            desc: "Comfortable and stylish sofa for your living room.",
            img: ModernSofa,
        },
        {
            title: "Wooden Chair",
            desc: "Premium wooden chair with elegant finishing.",
            img: WoodenChair,
        },
        {
            title: "Luxury Bed",
            desc: "Beautiful bed design for a modern bedroom.",
            img: LuxuryBed,
        },
    ];

    return (
        <div className="min-h-screen bg-stone-50 text-gray-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="relative w-full h-[60vh] md:h-[72vh]">
                    <img
                        src={FurnitureImg}
                        alt="Furniture"
                        className="w-full h-full object-cover"
                        fetchPriority="high"
                        decoding="async"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

                    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                        <div className="max-w-3xl">
                            <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                                Premium Home & Office Furniture
                            </div>

                            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-5">
                                Elegant Furniture Collection
                            </h1>

                            <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-7">
                                Upgrade your home and office with premium-quality furniture
                                crafted for comfort, durability, and timeless style.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Button
                                    onClick={() => navigate("/products")}
                                    className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-xl shadow-lg"
                                >
                                    Explore Collection
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={() => navigate("/products")}
                                    className="border-white text-white bg-white/10 hover:bg-white/20 rounded-xl px-6 py-3"
                                >
                                    Browse Products
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
                        <div className="inline-flex rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 mb-4">
                            Categories
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Shop by Category
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                            Discover furniture collections designed for comfort, elegance,
                            and everyday living.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                        {categories.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => navigate("/products")}
                                className="cursor-pointer rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <h3 className="text-gray-800 font-semibold">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-14 px-6 md:px-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-700 mb-4">
                            Featured Furniture
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Popular Furniture Picks
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                            Browse our featured furniture pieces crafted to bring comfort,
                            style, and functionality to your space.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => navigate("/products")}
                                className="group cursor-pointer overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-5">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm mb-4 leading-6">
                                        {item.desc}
                                    </p>

                                    <Button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate("/products");
                                        }}
                                        className="w-full bg-amber-700 hover:bg-amber-800 text-white rounded-xl"
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-14 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 mb-4">
                            Why Choose Us
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Choose Our Furniture
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                            We combine premium materials, elegant design, and affordability
                            to deliver furniture you can trust.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-3xl bg-white p-6 shadow-sm border border-stone-200 text-center hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                Premium Quality
                            </h3>
                            <p className="text-gray-500 text-sm leading-6">
                                Durable materials and stylish craftsmanship for long-lasting use.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-6 shadow-sm border border-stone-200 text-center hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                Modern Designs
                            </h3>
                            <p className="text-gray-500 text-sm leading-6">
                                Elegant furniture pieces that fit both classic and modern spaces.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-6 shadow-sm border border-stone-200 text-center hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                Affordable Prices
                            </h3>
                            <p className="text-gray-500 text-sm leading-6">
                                Get luxurious looks at prices that suit your budget.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Furniture;