import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import SolarImg from "../../assets/SolarImg.jpg";
import HighEfficiencyPanel from "../../assets/HighEfficiencyPanel.jpg";
import SolarInverter from "../../assets/SolarInverter.jpg";
import SolarBattery from "../../assets/SolarBattery.jpg";

function Solar() {
    const navigate = useNavigate();

    const categories = [
        "Solar Panels",
        "Inverters",
        "Batteries",
        "Solar Lights",
        "Water Heaters",
        "Accessories",
    ];

    const products = [
        {
            title: "High Efficiency Panel",
            desc: "Durable solar panel with maximum energy output.",
            img: HighEfficiencyPanel,
        },
        {
            title: "Solar Inverter",
            desc: "Smart inverter for efficient energy conversion.",
            img: SolarInverter,
        },
        {
            title: "Solar Battery",
            desc: "Reliable battery for long-lasting backup.",
            img: SolarBattery,
        },
    ];

    return (
        <div className="min-h-screen bg-green-50 text-gray-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="relative w-full h-[60vh] md:h-[72vh]">
                    <img
                        src={SolarImg}
                        alt="Solar Products"
                        className="w-full h-full object-cover"
                        fetchPriority="high"
                        decoding="async"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

                    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                        <div className="max-w-3xl">
                            <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                                Clean & Renewable Energy Solutions
                            </div>

                            <h1 className="text-white text-4xl md:text-6xl font-bold mb-5 leading-tight">
                                Clean & Renewable Energy
                            </h1>

                            <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-base md:text-lg leading-7">
                                Power your home and business with efficient, eco-friendly solar
                                solutions built for long-term performance and savings.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Button
                                    onClick={() => navigate("/products")}
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg"
                                >
                                    Explore Solar Products
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={() => navigate("/products")}
                                    className="border-white text-white bg-white/10 hover:bg-white/20 rounded-xl px-6 py-3"
                                >
                                    Browse Collection
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-14 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 mb-4">
                            Solar Categories
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Explore by Category
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                            Discover solar products designed for energy efficiency, reliable
                            backup, and sustainable living.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                        {categories.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => navigate("/products")}
                                className="cursor-pointer rounded-2xl border border-green-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <h3 className="font-semibold text-gray-700">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-14 px-6 md:px-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 mb-4">
                            Featured Solar Products
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Popular Solar Picks
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                            Browse our featured solar products crafted for reliable
                            performance, energy savings, and long-term value.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => navigate("/products")}
                                className="group cursor-pointer overflow-hidden rounded-3xl border border-green-100 bg-green-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
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
                                        className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl"
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Solar */}
            <section className="py-14 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 mb-4">
                            Why Solar
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Choose Solar Energy
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                            Solar solutions help you save money, reduce environmental impact,
                            and enjoy dependable energy for everyday use.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-3xl bg-white p-6 shadow-sm border border-green-100 text-center hover:shadow-lg transition">
                            <h3 className="font-semibold text-lg mb-2 text-gray-800">
                                Eco Friendly
                            </h3>
                            <p className="text-gray-500 text-sm leading-6">
                                Reduce carbon footprint and support a cleaner environment.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-6 shadow-sm border border-green-100 text-center hover:shadow-lg transition">
                            <h3 className="font-semibold text-lg mb-2 text-gray-800">
                                Cost Saving
                            </h3>
                            <p className="text-gray-500 text-sm leading-6">
                                Lower electricity bills with smart and renewable energy use.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-6 shadow-sm border border-green-100 text-center hover:shadow-lg transition">
                            <h3 className="font-semibold text-lg mb-2 text-gray-800">
                                Reliable Power
                            </h3>
                            <p className="text-gray-500 text-sm leading-6">
                                Enjoy consistent and long-lasting energy solutions for your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Solar;