
import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  description: string;
  link: string;
  issuer: string;
  date: string;
}

interface CertificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CertificationsModal: React.FC<CertificationsModalProps> = ({ isOpen, onClose }) => {
  const certifications: Certification[] = [
    {
      id: '1',
      name: 'AWS Certified Solutions Architect',
      description: 'Comprehensive certification covering AWS cloud architecture, security, and best practices.',
      link: 'https://aws.amazon.com/certification/',
      issuer: 'Amazon Web Services',
      date: '2024'
    },
    {
      id: '2',
      name: 'TensorFlow Developer Certificate',
      description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems.',
      link: 'https://www.tensorflow.org/certificate',
      issuer: 'TensorFlow',
      date: '2023'
    },
    {
      id: '3',
      name: 'IoT Fundamentals Certification',
      description: 'Comprehensive understanding of IoT protocols, devices, and system architecture.',
      link: 'https://cisco.com/c/en/us/training-events/training-certifications/certifications/iot.html',
      issuer: 'Cisco',
      date: '2023'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-slate-700">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 grid gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-700/50 rounded-xl p-6 border border-slate-600 hover:border-blue-500/50 transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-blue-400 font-medium mb-2">{cert.issuer} • {cert.date}</p>
                  <p className="text-gray-300 mb-4">{cert.description}</p>
                </div>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <span>View Certificate</span>
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsModal;
