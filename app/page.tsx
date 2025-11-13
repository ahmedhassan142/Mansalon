import { 
  Scissors, 
  Sparkles, 
  Clock, 
  Star, 
  ArrowRight,
  Phone,
  CheckCircle,
  Users,
  Award
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Classic Haircut',
      description: 'Professional haircut with precision styling'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Beard Grooming',
      description: 'Expert beard trim and styling'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Hair Coloring',
      description: 'Premium hair coloring services'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Styling',
      description: 'Special occasion styling'
    }
  ];

  const features = [
    { icon: <Clock className="w-6 h-6" />, text: 'Flexible Hours' },
    { icon: <Star className="w-6 h-6" />, text: 'Expert Stylists' },
    { icon: <CheckCircle className="w-6 h-6" />, text: 'Quality Products' },
    { icon: <Award className="w-6 h-6" />, text: 'Award Winning' }
  ];

  const testimonials = [
    {
      name: 'Michael Johnson',
      role: 'Regular Client',
      content: 'Best men\'s salon in town! Always leave feeling fresh and confident.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Business Professional',
      content: 'Professional service and attention to detail. Highly recommended!',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'New Client',
      content: 'First time here and absolutely impressed. Great atmosphere and skilled barbers.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/barbershop-interior.jpg"
            alt="Luxury Barbershop Interior"
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 border border-amber-400/30 mb-6">
                <Star className="w-4 h-4 mr-2" />
                Premium Men's Grooming
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium
                <span className="block text-amber-400">Men's Grooming</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
                Experience the art of traditional barbering with modern techniques. 
                Where style meets precision for the modern gentleman.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">15+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">5★</div>
                  <div className="text-gray-300 text-sm">Rated Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">1000+</div>
                  <div className="text-gray-300 text-sm">Happy Clients</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/booking"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href="tel:+15551234567"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg text-center transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Features Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm hover:bg-white/15 transition duration-300">
                      <div className="flex justify-center mb-2 text-amber-400">
                        {feature.icon}
                      </div>
                      <p className="text-sm font-medium text-white">{feature.text}</p>
                    </div>
                  ))}
                </div>
                
                {/* Trust Badge */}
                <div className="mt-6 p-3 bg-amber-500/20 rounded-lg border border-amber-400/30 text-center">
                  <p className="text-amber-300 text-sm font-semibold">
                    🏆 Award Winning Service 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
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

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the finest grooming services tailored for the modern gentleman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link 
                  href="/services"
                  className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-700 hover:border-amber-500/30 transition duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-amber-400 fill-current" 
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-amber-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta/barber-chair.jpg"
            alt="Luxury Barber Chair"
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-amber-800/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready for a New Look?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience premium grooming services with our expert barbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Book Now
            </Link>
            <a
              href="tel:+15551234567"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              Call: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}