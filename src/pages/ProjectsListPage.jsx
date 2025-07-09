import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MapPin,
  Building2,
} from "lucide-react";
import { getAllProjects } from "../data/projectData";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navBar/Navbar";

const ProjectsListPage = () => {
  // Get actual project data
  const projectsData = getAllProjects();

  // Transform project data for carousel display
  const projects = projectsData.map((project) => ({
    id: project.id || "", // fallback to empty string
    slug: project.slug || "",
    title: project.hero?.title || "",
    subtitle: project.hero?.subtitle || "",
    location: project.hero?.location || "",
    image: project.media?.thumbnail || "",
    totalArea: project.overview?.totalArea || "",
    totalPlots: project.overview?.totalPlots || 0,
    description: project.hero?.description || "",
    keyFeatures: Array.isArray(project.hero?.keyFeatures)
      ? project.hero.keyFeatures
      : [],
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  const navigate = useNavigate();

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerView >= projects.length ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, itemsPerView, projects.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, projects.length - itemsPerView)
        : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerView >= projects.length ? 0 : prevIndex + 1
    );
  };

  const handleProjectClick = (projectSlug) => {
    // Navigate to the project details page using React Router
    navigate(`/projects/${projectSlug}`);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* <Navbar bgClass="bg-slate-700" /> */}
      <Navbar />
      {/* Header */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Our Projects
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover premium residential developments and investment
            opportunities
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden mx-16">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / itemsPerView
                }%)`,
                width: `${(projects.length * 100) / itemsPerView}%`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="px-4"
                  style={{ width: `${100 / projects.length}%` }}
                >
                  <div
                    className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer hover:scale-105"
                    onClick={() => handleProjectClick(project.slug)}
                  >
                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={project.image || ""}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop";
                        }}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Project Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin size={16} className="text-blue-400" />
                          <span className="text-sm font-medium">
                            {project.location || ""}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">
                          {project.title || ""}
                        </h3>
                        <p className="text-sm text-slate-300 mb-2">
                          {project.subtitle || ""}
                        </p>

                        {/* Key Stats */}
                        <div className="flex items-center gap-4 text-xs">
                          <div className="flex items-center gap-1">
                            <Building2 size={14} className="text-emerald-400" />
                            <span>{project.totalArea || ""}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                            <span>{project.totalPlots || 0} Units</span>
                          </div>
                        </div>
                      </div>

                      {/* Click Indicator */}
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <ExternalLink size={20} className="text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-emerald-400 bg-emerald-400/20 px-3 py-1 rounded-full">
                          Real Estate
                        </span>
                        <span className="text-sm text-slate-400">
                          #{project.id}
                        </span>
                      </div>

                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                        {project.description}
                      </h4>

                      {/* Key Features */}
                      <div className="space-y-1 mb-4">
                        {project.keyFeatures.slice(0, 2).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-slate-300"
                          >
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                            <span>{feature || ""}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-slate-400 text-sm">
                          Click to view details
                        </p>
                        <div className="text-emerald-400 text-sm font-medium">
                          Explore →
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 border-2 border-emerald-400/0 group-hover:border-emerald-400/50 rounded-2xl transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({
              length: Math.ceil(projects.length / itemsPerView),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? "bg-blue-400 w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play Controls */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-slate-300 hover:text-white transition-colors duration-300 text-sm"
          >
            {isAutoPlaying ? "Pause" : "Play"} Auto-scroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsListPage;
