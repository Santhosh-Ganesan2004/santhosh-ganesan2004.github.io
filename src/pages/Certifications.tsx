
import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Certification {
  id: string;
  name: string;
  description: string;
  link: string;
  issuer: string;
  date: string;
  certificateId?: string;
  skills?: string[];
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: '1',
      name: 'AWS Certified Solutions Architect - Associate',
      description: 'This certification validates expertise in designing distributed systems on AWS. It demonstrates the ability to design resilient architectures, design high-performing architectures, design secure applications and architectures, and design cost-optimized architectures.',
      link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
      issuer: 'Amazon Web Services',
      date: '2024',
      certificateId: 'AWS-SA-2024-001',
      skills: ['Compute, networking, storage, and database AWS services', 'AWS deployment and management services', 'Security features and tools', 'Cost optimization strategies']
    },
    {
      id: '2',
      name: 'TensorFlow Developer Certificate',
      description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems.',
      link: 'https://www.tensorflow.org/certificate',
      issuer: 'TensorFlow',
      date: '2023',
      skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Computer Vision', 'Natural Language Processing']
    },
    {
      id: '3',
      name: 'IoT Fundamentals Certification',
      description: 'Comprehensive understanding of IoT protocols, devices, and system architecture.',
      link: 'https://cisco.com/c/en/us/training-events/training-certifications/certifications/iot.html',
      issuer: 'Cisco',
      date: '2023',
      skills: ['IoT Protocols', 'Device Management', 'Network Security', 'Data Analytics', 'Edge Computing']
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-body-text">
            Certifications
          </h1>
          <p className="text-xl text-body-text max-w-3xl mx-auto">
            Professional certifications in AI, cloud computing, and IoT technologies 
            from leading industry providers.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <Dialog key={cert.id}>
              <DialogTrigger asChild>
                <div className="group bg-card-bg rounded-2xl p-6 border border-card-hover/20 hover:border-card-hover/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-button-bg rounded-lg flex items-center justify-center mr-4">
                      <Award className="text-button-text" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-card-text group-hover:text-card-hover transition-colors">
                        {cert.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-card-hover text-sm mb-3">
                    <Building size={14} className="mr-2" />
                    <span>{cert.issuer}</span>
                    <Calendar size={14} className="ml-4 mr-2" />
                    <span>{cert.date}</span>
                  </div>
                  
                  <p className="text-card-text text-sm line-clamp-3">
                    {cert.description}
                  </p>
                  
                  <div className="mt-4 text-card-hover text-sm font-medium">
                    Click to view details →
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-dialog-bg border-dialog-border">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-dialog-text">
                    {cert.name}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Certification Info */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center text-dialog-border">
                      <Building size={16} className="mr-2" />
                      <span className="text-dialog-text">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center text-dialog-border">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-dialog-text">{cert.date}</span>
                    </div>
                    {cert.certificateId && (
                      <div className="text-dialog-border">
                        <span className="text-dialog-text">ID: {cert.certificateId}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-dialog-text mb-3">Description</h4>
                    <p className="text-dialog-text leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                  
                  {/* Skills */}
                  {cert.skills && (
                    <div>
                      <h4 className="text-lg font-semibold text-dialog-text mb-3">Skills Validated</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {cert.skills.map((skill, index) => (
                          <div key={index} className="flex items-center text-dialog-text">
                            <div className="w-2 h-2 bg-dialog-border rounded-full mr-3"></div>
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Certificate Link */}
                  <div className="pt-4 border-t border-dialog-border/30">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-button-bg hover:bg-button-active text-button-text px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
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
      </div>
    </div>
  );
};

export default Certifications;
