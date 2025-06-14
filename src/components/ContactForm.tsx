
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = formData.subject || `Portfolio Contact from ${formData.name}`;
    const body = `Hi Santhosh,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`;
    
    const mailtoUrl = `mailto:santhosh.ganesan@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 dark:border-blue-500/20 shadow-lg">
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Get In Touch
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 transition-all"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 transition-all"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 transition-all"
            placeholder="Subject of your message"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 resize-none transition-all"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105"
        >
          <Send size={16} />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
