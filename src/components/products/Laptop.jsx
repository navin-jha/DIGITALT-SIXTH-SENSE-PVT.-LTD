import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Cpu,
  LaptopMinimal,
  ShieldCheck,
  BatteryCharging,
} from "lucide-react";
import Laptops from "../../assets/laptops.jpg";

function Laptop() {
  const navigate = useNavigate();

  const features = [
    "High Performance",
    "Portable & Lightweight",
    "Business Ready",
    "Reliable for Daily Use",
  ];

  const highlights = [
    {
      icon: <LaptopMinimal size={22} />,
      title: "Modern Design",
      desc: "Stylish and practical laptops crafted for productivity, comfort, and smooth everyday work.",
    },
    {
      icon: <Cpu size={22} />,
      title: "Strong Performance",
      desc: "Built to handle office tasks, study, business applications, and personal workflows with ease.",
    },
    {
      icon: <Briefcase size={22} />,
      title: "Business Ready",
      desc: "Perfect for office setups, professional workflows, and long-term dependable use.",
    },
  ];

  const detailCards = [
    {
      icon: <LaptopMinimal size={20} />,
      title: "Portable Design",
      desc: "Easy to carry and perfect for flexible work environments, travel, and study.",
    },
    {
      icon: <Cpu size={20} />,
      title: "Smooth Performance",
      desc: "Reliable speed for productivity, multitasking, meetings, and daily usage.",
    },
    {
      icon: <BatteryCharging size={20} />,
      title: "Long-Term Use",
      desc: "Built for durability, battery efficiency, and dependable long-term performance.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Right Choice",
      desc: "Choose a laptop based on your real workflow, budget, and usage needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/40 text-gray-900">
      {/* Hero Section */}
      <section className="grid min-h-[88vh] overflow-hidden md:grid-cols-2">
        {/* Left Content */}
        <div className="flex items-center justify-center px-6 py-14 md:px-12 lg:px-16">
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <LaptopMinimal size={16} />
              Premium Laptop Collection
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Smart Laptops for
              <span className="block text-blue-600">Modern Work</span>
            </h1>

            <p className="mt-5 text-base leading-8 text-gray-600 md:text-lg">
              Explore powerful, reliable, and stylish laptops built for
              business, office work, study, and personal productivity.
            </p>

            <div className="mt-8">
              <button
                onClick={() => navigate("/products")}
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
              >
                Explore Now
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={18} />
                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 p-6 md:p-10">
          <img
            src={Laptops}
            alt="Laptop"
            className="max-h-[520px] w-full object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Mid Feature Cards */}
      <section className="px-6 py-14 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="px-6 py-4 md:px-12 lg:px-16 lg:py-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl md:p-10 lg:p-14">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Laptop Solutions
            </div>

            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Powerful, Portable & Reliable
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Laptops are compact portable computers designed for both
              professional and personal use. They combine performance,
              portability, and convenience into one efficient device, making
              them ideal for work, study, and everyday productivity.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              At{" "}
              <span className="font-semibold text-gray-900">
                DIGITALT SIXTH SENSE PVT. LTD.
              </span>
              , we help you choose the right laptop based on your actual needs.
              Whether you care most about performance, portability, battery
              life, or design, the experience should feel simple and reliable.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {detailCards.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/40"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={() => navigate("/contact")}
              className="rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-400 hover:text-blue-600"
            >
              Talk to Us
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-14 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-gray-900 via-slate-900 to-blue-900 p-8 text-white shadow-2xl md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                Need Help Choosing?
              </p>
              <h3 className="mt-2 text-2xl font-extrabold md:text-3xl">
                Find the right laptop for your workflow
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                Whether you need a laptop for office work, study, business, or
                personal use, we can help you choose the right one with clarity
                and confidence.
              </p>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="rounded-2xl bg-white px-6 py-3 text-sm font-bold text-gray-900 transition hover:bg-blue-50"
            >
              Contact Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Laptop;