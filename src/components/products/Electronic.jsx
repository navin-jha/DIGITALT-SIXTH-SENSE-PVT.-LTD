import React from "react";
import { useNavigate } from "react-router-dom";
import ElectronicImg from "/src/assets/electronicImg.jpg";
import { Button } from "@/components/ui/button";

import LatestElectronics3 from "/src/assets/latestElectronics2.jpg";
import LatestElectronics4 from "/src/assets/latestElectronics3.jpg";
import LatestElectronics2 from "/src/assets/latestElectronics1.jpg";

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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">

      {/* 🔹 Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-[60vh] md:h-[70vh] w-full">
          <img
            src={ElectronicImg}
            alt="Electronic Products"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                Explore Latest Electronics
              </h1>

              <p className="text-gray-200 mb-6">
                Discover modern electronic products designed for performance and lifestyle.
              </p>

              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => navigate("/products")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
                >
                  Shop Now
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

      {/* 🔹 Categories */}
      <section className="py-14 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Categories
          </h2>
          <p className="mt-3 text-gray-600">
            Explore our top categories built for modern needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => navigate("/products")}
              className="cursor-pointer group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={category.img}
                  alt={category.name}
                  className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold">
                  {category.name}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {category.desc}
                </p>

                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/products");
                  }}
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                >
                  View Category
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Featured */}
      <section className="py-14 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Products
          </h2>
          <p className="mt-3 text-gray-600">
            Premium selections for modern users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group bg-slate-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={category.img}
                alt={category.name}
                className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  {category.name}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  Premium quality products for better performance.
                </p>

                <Button
                  onClick={() => navigate("/products")}
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Electronic;