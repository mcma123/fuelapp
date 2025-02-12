import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Fuel,
  Shield,
  Users,
  Truck,
  CheckCircle,
  ArrowRight,
  Droplets
} from 'lucide-react';

function App() {
  console.log('App is rendering');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-20">
            <a href="#" className="flex items-center space-x-3">
              <Droplets className="w-10 h-10 text-orange-500" />
              <span className="text-2xl font-bold text-blue-900">Indzabuko Trading</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="relative min-h-[80vh] bg-cover bg-center flex items-center pt-20 bg-blue-900"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/hero_image.png")'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Fueling Industries, <span className="text-orange-500">Powering Progress</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Your trusted partner in premium petroleum products and fuel solutions.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all transform hover:translate-x-2"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">About Indzabuko Trading</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Indzabuko Trading (Pty) Ltd is a leading supplier of high-quality petroleum products, ensuring businesses and industries have access to reliable and efficient fuel solutions. Licensed to distribute a range of fuels, we specialize in meeting the needs of commercial, industrial, and aviation sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-6">Our Products & Services</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Aviation Fuel',
                description: 'High-performance fuel solutions for the aviation industry.',
                icon: <Truck className="w-12 h-12 text-orange-500" />,
                image: '/products/aviation.svg'
              },
              {
                title: 'Biofuels',
                description: 'Sustainable and eco-friendly alternative fuel options.',
                icon: <Fuel className="w-12 h-12 text-orange-500" />,
                image: '/products/biofuel.svg'
              },
              {
                title: 'Diesel',
                description: 'Premium quality diesel for commercial and industrial use.',
                icon: <Truck className="w-12 h-12 text-orange-500" />,
                image: '/products/diesel_1.svg'
              },
              {
                title: 'LPG',
                description: 'Clean-burning gas solutions for various applications.',
                icon: <Fuel className="w-12 h-12 text-orange-500" />,
                image: '/products/lpg_2.svg'
              },
              {
                title: 'Paraffin',
                description: 'Essential fuel for heating and lighting solutions.',
                icon: <Fuel className="w-12 h-12 text-orange-500" />,
                image: '/products/paraffin.svg'
              },
              {
                title: 'Petrol',
                description: 'High-grade petrol for automotive and industrial needs.',
                icon: <Fuel className="w-12 h-12 text-orange-500" />,
                image: '/products/petrol.svg'
              },
            ].map((product, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Why Choose Indzabuko Trading?</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                title: 'Certified Supplier',
                description: 'Fully compliant with industry standards',
                icon: <Shield className="w-12 h-12 text-orange-400" />
              },
              {
                title: 'Quality Assured',
                description: 'Highest quality fuel products',
                icon: <CheckCircle className="w-12 h-12 text-orange-400" />
              },
              {
                title: 'Competitive Prices',
                description: 'Best value for your business',
                icon: <Users className="w-12 h-12 text-orange-400" />
              },
              {
                title: 'Customer Service',
                description: 'Dedicated support team',
                icon: <Users className="w-12 h-12 text-orange-400" />
              },
            ].map((feature, index) => (
              <div key={index} className="text-center flex flex-col items-center group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-6">Get in Touch</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-16"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center p-6 bg-gray-50 rounded-lg transform hover:-translate-y-1 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-orange-500 mr-6" />
                <div>
                  <h3 className="font-semibold text-lg text-blue-900 mb-1">Our Location</h3>
                  <p>2 Steenbok Street, Cresslawn, Kempton Park, Gauteng, 1619</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-gray-50 rounded-lg transform hover:-translate-y-1 transition-transform duration-300">
                <Mail className="w-8 h-8 text-orange-500 mr-6" />
                <div>
                  <h3 className="font-semibold text-lg text-blue-900 mb-1">Email Us</h3>
                  <p>info@indzabuko.co.za</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-gray-50 rounded-lg transform hover:-translate-y-1 transition-transform duration-300">
                <Phone className="w-8 h-8 text-orange-500 mr-6" />
                <div>
                  <h3 className="font-semibold text-lg text-blue-900 mb-1">Call Us</h3>
                  <p>+27 (0) 11 123 4567</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transform hover:translate-y-[-2px] transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Indzabuko Trading (Pty) Ltd</h3>
            <p className="text-gray-400 mb-6">Fueling Industries, Powering Progress</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} Indzabuko Trading. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;