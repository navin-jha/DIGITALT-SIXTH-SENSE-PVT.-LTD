import React from "react";
import { useNavigate } from "react-router-dom";
import { Laptop, ArrowRight, CheckCircle2, Briefcase, Cpu } from "lucide-react";
import Leptops from "../../assets/leptops.jpg";
import leptopsCard from "../../assets/leptopsCard.jpg";

function Leptop() {
  const navigate = useNavigate();

  const features = [
    "High Performance",
    "Portable & Lightweight",
    "Business Ready",
    "Reliable for Daily Use",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="grid min-h-[85vh] md:grid-cols-2">
        {/* Left Content */}
        <div className="flex items-center justify-center px-6 py-14 md:px-12 lg:px-16">
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Laptop size={16} />
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

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/products")}
                className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore Now
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-500 hover:text-blue-600"
              >
                Contact Us
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={18} />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 p-6 md:p-10">
          <img
            src={Leptops}
            alt="Laptop"
            className="max-h-[520px] w-full object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Mid Feature Cards */}
      <section className="px-6 py-12 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Laptop size={22} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Modern Design</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Stylish and practical laptops crafted for productivity and smooth everyday work.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Cpu size={22} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Strong Performance</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Built to handle office tasks, business applications, and personal use with ease.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Briefcase size={22} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Business Ready</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Perfect for office setups, professional workflows, and long-term dependable use.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="px-6 py-6 md:px-12 lg:px-16 lg:py-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[32px] bg-white p-6 shadow-xl md:grid-cols-2 md:p-10 lg:p-14">
          {/* Left Image Card */}
          <div className="rounded-[28px] bg-gradient-to-br from-gray-100 to-slate-200 p-6 shadow-inner">
            <img
              src={leptopsCard}
              alt="Laptop showcase"
              className="h-[320px] w-full object-contain"
            />
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Laptop Solutions
            </div>

            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Powerful, Portable & Reliable
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Laptops are compact portable computers designed for both
              professional and personal use. They combine a keyboard, display,
              and processor into one efficient device, making them ideal for
              work, study, and everyday productivity.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              At <span className="font-semibold text-gray-900">DIGITALT SIXTH SENSE PVT. LTD.</span>,
              we help you choose the right laptop based on your actual needs.
              Whether you care most about performance, portability, battery
              life, or design, we make the buying process simple and reliable.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-900">Portable Design</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Easy to carry and perfect for flexible work environments.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-900">Smooth Performance</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Reliable speed for productivity, business, and daily tasks.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-900">Long-Term Use</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Durable systems made to support you for years.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-900">Right Choice</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Tailored recommendations based on your workflow and budget.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/products")}
                className="flex items-center gap-2 rounded-2xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                View Products
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-400 hover:text-blue-600"
              >
                Talk to Us
              </button>
            </div>
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
                Find the perfect laptop for your needs
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                Whether you need a laptop for office work, study, business, or
                personal use, we can help you choose the right one.
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

export default Leptop;