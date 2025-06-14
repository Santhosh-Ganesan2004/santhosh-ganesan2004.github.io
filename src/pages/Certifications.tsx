
import React, { useState, useMemo } from 'react';
import { Award, ExternalLink, Calendar, Building, Search, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

interface Certification {
  id: string;
  name: string;
  description: string;
  link: string;
  issuer: string;
  date: string;
  certificateId?: string;
  skills?: string[];
  category: string;
}

const Certifications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const certifications: Certification[] = [
    {
      id: '1',
      name: 'AWS Certified Solutions Architect - Associate',
      description: 'This certification validates expertise in designing distributed systems on AWS. It demonstrates the ability to design resilient architectures, design high-performing architectures, design secure applications and architectures, and design cost-optimized architectures.',
      link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
      issuer: 'Amazon Web Services',
      date: '2024',
      certificateId: 'AWS-SA-2024-001',
      skills: ['Compute, networking, storage, and database AWS services', 'AWS deployment and management services', 'Security features and tools', 'Cost optimization strategies'],
      category: 'Cloud Computing'
    },
    {
      id: '2',
      name: 'TensorFlow Developer Certificate',
      description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems.',
      link: 'https://www.tensorflow.org/certificate',
      issuer: 'TensorFlow',
      date: '2023',
      skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Computer Vision', 'Natural Language Processing'],
      category: 'Machine Learning'
    },
    {
      id: '3',
      name: 'IoT Fundamentals Certification',
      description: 'Comprehensive understanding of IoT protocols, devices, and system architecture.',
      link: 'https://cisco.com/c/en/us/training-events/training-certifications/certifications/iot.html',
      issuer: 'Cisco',
      date: '2023',
      skills: ['IoT Protocols', 'Device Management', 'Network Security', 'Data Analytics', 'Edge Computing'],
      category: 'Internet of Things'
    }
  ];

  // Get all unique categories for filter
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    certifications.forEach(cert => categories.add(cert.category));
    return Array.from(categories).sort();
  }, [certifications]);

  // Filter certifications based on search term and selected categories
  const filteredCertifications = useMemo(() => {
    return certifications.filter(cert => {
      const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategories.length === 0 || 
                             selectedCategories.includes(cert.category);
      
      return matchesSearch && matchesCategory;
    });
  }, [certifications, searchTerm, selectedCategories]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional certifications in AI, cloud computing, and IoT technologies 
              from leading industry providers.
            </p>

            {/* Search and Filter Section */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search certifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                />
              </div>

              {/* Category Filter */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2 justify-center">
                  {allCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                        selectedCategories.includes(category)
                          ? 'bg-purple-600 text-white border-purple-500'
                          : 'bg-slate-800/50 text-gray-300 border-slate-600 hover:border-purple-500/50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                {/* Clear Filters */}
                {(searchTerm || selectedCategories.length > 0) && (
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
          {(searchTerm || selectedCategories.length > 0) && (
            <div className="text-center mb-8">
              <p className="text-gray-400">
                Showing {filteredCertifications.length} of {certifications.length} certifications
              </p>
            </div>
          )}

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
            {filteredCertifications.map((cert) => (
              <Dialog key={cert.id}>
                <DialogTrigger asChild>
                  <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                        <Award className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {cert.name}
                        </h3>
                        <p className="text-purple-400 text-sm">{cert.category}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-purple-400 text-sm mb-3">
                      <Building size={14} className="mr-2" />
                      <span>{cert.issuer}</span>
                      <Calendar size={14} className="ml-4 mr-2" />
                      <span>{cert.date}</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm line-clamp-3">
                      {cert.description}
                    </p>
                    
                    <div className="mt-4 text-purple-400 text-sm font-medium">
                      Click to view details →
                    </div>
                  </div>
                </DialogTrigger>
                
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-800 border-slate-600">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {cert.name}
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    {/* Certification Info */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center text-purple-400">
                        <Building size={16} className="mr-2" />
                        <span className="text-white">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center text-purple-400">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-white">{cert.date}</span>
                      </div>
                      {cert.certificateId && (
                        <div className="text-purple-400">
                          <span className="text-white">ID: {cert.certificateId}</span>
                        </div>
                      )}
                      <div className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-500/30">
                        {cert.category}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                    
                    {/* Skills */}
                    {cert.skills && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Skills Validated</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {cert.skills.map((skill, index) => (
                            <div key={index} className="flex items-center text-gray-300">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Certificate Link */}
                    <div className="pt-4 border-t border-slate-600">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* No Results */}
          {filteredCertifications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No certifications found matching your criteria.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Clear filters to see all certifications
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
