import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BarChart3, 
  Users, 
  Target, 
  Zap, 
  TrendingUp, 
  Award, 
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Delivering Result{' '}
                  <span className="text-emerald-600"> & Growth</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  More Growth , More Turnover, More clients, Guaranteed.
                 ..... Marketing - Delivering Results
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 group"
                >
                  <span>Get Started</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Marketing Growth" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">200%</div>
                    <div className="text-sm text-gray-600">Average Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Clients Served', icon: Users },
              { number: '200%', label: 'Average ROI', icon: BarChart3 },
              { number: '5M+', label: 'Revenue Generated', icon: Target },
              { number: '92%', label: 'Client Retention', icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marketing solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital Marketing',
                description: 'Comprehensive digital strategies that drive engagement and conversions across all channels.',
                icon: BarChart3,
                features: ['SEO Optimization', 'Content Strategy', 'Email Marketing', 'Analytics']
              },
              {
                title: 'Social Media Management',
                description: 'Build and engage your community with strategic social media campaigns.',
                icon: Users,
                features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Influencer Partnerships']
              },
              {
                title: 'Performance Marketing',
                description: 'Data-driven campaigns optimized for maximum ROI and measurable results.',
                icon: Target,
                features: ['PPC Advertising', 'Conversion Optimization', 'A/B Testing', 'Attribution Modeling']
              },
              {
                title: 'Brand Strategy',
                description: 'Develop a compelling brand identity that resonates with your target audience.',
                icon: Zap,
                features: ['Brand Positioning', 'Visual Identity', 'Messaging Strategy', 'Brand Guidelines']
              },
              {
                title: 'Marketing Automation',
                description: 'Streamline your marketing processes with intelligent automation workflows.',
                icon: Award,
                features: ['Lead Nurturing', 'Customer Segmentation', 'Workflow Automation', 'CRM Integration']
              },
              {
                title: 'Growth Consulting',
                description: 'Strategic guidance to scale your business and optimize marketing performance.',
                icon: TrendingUp,
                features: ['Growth Strategy', 'Market Analysis', 'Competitive Research', 'Performance Audits']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                  <service.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Why Choose GrowthSpire?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We're not just another marketing agency. We're your growth partners, 
                  committed to delivering measurable results that matter to your business.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Data-Driven Approach',
                    description: 'Every decision is backed by data and analytics to ensure optimal performance.'
                  },
                  {
                    title: 'Proven Results',
                    description: 'Our track record speaks for itself with 300% average ROI for our clients.'
                  },
                  {
                    title: 'Dedicated Team',
                    description: 'Expert professionals who understand your industry and growth objectives.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="bg-emerald-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                to="/blog" 
                className="inline-flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                <span>Read Our Blog</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team Collaboration" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Award Winning</div>
                    <div className="text-xs text-gray-600">Marketing Agency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your growth objectives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">saurav@growthspire.agency</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+977 9813984912</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">Putali Sadak<br />Kathmandu</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Ready to Get Started?</h4>
                <p className="text-gray-600 mb-4">
                  Schedule a free consultation to discuss your growth objectives and how we can help you achieve them.
                </p>
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;