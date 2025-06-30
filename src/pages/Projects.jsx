// src/pages/Projects.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye, FaStar } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiPython, SiDocker } from 'react-icons/si';
import DecryptedText from '../components/DecryptedText';
import InfiniteMenu from '../components/InfiniteMenu';

const projectsData = [
  {
    id: 1,
    title: "Coffee Shop Platform",
    description: "MsCafe is a web application that offers an elegant, user-friendly interface for browsing our extensive coffee menu, placing online orders, and learning about our sustainably sourced beans. Whether you’re looking to order your favorite brew or learn more about coffee origins, MsCafe provides an excellent user experience for every coffee lover.",
    longDescription: "MsCafe was founded with a simple mission: to serve the best coffee in town.with User friendly interface UI.",
    technologies: [
      { Icon: SiReact, name: 'React.js', color: 'text-blue-400' },
      { Icon: SiNodedotjs, name: 'Node.js', color: 'text-green-400' },
      { Icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
      { Icon: SiExpress, name: 'Express.js', color: 'text-gray-300' },
      { Icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-400' }
    ],
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fHww",
    github: "https://github.com/Mujtabaa07/coffeeShop",
    live: "https://coffee-shop-teal.vercel.app/",
    featured: true,
    status: "Completed",
    category: "Full-Stack"
  },
  {
    id: 2,
    title: "GitHub PR Tracker",
    description: "A modern, feature-rich application for tracking and analyzing GitHub Pull Requests with AI-powered insights.",
    longDescription: "Features include drag-and-drop task boards, real-time notifications using Socket.io, team member management, deadline tracking, and comprehensive analytics dashboard.",
    technologies: [
      { Icon: SiNextdotjs, name: 'Next.js', color: 'text-white' },
      { Icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500' },
      { Icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
      { Icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-400' }
    ],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    github: "https://github.com/Mujtabaa07/GitHub_PR_Tacker",
    live: "https://github-pr-tacker.netlify.app/",
    featured: true,
    status: "Completed",
    category: "Full-Stack"
  },
  {
    id: 3,
    title: "Animation Website",
    description: "A modern, interactive portfolio website with custom animations, dark theme, and responsive design.",
    longDescription: "Features include custom animations, interactive components, optimized performance, SEO-friendly structure, and modern design patterns with glassmorphism effects.",
    technologies: [
      { Icon: SiReact, name: 'React.js', color: 'text-blue-400' },
      { Icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-400' },
      { Icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-400' }
    ],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    github: "https://github.com/Mujtabaa07/Project-FrontEnd-?tab=readme-ov-file",
    live: "https://mujtabaa07.github.io/Project-FrontEnd-/",
    featured: false,
    status: "Completed",
    category: "Frontend"
  },
  {
    id: 4,
    title: "library-management-backend",
    description: "A Node.js/Express REST API for managing library operations with user authentication, book management, and reader services.",
    longDescription: "Built for developers to monitor API performance, track usage patterns, set up custom alerts, generate detailed reports, and optimize API endpoints for better performance.",
    technologies: [
      { Icon: SiNodedotjs, name: 'Node.js', color: 'text-green-400' },
      { Icon: SiPython, name: 'Python', color: 'text-yellow-500' },
      { Icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
      { Icon: SiDocker, name: 'Docker', color: 'text-blue-400' }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    github: "https://github.com/Mujtabaa07/library-management-backend",
    live: "https://library-management-backend-clob.onrender.com",
    featured: false,
    status: "In Progress",
    category: "Backend"
  },
  {
    id: 5,
    title: "eCommerce Shoping Platform",
    description: "eCommerce Shoping Platform based on ReactTS & Daisy UI, integrating Supabase (A firebase alternative)",
    longDescription: "opShop is an eCommerce Website based on React TypeScript and Daisy UI, integrating Supabase for Backend and Database.The main aim of this project is to foster a collaborative community of creative individuals, where ideas grow and innovation flourishes.",
    technologies: [
      { Icon: SiReact, name: 'React.js', color: 'text-blue-400' },
      { Icon: SiNodedotjs, name: 'Node.js', color: 'text-green-400' },
      { Icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500' },
      { Icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' }
    ],
    image: "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
    github: "https://github.com/Mujtabaa07/popShop",
    live: "https://pop-shop-github.vercel.app/",
    featured: false,
    status: "Planning",
    category: "Full-Stack"
  }
];

export default function Projects() {
  const projects = useMemo(() => projectsData, []);
  const categories = ["All", "Full-Stack", "Frontend", "Backend"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [showAnimatedView, setShowAnimatedView] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  // Format projects for InfiniteMenu
  const menuItems = useMemo(() => {
    return projects.map(project => ({
      image: project.image,
      link: project.live,
      title: project.title,
      description: project.description
    }));
  }, [projects]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory, projects]);

  // Manage body overflow when modal is open
  useEffect(() => {
    if (activeProject && showAnimatedView) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject, showAnimatedView]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "text-green-400 bg-green-400/20";
      case "In Progress": return "text-yellow-400 bg-yellow-400/20";
      case "Planning": return "text-blue-400 bg-blue-400/20";
      default: return "text-gray-400 bg-gray-400/20";
    }
  };

  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="fixed top-0 left-0 w-[50vw] h-[50vh] bg-gradient-to-br from-indigo-600/20 to-purple-600/10 rounded-full blur-3xl opacity-40 -translate-x-1/3 -translate-y-1/3"></div>
      <div className="fixed bottom-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-tl from-teal-600/20 to-cyan-600/10 rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3"></div>
      <div className="fixed top-1/2 left-1/2 w-[40vw] h-[40vh] bg-gradient-to-r from-pink-600/10 to-violet-600/10 rounded-full blur-2xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, modern web technologies, and creative problem-solving.
          </p>
        </div>
        
        {/* Project Details Modal for 3D View */}
        {activeProject && showAnimatedView && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black bg-opacity-90 backdrop-blur-md transition-all"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setActiveProject(null);
              }
            }}
          >
            <div className="bg-gray-900/90 border border-gray-700/80 rounded-xl max-w-xl w-full overflow-hidden relative shadow-2xl">
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white p-2 bg-gray-800/50 hover:bg-gray-700/70 rounded-full transition-colors z-10"
              >
                ✕
              </button>
              
              <div className="flex flex-col max-h-[80vh]">
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 w-full p-5">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${getStatusColor(activeProject.status)}`}>
                      {activeProject.status}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{activeProject.title}</h3>
                  </div>
                </div>
                
                <div className="p-5 overflow-y-auto">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activeProject.technologies?.slice(0, 4).map((tech, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-1 bg-gray-800/70 px-2 py-1 rounded-full text-xs ${tech.color}`}
                      >
                        <tech.Icon />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                    {activeProject.technologies?.length > 4 && (
                      <div className="flex items-center bg-gray-800/70 px-2 py-1 rounded-full text-xs text-gray-300">
                        +{activeProject.technologies.length - 4}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-5 leading-relaxed">{activeProject.longDescription || activeProject.description}</p>
                  
                  <div className="flex gap-3">
                    <a 
                      href={activeProject.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-lg transition-all flex-1"
                    >
                      <FaGithub className="text-lg" />
                      <span>View Code</span>
                    </a>
                    <a 
                      href={activeProject.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600/50 hover:bg-indigo-600/70 text-white rounded-lg transition-all flex-1"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View Toggle and Category Filter */}
        <div className="flex flex-col items-center gap-6 mb-10">
          <div className="bg-gray-800/50 rounded-full p-1.5 flex w-full max-w-xs shadow-lg border border-gray-700/30 backdrop-blur-sm">
            <button
              onClick={() => setShowAnimatedView(false)}
              className={`flex-1 py-2 rounded-full font-medium text-sm sm:text-base text-center transition-all duration-300 ${
                !showAnimatedView
                  ? 'bg-indigo-600/60 text-indigo-50 shadow-md'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Standard View
            </button>
            <button
              onClick={() => setShowAnimatedView(true)}
              className={`flex-1 py-2 rounded-full font-medium text-sm sm:text-base text-center transition-all duration-300 ${
                showAnimatedView
                  ? 'bg-indigo-600/60 text-indigo-50 shadow-md'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              3D Interactive View
            </button>
          </div>
          
          {!showAnimatedView && (
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 border ${
                    selectedCategory === category
                      ? 'bg-indigo-600/40 text-indigo-200 border-indigo-500/50 shadow-md'
                      : 'bg-gray-800/40 text-gray-400 border-gray-700/50 hover:bg-gray-700/40 hover:text-gray-300'
                  }`}
                >
                  <DecryptedText 
                    text={category} 
                    speed={80}
                    maxIterations={2}
                    animateOn="view"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Animated 3D Project Showcase */}
        {showAnimatedView && (
          <div className="relative h-[calc(100vh-300px)] min-h-[400px] max-h-[600px] mb-8 overflow-hidden rounded-2xl border border-gray-800/50 group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 overflow-hidden">
              <InfiniteMenu 
                items={menuItems}
                onActiveItemChange={(index) => {
                  const projectIndex = index % projects.length;
                  setActiveProject(projects[projectIndex]);
                }}
              />
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4 z-10 opacity-0 hover:opacity-100 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-gray-300 bg-black/60 p-3 rounded-lg backdrop-blur-md border border-gray-700/50 text-sm">
                Drag to explore projects. Click on a project to view details.
              </p>
            </div>
          </div>
        )}

        {/* Featured Projects - Only visible in standard view and when "All" is selected */}
        {!showAnimatedView && selectedCategory === 'All' && (
          <div className="mb-16">
            <div className="flex items-center justify-center sm:justify-start mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3 relative">
                <FaStar className="text-yellow-400" />
                Featured Projects
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400/80 to-transparent"></span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {filteredProjects.filter(project => project.featured).map((project) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl overflow-hidden border border-gray-600/50 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-purple-600/40 text-purple-200 border border-purple-500/50">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    <DecryptedText 
                      text={project.title} 
                      speed={80}
                      maxIterations={3}
                      animateOn="view"
                    />
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-4 sm:line-clamp-none">
                    <DecryptedText 
                      text={project.longDescription} 
                      speed={150}
                      maxIterations={2}
                      animateOn="view"
                    />
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-1 sm:gap-2 bg-gray-800/70 px-2 sm:px-3 py-1 rounded-full text-xs border border-gray-700/70 ${tech.color} hover:border-gray-600/90 transition-colors`}
                      >
                        <tech.Icon />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-lg transition-all duration-300 text-sm flex-1"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 rounded-lg transition-all duration-300 text-sm border border-indigo-500/50 flex-1"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* All Projects - Only visible in standard view */}
        {!showAnimatedView && (
          <div>
            <div className="flex items-center justify-center sm:justify-start mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3 relative">
                <FaCode className="text-teal-400" />
                All Projects
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400/80 to-transparent"></span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:border-teal-500/50 transition-all duration-300 shadow-lg hover:shadow-teal-500/10 flex flex-col h-full"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[160px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-2 right-2 bg-black/40 p-1 rounded-full">
                      <FaStar className="text-yellow-400 text-xs" />
                    </div>
                  )}
                </div>
                
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-white mb-2 line-clamp-1">
                    <DecryptedText 
                      text={project.title} 
                      speed={80}
                      maxIterations={2}
                      animateOn="view"
                    />
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
                    <DecryptedText 
                      text={project.description} 
                      speed={140}
                      maxIterations={2}
                      animateOn="view"
                    />
                  </p>
                  
                  {/* Technologies - Compact */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-0.5 bg-gray-800/70 px-1.5 py-0.5 rounded-full text-[10px] ${tech.color}`}
                      >
                        <tech.Icon />
                        <span className="hidden sm:inline text-xs">{tech.name}</span>
                      </div>
                    ))}
                    {project.technologies.length > 3 && (
                      <div className="flex items-center bg-gray-700/70 px-1.5 py-0.5 rounded-full text-[10px] text-gray-300">
                        +{project.technologies.length - 3}
                      </div>
                    )}
                  </div>
                  
                  {/* Action Buttons - Compact */}
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 px-3 py-1.5 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded text-xs flex-1 transition-colors"
                    >
                      <FaGithub className="text-xs sm:text-sm" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 px-3 py-1.5 bg-teal-600/30 hover:bg-teal-600/50 text-teal-300 rounded text-xs flex-1 border border-teal-500/50 transition-colors"
                    >
                      <FaEye className="text-xs sm:text-sm" />
                      <span className="hidden sm:inline">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* Call to Action - Always visible */}
        <div className="text-center mt-16 sm:mt-24 mb-8 sm:mb-12">
          <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 rounded-2xl p-6 sm:p-10 border border-gray-700/50 backdrop-blur-sm shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Interested in collaborating?
            </h3>
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              I'm always open to discussing new opportunities, innovative projects, and creative collaborations. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-indigo-600/40 hover:bg-indigo-600/60 text-indigo-200 rounded-full border border-indigo-500/50 transition-all duration-300 font-medium shadow-lg hover:shadow-indigo-500/20">
                Get In Touch
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-full border border-gray-600/50 transition-all duration-300 font-medium shadow-lg hover:shadow-gray-500/10">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
