import React from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../data/projectData";
import { Building, MapPin, Waves, Dumbbell, Home } from "lucide-react";
import Navbar from "../components/navBar/Navbar";

const iconMap = { Building, Waves, Home, Dumbbell };

function Projects() {
  const { slug } = useParams();
  const project = getProjectById(slug);
  if (!project)
    return <div className="text-center py-20 text-2xl">Project not found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* <Navbar /> */}
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 opacity-90"></div>
        <div className="relative z-10 container mx-auto px-6 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
              {project.hero.title}
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-light">
              {project.hero.subtitle}
            </p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="w-5 h-5" />
              <span>{project.hero.location}</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </header>

      <div className="container mx-auto px-6 py-16 space-y-20">
        {/* About Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">
              About {project.company.name}
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              {project.company.description.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">
              Welcome to {project.hero.title}
            </h2>
            <p className="text-xl text-emerald-600 font-semibold text-center mb-8">
              {project.hero.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                {project.overview.description.map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))}
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center">
                  <Building className="w-16 h-16 text-emerald-600" />
                </div>
                <p className="text-center text-slate-600 mt-4">
                  Project Visualization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Highlights */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">
              Project Highlights
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-slate-700">{highlight}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800 italic">
                {project.legal.disclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* Club House Facilities */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">
              {project.clubhouse.title}
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8 text-center">
              {project.clubhouse.description}
            </p>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.clubhouse.facilities.map((facility, index) => {
                    const Icon = iconMap[facility.icon] || Building;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="text-emerald-600 flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-slate-700 font-medium">
                          {facility.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                  <Waves className="w-16 h-16 text-blue-600" />
                </div>
                <p className="text-center text-slate-600 mt-4">
                  Clubhouse Facilities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Home Specifications */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">
              House Specifications (2BHK Independent Houses)
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              {project.houseTypes["2bhk-independent"].description}
            </p>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {Object.values(
                project.houseTypes["2bhk-independent"].variants
              ).map((variant, idx) => (
                <div
                  key={idx}
                  className={
                    idx === 0
                      ? "bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6"
                      : "bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6"
                  }
                >
                  <h3
                    className={
                      idx === 0
                        ? "text-2xl font-bold text-emerald-700 mb-4"
                        : "text-2xl font-bold text-blue-700 mb-4"
                    }
                  >
                    {variant.title}
                  </h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-slate-700">
                      <span className="font-semibold">Plot Area:</span>{" "}
                      {variant.plotArea}
                    </p>
                    <p className="text-slate-700">
                      <span className="font-semibold">Built-Up Area:</span>{" "}
                      {variant.builtUpArea}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="aspect-video bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <Home
                        className={
                          idx === 0
                            ? "w-12 h-12 text-emerald-600"
                            : "w-12 h-12 text-blue-600"
                        }
                      />
                    </div>
                    <p className="text-center text-slate-600 text-sm italic">
                      Exterior View
                    </p>
                    <div className="aspect-video bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <Building
                        className={
                          idx === 0
                            ? "w-12 h-12 text-emerald-600"
                            : "w-12 h-12 text-blue-600"
                        }
                      />
                    </div>
                    <p className="text-center text-slate-600 text-sm italic">
                      Typical Floor Plan
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Construction & Finish Details
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.constructionSpecs.map((spec, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-emerald-700 mb-3 text-lg">
                    {spec.title}
                  </h4>
                  <ul className="space-y-2">
                    {spec.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="text-slate-700 text-sm leading-relaxed flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800 italic">
                {project.legal.additionalNote}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
