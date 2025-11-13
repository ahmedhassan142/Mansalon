'use client';

import { useState, useEffect } from 'react';
import { 
  Clock, 
  Shield, 
  Award, 
  Users, 
  CheckCircle,
  ArrowRight,
  Phone,
  Scissors,
  Star,
  MapPin
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Staff {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  experience: number;
  specialties: string[];
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export default function AboutPage() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await fetch('/api/staff');
        const data = await response.json();
        setStaff(data);
      } catch (error) {
        console.error('Error fetching staff:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  const stats = [
    { number: '8+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Clients' },
    { number: '15+', label: 'Awards Won' },
    { number: '100%', label: 'Satisfaction Guarantee' }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'We use only premium products and maintain the highest standards in every service.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expert Craftsmanship',
      description: 'Our barbers are continuously trained in the latest techniques and trends.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client Focused',
      description: 'Your satisfaction is our priority. We listen and deliver exactly what you want.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Hygiene First',
      description: 'Sterilized equipment and clean environment for your safety and comfort.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/about-hero.jpg"
            alt="Gentleman's Grooming Barbershop Interior"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full -translate-y-48 translate-x-48 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600 rounded-full translate-y-48 -translate-x-48 opacity-10 blur-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 border border-amber-400/30 mb-8">
            <Award className="w-5 h-5 mr-2" />
            Premium Men's Grooming Since 2016
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            About
            <span className="block text-amber-400">Gentleman's Grooming</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            Where tradition meets modern style. Serving gentlemen with excellence since 2016.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 mt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-amber-400">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded in 2016, Gentleman's Grooming started as a small neighborhood barbershop 
                  with a simple mission: to provide exceptional grooming services in a comfortable, 
                  masculine environment where every client feels valued.
                </p>
                <p>
                  What began as a single-chair establishment has grown into a premier men's salon 
                  known for its attention to detail, skilled barbers, and commitment to quality. 
                  We've maintained our core values while evolving with the latest trends and techniques.
                </p>
                <p>
                  Today, we're proud to be the go-to destination for gentlemen who appreciate 
                  quality craftsmanship and personalized service. Our team of experienced barbers 
                  continues the tradition of excellence that has defined us from day one.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-amber-50 rounded-2xl p-4">
                    <div className="text-2xl lg:text-3xl font-bold text-amber-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm lg:text-base text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h3>
                  <div className="space-y-6">
                    {values.map((value, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          {value.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                          <p className="text-amber-100 text-sm leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Skilled professionals dedicated to making you look and feel your best
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staff.map((member) => (
                <div 
                  key={member._id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="h-64 relative bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    {/* Team Member Image - Fallback to gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Scissors className="w-16 h-16 mx-auto mb-4 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                        <div className="text-2xl font-bold">{member.name}</div>
                        <div className="text-amber-100">{member.role}</div>
                      </div>
                    </div>
                    
                    {/* In real app, you would use an actual image:
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    /> */}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                        {member.experience}+ years
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.specialties.slice(0, 3).map((specialty, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium hover:bg-amber-100 hover:text-amber-800 transition-colors duration-200"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {staff.length === 0 && !loading && (
            <div className="text-center py-12">
              <div className="bg-white rounded-2xl p-12 shadow-lg max-w-md mx-auto">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Team Members Found</h3>
                <p className="text-gray-500 mb-4">
                  We're currently updating our team information.
                </p>
                <Link 
                  href="/contact"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-xl font-medium transition-colors duration-200 inline-block"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Visit Our Salon
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                    <p>123 Barber Street<br />Downtown District<br />City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 7:00 PM<br />
                       Saturday: 9:00 AM - 6:00 PM<br />
                       Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Contact</h3>
                    <p>
                      <a href="tel:+15551234567" className="hover:text-amber-600 transition-colors duration-200">(555) 123-4567</a><br />
                      <a href="mailto:info@gentsgrooming.com" className="hover:text-amber-600 transition-colors duration-200">info@gentsgrooming.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-1 shadow-2xl">
                <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
                  {/* Map placeholder with background image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 opacity-10"></div>
                  <div className="text-center text-gray-500 relative z-10">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-amber-600" />
                    <p className="text-lg font-semibold mb-2">Our Location</p>
                    <p className="text-sm">123 Barber Street, Downtown</p>
                    <p className="text-sm">Interactive Map Integration</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/cta-background.jpg"
            alt="Barbershop CTA Background"
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-amber-800/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Ready for a premium grooming experience? Book your appointment today and discover why we're the top choice for gentlemen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+15551234567"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}