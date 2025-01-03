// components/Contact.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      'service_hx0voiv', // Replace with your EmailJS service ID
      'template_3innkvh', // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'hNtAss1MeUKC0tntL' // Replace with your EmailJS public key
    )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label 
              htmlFor="name"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full min-h-[44px] px-4 py-2 rounded-md border border-gray-300 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       dark:bg-gray-700 dark:border-gray-600 dark:text-white
                       transition-all duration-200"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="email"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full min-h-[44px] px-4 py-2 rounded-md border border-gray-300 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       dark:bg-gray-700 dark:border-gray-600 dark:text-white
                       transition-all duration-200"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="message"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       dark:bg-gray-700 dark:border-gray-600 dark:text-white
                       transition-all duration-200 resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex justify-center py-3 px-4 border border-transparent
                     rounded-md shadow-sm text-sm font-medium text-white 
                     bg-blue-600 hover:bg-blue-700 focus:outline-none 
                     focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                     transition-all duration-300 hover:transform 
                     hover:-translate-y-1 disabled:opacity-50 
                     disabled:cursor-not-allowed min-h-[44px]"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="text-green-600 text-center">
              Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="text-red-600 text-center">
              Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;