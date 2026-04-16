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
            desc: "Durable solar panel designed for higher energy output and long-term outdoor performance.",
            img: HighEfficiencyPanel,
        },
        {
            title: "Solar Inverter",
            desc: "Smart solar inverter for stable and efficient energy conversion in residential and commercial setups.",
            img: SolarInverter,
        },
        {
            title: "Solar Battery",
            desc: "Reliable solar battery backup solution built for dependable storage and longer energy support.",
            img: SolarBattery,
        },
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="relative h-[72vh] min-h-[520px] w-full">
                    <img
                        src={SolarImg}
                        alt="Solar Products"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.78)_0%,rgba(3,7,18,0.58)_38%,rgba(3,7,18,0.18)_100%)]" />

                    <div className="relative z-10 flex h-full items-center">
                        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
                            <div className="max-w-3xl">
                                <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.18em] text-white/90 backdrop-blur-sm uppercase">
                                    Clean & Renewable Energy
                                </div>

                                <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                                    Smart Solar Solutions for Modern Energy Needs
                                </h1>

                                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base md:text-lg">
                                    Power your home and business with efficient, eco-friendly solar
                                    systems built for long-term performance, energy savings, and
                                    dependable backup.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <Button
                                        onClick={() => navigate("/products")}
                                        className="h-12 rounded-full bg-green-600 px-7 text-white shadow-lg shadow-green-700/20 transition-all duration-300 hover:bg-green-700"
                                    >
                                        Explore Products
                                    </Button>

                                    <Button
                                        variant="outline"
                                        onClick={() => navigate("/products")}
                                        className="h-12 rounded-full border-white/30 bg-white/10 px-7 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900"
                                    >
                                        Browse Collection
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
                    <div className="mx-auto mb-10 max-w-3xl text-center">
                        <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                            Solar Categories
                        </span>

                        <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Explore by Category
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600">
                            Discover solar products designed for energy efficiency, reliable backup,
                            and sustainable everyday performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                        {categories.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => navigate("/products")}
                                className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-md"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="bg-slate-50 py-16 md:py-20">
                <div className="mx-auto max-w-full px-6 md:px-10 lg:px-16">
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                            Featured Products
                        </span>

                        <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Popular Solar Picks
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600">
                            Browse our featured solar products built for reliable performance,
                            cleaner energy, and long-term value.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {products.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => navigate("/products")}
                                className="group cursor-pointer overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80" />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {item.desc}
                                    </p>

                                    <Button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate("/products");
                                        }}
                                        className="mt-6 h-11 w-full rounded-full bg-green-600 text-white transition-all duration-300 hover:bg-green-700"
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
            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                            Why Solar
                        </span>

                        <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Why Choose Solar Energy
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600">
                            Solar solutions help reduce bills, support a cleaner environment, and
                            provide dependable energy for modern homes and businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {[
                            {
                                title: "Eco Friendly",
                                desc: "Reduce carbon footprint and support a cleaner and more sustainable environment.",
                            },
                            {
                                title: "Cost Saving",
                                desc: "Lower electricity bills through efficient and renewable solar energy usage.",
                            },
                            {
                                title: "Reliable Power",
                                desc: "Enjoy stable and long-lasting power support for daily residential and business needs.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="mb-4 h-12 w-12 rounded-2xl bg-green-50 ring-1 ring-green-100" />
                                <h3 className="text-xl font-semibold text-slate-900">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600">
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

export default Solar;