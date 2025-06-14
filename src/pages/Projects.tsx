
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const projects: Project[] = [
    {
      id: 'smart-home-ai',
      title: 'Smart Home AI Assistant',
      description: 'An intelligent home automation system that learns user preferences and optimizes energy consumption using machine learning algorithms.',
      image: 'https://images.unsplash.com/photo-1558618667-fcd25c85cd64?w=400&h=300&fit=crop',
      technologies: ['Python', 'TensorFlow', 'Raspberry Pi', 'MQTT', 'React'],
      link: 'https://github.com/alexjohnson/smart-home-ai'
    },
    {
      id: 'predictive-maintenance',
      title: 'Predictive Maintenance System',
      description: 'IoT-based system for industrial equipment monitoring with AI-powered failure prediction to reduce downtime and maintenance costs.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      technologies: ['AWS IoT', 'Python', 'Docker', 'PostgreSQL', 'Grafana'],
      link: 'https://github.com/alexjohnson/predictive-maintenance'
    },
    {
      id: 'edge-ai-camera',
      title: 'Edge AI Security Camera',
      description: 'Real-time object detection and facial recognition system running on edge devices with privacy-first approach.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
      technologies: ['OpenCV', 'PyTorch', 'NVIDIA Jetson', 'FastAPI', 'WebRTC'],
      link: 'https://github.com/alexjohnson/edge-ai-camera'
    },
    {
      id: 'agricultural-iot',
      title: 'Smart Agriculture Platform',
      description: 'Comprehensive IoT solution for precision farming with soil monitoring, weather prediction, and crop health analysis.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      technologies: ['LoRaWAN', 'Node.js', 'MongoDB', 'React', 'D3.js'],
      link: 'https://github.com/alexjohnson/agricultural-iot'
    },
    {
      id: 'traffic-optimization',
      title: 'AI Traffic Optimization',
      description: 'Intelligent traffic management system using computer vision and reinforcement learning to optimize traffic flow in smart cities.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'PostgreSQL'],
      link: 'https://github.com/alexjohnson/traffic-optimization'
    },
    {
      id: 'health-monitoring',
      title: 'Wearable Health Monitor',
      description: 'Real-time health monitoring system with anomaly detection for early warning of health issues using wearable sensors.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      technologies: ['Arduino', 'Python', 'Firebase', 'Flutter', 'TensorFlow Lite'],
      link: 'https://github.com/alexjohnson/health-monitoring'
    }
  ];

  // Get all unique technologies for filter tags
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, [projects]);

  // Filter projects based on search term and selected tags
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => project.technologies.includes(tag));
      
      return matchesSearch && matchesTags;
    });
  }, [projects, searchTerm, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            A collection of AI and IoT projects showcasing innovative solutions 
            for real-world problems across various industries.
          </p>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>

            {/* Filter Tags */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2 justify-center">
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => toggleTag(tech)}
                    className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 ${
                      selectedTags.includes(tech)
                        ? 'bg-blue-600 text-white border-blue-500'
                        : 'bg-slate-800/50 text-gray-300 border-slate-600 hover:border-blue-500/50'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
              
              {/* Clear Filters */}
              {(searchTerm || selectedTags.length > 0) && (
                <div className="flex justify-center">
                  <button
                    onClick={clearFilters}
                    className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={16} />
                    <span>Clear filters</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results Count */}
        {(searchTerm || selectedTags.length > 0) && (
          <div className="text-center mb-8">
            <p className="text-gray-400">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full border transition-all duration-200 ${
                        selectedTags.includes(tech)
                          ? 'bg-blue-600/30 text-blue-300 border-blue-500/50'
                          : 'bg-blue-600/20 text-blue-300 border-blue-500/30'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>View More</span>
                    <ArrowRight size={16} />
                  </Link>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Clear filters to see all projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
