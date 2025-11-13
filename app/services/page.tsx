import { 
  Scissors, 
  Sparkles, 
  Zap, 
  Settings,
  Droplets,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Star
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      icon: <Scissors className="w-12 h-12" />,
      title: 'Classic Haircut',
      description: 'Professional haircut with precision styling and finishing',
      price: 35,
      duration: 30,
      features: ['Precision cutting', 'Style consultation', 'Hair wash', 'Professional styling'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Beard Grooming',
      description: 'Expert beard trim, shape, and conditioning',
      price: 25,
      duration: 20,
      features: ['Beard trimming', 'Shape design', 'Hot towel', 'Beard oil'],
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Hair Coloring',
      description: 'Premium hair coloring and treatment services',
      price: 65,
      duration: 60,
      features: ['Color consultation', 'Premium products', 'Root touch-up', 'Color sealing'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: 'Hair Treatment',
      description: 'Specialized hair treatments for health and vitality',
      price: 45,
      duration: 45,
      features: ['Deep conditioning', 'Scalp treatment', 'Hair repair', 'Moisturizing'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: 'Royal Shave',
      description: 'Traditional straight razor shave experience',
      price: 40,
      duration: 30,
      features: ['Hot towel prep', 'Straight razor', 'After-shave', 'Face massage'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: 'Complete Package',
      description: 'Full grooming experience with all premium services',
      price: 85,
      duration: 90,
      features: ['Haircut & style', 'Beard grooming', 'Facial treatment', 'Head massage'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const features = [
    { icon: <Clock className="w-8 h-8" />, title: 'Flexible Timing', description: 'Open 7 days a week' },
    { icon: <Shield className="w-8 h-8" />, title: 'Hygiene First', description: 'Sanitized equipment' },
    { icon: <Star className="w-8 h-8" />, title: 'Expert Staff', description: 'Certified professionals' },
    { icon: <CheckCircle className="w-8 h-8" />, title: 'Quality Products', description: 'Premium brands' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/barbershop-hero.jpg"
            alt="Professional Barbershop Interior"
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 border border-amber-400/30 mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            Premium Grooming Services
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Our
            <span className="block text-amber-400">Services</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Premium grooming services designed for the modern gentleman. 
            Experience the difference with our expert barbers.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">5★</div>
              <div className="text-gray-300">Rated Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">1000+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
          </div>

          <Link 
            href="/booking"
            className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <span>Book Appointment</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-600 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Premium Grooming Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of expert services designed to keep you looking sharp
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${service.color} p-8 text-white relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">${service.price}</div>
                        <div className="text-white/80">{service.duration} min</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mt-6 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/booking"
                    className="inline-block w-full bg-amber-500 hover:bg-amber-600 text-white text-center py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience premium grooming services with our expert barbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+15551234567"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}