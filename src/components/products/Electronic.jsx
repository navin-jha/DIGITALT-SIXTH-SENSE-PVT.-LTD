import React from "react";
import ElectronicImg from "../../assets/electronicImg.jpg";
import { Button } from "@/components/ui/button";

import LatestElectronics2 from "../../assets/latestElectronics1.jpg";
import LatestElectronics3 from "../../assets/latestElectronics2.jpg";
import LatestElectronics4 from "../../assets/latestElectronics3.jpg";

const categories = [
  {
    name: "Laptops",
    img: LatestElectronics2,
    desc: "High-performance laptops for work, study, and gaming.",
  },
  {
    name: "Smart TVs",
    img: LatestElectronics3,
    desc: "Enjoy stunning visuals and smart entertainment features.",
  },
  {
    name: "Desktops",
    img: LatestElectronics4,
    desc: "Reliable desktop systems for office and personal use.",
  },
  {
    name: "Electronics",
    img: ElectronicImg,
    desc: "Explore a wide range of quality electronic products.",
  },
];

function Electronic() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-[60vh] md:h-[72vh] w-full">
          <img
            src={ElectronicImg}
            alt="Electronic Products"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />

          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="px-6 max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md mb-5">
                Smart Electronics Collection
              </div>

              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-5">
                Explore Latest Electronics
              </h1>

              <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-7">
                Discover top-quality laptops, smart TVs, desktops, and modern
                electronic products designed to upgrade your lifestyle and work.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg">
                  Shop Now
                </Button>

                <Button
                  variant="outline"
                  className="border-white text-white bg-white/10 hover:bg-white/20 rounded-xl px-6 py-3"
                >
                  Explore Categories
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
            <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
              Our Categories
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Choose from top electronic categories
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Browse premium categories built for performance, entertainment,
              and modern daily needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={category.img}
                    alt={category.name}
                    decoding="async"
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-6">
                    {category.desc}
                  </p>
                  <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                    View Category
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-14 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 mb-4">
              Featured Products
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Popular electronic selections
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Discover our highlighted electronic products with stylish design,
              trusted quality, and everyday reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={`${category.name}-featured`}
                className="group rounded-3xl overflow-hidden border border-gray-200 bg-slate-50 shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={category.img}
                    alt={category.name}
                    decoding="async"
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-6">
                    Premium quality {category.name.toLowerCase()} for modern use
                    and better performance.
                  </p>
                  <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
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

export default Electronic;