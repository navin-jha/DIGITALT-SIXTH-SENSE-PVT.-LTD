import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MonitorSmartphone,
  Presentation,
  Waypoints,
  School,
  Briefcase,
  ArrowRight,
} from "lucide-react";

import InteractivePanelDisplay from "/src/assets/InteractivePanelDisplay.jpg";
import interactivePanel from "/src/assets/interactivePanel.jpg";
import BetterPresentation from "/src/assets/BetterPresentation.jpg";
import TransferringInformation from "/src/assets/TransferringInformation.jpg";
import InteractiveClassroom from "/src/assets/InteractiveClassroom.jpg";
import VisualAppeal from "/src/assets/VisualAppeal.jpg";

function InteractivePanel() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Better Presentation",
      image: BetterPresentation,
      icon: <Presentation size={22} />,
      desc: "Deliver impactful presentations with vivid visuals, smooth touch interaction, and a more engaging communication style.",
    },
    {
      title: "Transferring Information Effectively",
      image: TransferringInformation,
      icon: <Waypoints size={22} />,
      desc: "Share ideas, notes, and visuals clearly with smart annotation and interactive collaboration features.",
    },
    {
      title: "Interactive Classroom",
      image: InteractiveClassroom,
      icon: <School size={22} />,
      desc: "Create a dynamic learning atmosphere where students can engage, respond, and learn more effectively.",
    },
    {
      title: "Adding Visual Appeal to Your Workplace",
      image: VisualAppeal,
      icon: <Briefcase size={22} />,
      desc: "Upgrade your meeting rooms and workspaces with sleek, modern display solutions that enhance productivity.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 🔹 Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-[300px] md:h-[520px] w-full">
          <img
            src={interactivePanel}
            alt="Interactive panel"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                  <MonitorSmartphone size={16} />
                  Smart Display Solutions
                </div>

                <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                  Interactive Panels
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-200 md:text-lg">
                  Explore advanced interactive panel solutions designed for
                  classrooms, conference rooms, training spaces, and modern
                  collaborative environments.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate("/contact")}
                    className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700"
                  >
                    Contact Us
                  </button>

                  <button
                    onClick={() => {
                      const section = document.getElementById("features");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                  >
                    Explore Features
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Intro Section */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left Image */}
            <div className="group relative">
              <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-tr from-blue-100 via-indigo-100 to-cyan-100 blur-2xl opacity-70" />
              <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-2xl">
                <img
                  src={InteractivePanelDisplay}
                  alt="KSPL Interactive Panel"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Premium Interactive Technology
              </div>

              <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                Designed for smarter learning and seamless collaboration
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
                At <strong>DIGITAL SIXTH SENSE PVT. LTD.</strong>, we understand
                the ever-evolving nature of technology and the importance of
                embracing advancements to stay relevant and achieve optimal
                outcomes. Recognizing the significant role of interactive panels
                in enhancing learning and collaboration, we offer top-quality
                solutions tailored to modern needs.
              </p>

              <p className="mt-4 text-base leading-8 text-gray-600 md:text-lg">
                Designed for educational institutions, our interactive panels
                help create more engaging and effective learning environments,
                ultimately supporting societal and national progress. Whether
                with or without CPUs, our panels are customizable to meet the
                specific requirements of our clients.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Customizable Solutions
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Available with or without CPUs and tailored to unique client
                    requirements.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Modern Use Cases
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Perfect for schools, offices, conference rooms, and training
                    centers.
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate("/contact")}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm 
                font-semibold text-white transition hover:bg-blue-600"
              >
                Get in Touch
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Features Section */}
      <section
        id="features"
        className="bg-gradient-to-b from-white to-slate-50 py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Key Benefits
            </div>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
              Why choose our interactive panels?
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">
              Built to improve presentation quality, classroom interaction,
              workplace collaboration, and the overall visual experience of any
              professional environment.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[28px] border border-gray-200 bg-white 
                shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 md:p-7">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 CTA Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-900
           via-blue-900 to-slate-900 px-6 py-12 text-white shadow-2xl md:px-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Ready to transform your learning or meeting space?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-200 md:text-lg">
                  Discover innovative interactive panel solutions designed to
                  make presentations smarter, classrooms more engaging, and
                  workplaces more collaborative.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <button
                  onClick={() => navigate("/contact")}
                  className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-gray-100"
                >
                  Contact Now
                </button>

                <button
                  onClick={() => navigate("/products")}
                  className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  View More Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InteractivePanel;