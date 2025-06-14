
import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  
  // Determine if this is a blog post or project based on the route
  const isBlogPost = location.pathname.startsWith('/blog/');
  const backLink = isBlogPost ? '/blog' : '/projects';
  const backText = isBlogPost ? 'Back to Blog' : 'Back to Projects';

  // Sample project data - In a real app, this would come from markdown files
  const projectData: { [key: string]: any } = {
    'smart-home-ai': {
      title: 'Smart Home AI Assistant',
      image: 'https://images.unsplash.com/photo-1558618667-fcd25c85cd64?w=800&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'Raspberry Pi', 'MQTT', 'React'],
      githubLink: 'https://github.com/alexjohnson/smart-home-ai',
      liveDemo: 'https://smart-home-demo.alexjohnson.dev',
      content: `
# Smart Home AI Assistant

## Overview
The Smart Home AI Assistant is an intelligent automation system that learns from user behavior and preferences to optimize home comfort and energy efficiency. Built with cutting-edge machine learning algorithms, it seamlessly integrates with existing IoT devices to create a truly smart living environment.

## Key Features

### 🧠 Intelligent Learning
- **Behavioral Pattern Recognition**: Learns from daily routines and preferences
- **Adaptive Scheduling**: Automatically adjusts schedules based on usage patterns  
- **Predictive Analytics**: Anticipates needs before they arise

###  Energy Optimization
- **Smart HVAC Control**: Optimizes heating and cooling based on occupancy and weather
- **Lighting Management**: Automatically adjusts lighting based on natural light and presence
- **Appliance Scheduling**: Runs energy-intensive appliances during off-peak hours

### 🔐 Security & Privacy
- **Local Processing**: All AI computations happen locally on Raspberry Pi
- **Encrypted Communications**: MQTT over TLS for secure device communication
- **Privacy First**: No personal data leaves your home network

## Technical Architecture

### Hardware Components
- **Raspberry Pi 4B**: Main processing unit running the AI models
- **ESP32 Modules**: Distributed sensors throughout the home
- **Smart Switches**: Automated control of lights and appliances
- **Environmental Sensors**: Temperature, humidity, motion, and light sensors

### Software Stack
- **Backend**: Python with FastAPI for REST APIs
- **AI/ML**: TensorFlow for behavioral prediction models
- **Communication**: MQTT broker for IoT device messaging  
- **Frontend**: React.js dashboard for monitoring and control
- **Database**: PostgreSQL for historical data storage

## Machine Learning Models

### Occupancy Prediction
Uses a combination of motion sensors, door sensors, and historical patterns to predict when rooms will be occupied.

### Energy Usage Forecasting  
LSTM neural networks analyze historical usage patterns, weather data, and occupancy to predict energy consumption.

### Preference Learning
Reinforcement learning algorithms adapt to user preferences for temperature, lighting, and other environmental controls.

## Installation & Setup

### Prerequisites
- Raspberry Pi 4B with Raspbian OS
- Python 3.8+
- Node.js 14+
- PostgreSQL 12+

### Quick Start
\`\`\`bash
# Clone the repository
git clone https://github.com/alexjohnson/smart-home-ai.git
cd smart-home-ai

# Install Python dependencies
pip install -r requirements.txt

# Install Node.js dependencies
cd frontend && npm install

# Setup database
python manage.py migrate

# Start the services
docker-compose up -d
\`\`\`

## Results & Impact

### Energy Savings
- **25% reduction** in electricity costs
- **30% improvement** in HVAC efficiency
- **40% reduction** in unnecessary lighting usage

### User Experience
- **90% accuracy** in predicting user preferences
- **Seamless automation** without manual intervention
- **Intuitive dashboard** for monitoring and control

## Future Enhancements

- **Voice Control Integration**: Amazon Alexa and Google Assistant compatibility   
- **Advanced Security**: Integration with security cameras and alarm systems
- **Multi-Home Support**: Manage multiple properties from a single interface
- **Community Features**: Share automation scripts with other users

## Technical Challenges Solved

### Edge AI Optimization
Optimized TensorFlow models to run efficiently on Raspberry Pi hardware with limited resources.

### Real-time Processing  
Implemented efficient data pipelines to process sensor data in real-time while maintaining low latency.

### Device Interoperability
Created standardized communication protocols to work with devices from multiple manufacturers.

---

*This project demonstrates the potential of combining AI with IoT to create truly intelligent living spaces that adapt to our needs while promoting energy efficiency and sustainability.*
      `
    },
    'predictive-maintenance': {
      title: 'Predictive Maintenance System',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
      technologies: ['AWS IoT', 'Python', 'Docker', 'PostgreSQL', 'Grafana'],
      githubLink: 'https://github.com/alexjohnson/predictive-maintenance',
      content: `
# Predictive Maintenance System

## Project Overview
Industrial predictive maintenance system that uses IoT sensors and machine learning to predict equipment failures before they occur, reducing downtime and maintenance costs by up to 40%.

## Technical Implementation
Built on AWS IoT Core with real-time data processing pipelines and advanced anomaly detection algorithms.

## Key Results
- 40% reduction in unplanned downtime
- 25% decrease in maintenance costs  
- 99.2% prediction accuracy for critical failures
      `
    },
    // Blog post data
    'getting-started-with-iot': {
      title: 'Getting Started with IoT Development: A Beginner\'s Guide',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
      technologies: ['IoT', 'Beginner', 'Hardware', 'Tutorial'],
      content: `
# Getting Started with IoT Development: A Beginner's Guide

## Introduction
The Internet of Things (IoT) has revolutionized how we interact with technology, connecting everyday objects to the internet and enabling them to send and receive data. If you're looking to dive into IoT development, this comprehensive guide will help you get started on the right foot.

## What is IoT?
IoT refers to a network of physical devices embedded with sensors, software, and connectivity that enables them to collect and exchange data. From smart thermostats to industrial monitoring systems, IoT applications are everywhere.

## Essential Components for IoT Development

### Hardware Basics
- **Microcontrollers**: Arduino, ESP32, Raspberry Pi
- **Sensors**: Temperature, humidity, motion, light sensors
- **Connectivity**: WiFi, Bluetooth, LoRa, cellular modules
- **Power Management**: Batteries, solar panels, power optimization

### Software Stack
- **Programming Languages**: C/C++, Python, JavaScript
- **Protocols**: MQTT, HTTP/HTTPS, CoAP
- **Cloud Platforms**: AWS IoT, Google Cloud IoT, Azure IoT
- **Databases**: InfluxDB, MongoDB, PostgreSQL

## Getting Started: Your First IoT Project

### Step 1: Choose Your Hardware
For beginners, we recommend starting with an ESP32 development board. It's affordable, has built-in WiFi and Bluetooth, and is beginner-friendly.

### Step 2: Set Up Your Development Environment
Install the Arduino IDE or PlatformIO for coding your device firmware.

### Step 3: Build a Simple Temperature Monitor
Create a basic project that reads temperature data and sends it to a cloud service.

\`\`\`cpp
#include <WiFi.h>
#include <DHT.h>

#define DHT_PIN 2
#define DHT_TYPE DHT22

DHT dht(DHT_PIN, DHT_TYPE);

void setup() {
  Serial.begin(115200);
  dht.begin();
  // WiFi setup code here
}

void loop() {
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  // Send data to cloud
  sendToCloud(temperature, humidity);
  
  delay(60000); // Wait 1 minute
}
\`\`\`

## Best Practices for IoT Development

### Security First
- Use encrypted connections (TLS/SSL)
- Implement device authentication
- Regular security updates
- Secure data storage

### Power Efficiency
- Use deep sleep modes
- Optimize data transmission
- Choose efficient components
- Implement smart scheduling

### Scalability Considerations
- Design for multiple devices
- Use standardized protocols
- Plan for data growth
- Consider edge computing

## Common Challenges and Solutions

### Connectivity Issues
WiFi can be unreliable. Consider implementing:
- Connection retry logic
- Offline data storage
- Multiple connectivity options

### Power Management
Battery-powered devices need:
- Efficient sleep modes
- Optimized code
- Smart data transmission strategies

### Data Management
Handle increasing data volumes with:
- Data compression
- Selective transmission
- Local processing

## Next Steps

Once you've mastered the basics:
1. Explore advanced sensors and actuators
2. Learn about edge computing and AI
3. Study industrial IoT protocols
4. Build more complex systems

## Recommended Resources

- **Books**: "Building the Internet of Things" by Maciej Kranz
- **Courses**: Coursera IoT Specialization
- **Communities**: IoT Developer Community, Arduino Forum
- **Tools**: ThingSpeak, Blynk, Node-RED

## Conclusion

IoT development offers endless possibilities for innovation. Start small, focus on learning the fundamentals, and gradually build more complex projects. The key is to begin with simple projects and progressively tackle more challenging implementations.

Remember: every expert was once a beginner. The IoT ecosystem is welcoming to newcomers, and there are plenty of resources available to help you succeed.

Happy building! 🚀
      `
    }
  };

  const project = projectData[id || ''];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            {isBlogPost ? 'Blog Post Not Found' : 'Project Not Found'}
          </h1>
          <Link
            to={backLink}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 flex items-center justify-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>{backText}</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to={backLink}
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>{backText}</span>
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">{project.title}</h1>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-600/20 text-blue-600 dark:text-blue-300 text-sm rounded-full border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons - Only show for projects, not blog posts */}
          {!isBlogPost && (
            <div className="flex space-x-4 mb-8">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <Github size={20} />
                  <span>View Source</span>
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg transition-all flex items-center space-x-2"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Project Image */}
        <div className="mb-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl"
          />
        </div>

        {/* Project Content */}
        <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 dark:border-blue-500/20">
          <div className="prose prose-slate dark:prose-invert prose-blue max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-8 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-slate-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-slate-600 dark:text-gray-300 mb-4 space-y-2">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="text-slate-600 dark:text-gray-300">
                    {children}
                  </li>
                ),
                code: ({ children }) => (
                  <code className="bg-slate-200 dark:bg-slate-700 text-blue-600 dark:text-blue-300 px-2 py-1 rounded text-sm">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg overflow-x-auto mb-4">
                    {children}
                  </pre>
                ),
              }}
            >
              {project.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
