import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Laptop, MonitorSmartphone, Tv, Cpu, ArrowRight, Sparkles } from "lucide-react";

import ElectronicImg from "../../assets/ElectronicImg.jpg";
import LatestElectronics3 from "../../assets/LatestElectronics2.jpg";
import LatestElectronics4 from "../../assets/LatestElectronics3.jpg";
import LatestElectronics2 from "../../assets/LatestElectronics1.jpg";

import laptops from "../../assets/laptops.jpg";
import SmartTvs from "../../assets/SmartTvs.jpg";

const categories = [
  {
    name: "Laptops",
    img: laptops,
    desc: "High-performance laptops for work, study, and gaming.",
    icon: Laptop,
  },
  {
    name: "Smart TVs",
    img: SmartTvs,
    desc: "Enjoy stunning visuals and smart entertainment features.",
    icon: Tv,
  },
  {
    name: "Desktops",
    img: LatestElectronics2,
    desc: "Reliable desktop systems for office and personal use.",
    icon: Cpu,
  },
  {
    name: "Electronics",
    img: ElectronicImg,
    desc: "Explore a wide range of quality electronic products.",
    icon: MonitorSmartphone,
  },
];

function Electronic() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-[72vh] md:h-[85vh] w-full">
          <img
            src={ElectronicImg}
            alt="Electronic Products"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_30%)]" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <div className="max-w-3xl text-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-sm mb-6">
                  <Sparkles size={16} />
                  Latest Innovation in Electronics
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                  Discover the Future of
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Smart Electronics
                  </span>
                </h1>

                <p className="mt-6 text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed">
                  Explore premium gadgets, smart devices, and cutting-edge
                  electronics designed to elevate your lifestyle, productivity,
                  and entertainment.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    onClick={() => navigate("/products")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-6 rounded-2xl text-base shadow-lg shadow-blue-600/30"
                  >
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => navigate("/products")}
                    className="border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl px-7 py-6 text-base"
                  >
                    Explore Collection
                  </Button>
                </div>

                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
                  <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-4">
                    <h3 className="text-2xl font-bold">50+</h3>
                    <p className="text-sm text-slate-200">Premium Products</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-4">
                    <h3 className="text-2xl font-bold">24/7</h3>
                    <p className="text-sm text-slate-200">Customer Support</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-4 col-span-2 sm:col-span-1">
                    <h3 className="text-2xl font-bold">100%</h3>
                    <p className="text-sm text-slate-200">Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Browse Categories
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              Shop by Category
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Find the right technology for your work, home, and entertainment
              needs with our thoughtfully selected collections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  onClick={() => navigate("/products")}
                  className="group cursor-pointer rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={category.img}
                      alt={category.name}
                      className="h-60 w-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 h-11 w-11 rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center shadow-md">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {category.desc}
                    </p>

                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/products");
                      }}
                      className="mt-6 w-full rounded-2xl bg-slate-900 hover:bg-blue-600 text-white"
                    >
                      View Category
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-full mx-auto rounded-[2rem] bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white px-8 md:px-14 py-14 shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.35),transparent_30%)]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-blue-300 font-semibold uppercase tracking-wide text-sm">
                Upgrade Your Setup
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Ready to explore the best in electronics?
              </h2>
              <p className="mt-4 text-slate-300">
                Browse our latest collection and choose products designed for
                performance, comfort, and innovation.
              </p>
            </div>

            <Button
              onClick={() => navigate("/products")}
              className="bg-white text-slate-900 hover:bg-slate-200 rounded-2xl px-8 py-6 text-base font-semibold"
            >
              Start Shopping
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Electronic;