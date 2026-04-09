import React from "react";
import FurnitureImg from "../../assets/furnitureImg.jpg";
import { Button } from "@/components/ui/button";
import { img } from "framer-motion/client";


import ModernSofa from "../../assets/modernSofa.jpg";
import WoodenChair from "../../assets/woodenChair.jpg";
import LuxuryBed from "../../assets/luxuryBed.jpg";

function Furniture() {
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
        <div className="bg-stone-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative w-full h-[65vh] overflow-hidden">
                <img
                    src={FurnitureImg}
                    alt="Furniture"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                            Elegant Furniture Collection
                        </h1>
                        <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto mb-6">
                            Upgrade your home and office with modern, premium-quality
                            furniture crafted for comfort and style.
                        </p>
                        <Button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-xl shadow-lg">
                            Explore Collection
                        </Button>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="py-14 px-6 md:px-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Shop by Category
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center cursor-pointer border border-stone-100"
                        >
                            <h3 className="text-gray-700 font-semibold">{item}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Products */}
            <div className="py-14 px-6 md:px-16 bg-white">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Featured Furniture
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="bg-stone-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4">{item.desc}</p>

                                <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white rounded-xl">
                                    View Details
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="py-14 px-6 md:px-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Why Choose Our Furniture
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            Premium Quality
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Durable materials and stylish craftsmanship for long-lasting use.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            Modern Designs
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Elegant furniture pieces that fit both classic and modern spaces.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            Affordable Prices
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Get luxurious looks at prices that suit your budget.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Furniture;