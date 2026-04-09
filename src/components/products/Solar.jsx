import React from "react";
import SolarImg from "../../assets/solarImg.jpg";
import { Button } from "@/components/ui/button";
import { img } from "framer-motion/client";


import HighEfficiencyPanel from "../../assets/highEfficiencyPanel.jpg";
import SolarInverter from "../../assets/solarInverter.jpg";
import SolarBattery from "../../assets/solarBattery.jpg";

function Solar() {
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
        <div className="bg-green-50 min-h-screen">

            {/* ☀️ Hero Section */}
            <div className="relative w-full h-[65vh] overflow-hidden">
                <img
                    src={SolarImg}
                    alt="Solar Products"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                            Clean & Renewable Energy
                        </h1>
                        <p className="text-gray-200 max-w-xl mx-auto mb-6">
                            Power your home and business with eco-friendly solar solutions.
                        </p>

                        <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl shadow-lg">
                            Explore Solar Products
                        </Button>
                    </div>
                </div>
            </div>

            {/* 🌿 Categories */}
            <div className="py-14 px-6 md:px-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Solar Categories
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition cursor-pointer"
                        >
                            <h3 className="font-semibold text-gray-700">{item}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🔋 Featured Products */}
            <div className="py-14 px-6 md:px-16 bg-white">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Featured Solar Products
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="bg-green-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition"
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

                                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl">
                                    View Details
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ⚡ Why Solar */}
            <div className="py-14 px-6 md:px-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Why Choose Solar Energy
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <h3 className="font-semibold text-lg mb-2">Eco Friendly</h3>
                        <p className="text-gray-500 text-sm">
                            Reduce carbon footprint and help the environment.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <h3 className="font-semibold text-lg mb-2">Cost Saving</h3>
                        <p className="text-gray-500 text-sm">
                            Save electricity bills with renewable energy.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <h3 className="font-semibold text-lg mb-2">Reliable Power</h3>
                        <p className="text-gray-500 text-sm">
                            Consistent and long-lasting energy solutions.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Solar;