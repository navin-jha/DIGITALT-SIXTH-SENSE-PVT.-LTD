import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Monitor,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Briefcase,
  Star,
  CheckCircle2,
} from "lucide-react";

function Desktop() {
  const navigate = useNavigate();

  const products = [
    {
      id: 4,
      name: "Dell Desktop Computer",
      brand: "Dell",
      tag: "Best for Office",
      description:
        "Reliable desktop system designed for smooth office work, multitasking, and everyday business productivity.",
      specs: ["Intel Processor", "Fast Performance", "Business Ready"],
    },
    {
      id: 5,
      name: "HP Desktop Computer",
      brand: "HP",
      tag: "Professional Choice",
      description:
        "Elegant and efficient desktop setup with dependable performance for professional and enterprise use.",
      specs: ["Modern Design", "Smooth Workflow", "Trusted Brand"],
    },
    {
      id: 6,
      name: "Lenovo Desktop Computer",
      brand: "Lenovo",
      tag: "Powerful Build",
      description:
        "Strong and efficient desktop machine tailored for business environments and long working hours.",
      specs: ["Stable System", "High Efficiency", "Workstation Feel"],
    },
  ];

  const highlights = [
    {
      icon: <Cpu size={20} />,
      title: "High Performance",
      text: "Built to handle business tasks, productivity tools, and multitasking with ease.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Reliable Systems",
      text: "Trusted desktop brands with stability, durability, and professional-grade quality.",
    },
    {
      icon: <Briefcase size={20} />,
      title: "Business Ready",
      text: "Perfect for offices, shops, enterprises, and day-to-day commercial operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
              <Monitor size={16} />
              Premium Desktop Collection
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Powerful Desktop
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Solutions for Business
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
              Explore high-performance desktop systems crafted for offices,
              business operations, and professional workspaces. Clean design,
              trusted brands, and dependable performance — all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button 
                onClick={() => navigate("/products")}
                className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700">
                Explore Products
              </button>
              <button 
                onClick={() => navigate("/contact")}
                className="rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-300 hover:text-blue-600">
                Contact Sales
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                Trusted Brands
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                Business Grade Quality
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                Professional Support
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-2xl backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-5 text-white shadow-lg">
                  <Monitor size={28} />
                  <h3 className="mt-4 text-lg font-bold">Modern Setup</h3>
                  <p className="mt-2 text-sm text-blue-50">
                    Premium office and business desktop systems.
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-900 p-5 text-white shadow-lg">
                  <Cpu size={28} />
                  <h3 className="mt-4 text-lg font-bold">Fast Performance</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    Smooth multitasking for everyday professional work.
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl bg-gradient-to-r from-slate-100 to-white p-6 shadow-inner">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Featured Category
                      </p>
                      <h3 className="mt-1 text-2xl font-bold text-gray-900">
                        Desktop Workstations
                      </h3>
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                      <Briefcase className="text-blue-600" size={28} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-4 py-3 shadow-xl">
              <p className="text-xs text-gray-500">Available Models</p>
              <p className="text-lg font-bold text-gray-900">Top Brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 py-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Section */}
      <section className="px-6 py-10 md:px-10 lg:px-16 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Our Collection
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Desktop Products
              </h2>
              <p className="mt-3 max-w-2xl text-gray-600">
                Choose from trusted desktop brands built for professional work,
                office environments, and efficient day-to-day business use.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
              3 premium desktop models available
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="group cursor-pointer overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Top Visual */}
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100 p-6">
                  <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow">
                    {item.tag}
                  </div>

                  <div className="flex h-52 items-center justify-center">
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-[28px] bg-white shadow-lg transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Monitor className="text-blue-600" size={52} />
                      <div className="absolute -right-2 -top-2 rounded-full bg-yellow-400 p-2 shadow-md">
                        <Star size={14} className="fill-white text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3 inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                    {item.brand}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 transition group-hover:text-blue-600">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.specs.map((spec, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Price</p>
                      <p className="text-lg font-bold text-blue-600">
                        Contact for price
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                       navigate("/products");
                    }}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-14 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-gray-900 via-slate-900 to-blue-900 p-8 text-white shadow-2xl md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                Need Assistance?
              </p>
              <h3 className="mt-2 text-2xl font-extrabold md:text-3xl">
                Find the right desktop for your business
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
                Get in touch for product recommendations, pricing details, and
                business purchase support tailored to your needs.
              </p>
            </div>

            <button
              onClick={() => navigate("/contact")}
             className="rounded-2xl bg-white px-6 py-3 text-sm font-bold text-gray-900 transition hover:bg-blue-50">
              Contact Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Desktop;