'use client';

import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import Image from 'next/image';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const galleryImages = [
    { 
      id: 1, 
      category: 'Haircuts', 
      title: 'Classic Fade',
      image: '/images/gallery/haircut-1.jpg',
      description: 'Sharp fade with textured top'
    },
    { 
      id: 2, 
      category: 'Beard Grooming', 
      title: 'Beard Styling',
      image: '/images/gallery/beard-1.jpg',
      description: 'Professional beard trim and shaping'
    },
    { 
      id: 3, 
      category: 'Haircuts', 
      title: 'Modern Cut',
      image: '/images/gallery/haircut-2.jpg',
      description: 'Contemporary style with clean lines'
    },
    { 
      id: 4, 
      category: 'Coloring', 
      title: 'Hair Color',
      image: '/images/gallery/color-1.jpg',
      description: 'Premium hair coloring service'
    },
    { 
      id: 5, 
      category: 'Beard Grooming', 
      title: 'Trim & Shape',
      image: '/images/gallery/beard-2.jpg',
      description: 'Precision beard trimming'
    },
    { 
      id: 6, 
      category: 'Haircuts', 
      title: 'Executive Style',
      image: '/images/gallery/haircut-3.jpg',
      description: 'Professional business cut'
    },
    { 
      id: 7, 
      category: 'Complete Package', 
      title: 'Full Grooming',
      image: '/images/gallery/package-1.jpg',
      description: 'Complete hair and beard service'
    },
    { 
      id: 8, 
      category: 'Haircuts', 
      title: 'Textured Crop',
      image: '/images/gallery/haircut-4.jpg',
      description: 'Modern textured crop cut'
    },
    { 
      id: 9, 
      category: 'Coloring', 
      title: 'Highlights',
      image: '/images/gallery/color-2.jpg',
      description: 'Professional highlighting service'
    },
    { 
      id: 10, 
      category: 'Complete Package', 
      title: 'Premium Grooming',
      image: '/images/gallery/package-2.jpg',
      description: 'Full premium grooming experience'
    },
    { 
      id: 11, 
      category: 'Beard Grooming', 
      title: 'Luxury Beard Care',
      image: '/images/gallery/beard-3.jpg',
      description: 'Complete beard treatment'
    },
    { 
      id: 12, 
      category: 'Haircuts', 
      title: 'Classic Pompadour',
      image: '/images/gallery/haircut-5.jpg',
      description: 'Vintage pompadour style'
    },
  ];

  const categories = ['All', 'Haircuts', 'Beard Grooming', 'Coloring', 'Complete Package'];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const selectedImageData = selectedImage 
    ? galleryImages.find(img => img.id === selectedImage)
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/gallery-hero.jpg"
            alt="Barbershop Gallery - Our Work Collection"
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
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 border border-amber-400/30 mb-8">
            <ZoomIn className="w-5 h-5 mr-2" />
            Our Work Collection
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Our
            <span className="block text-amber-400">Gallery</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Browse through our work and get inspired for your next transformation. 
            Each image tells a story of precision, style, and craftsmanship.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">100+</div>
              <div className="text-gray-300">Transformations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">4.9★</div>
              <div className="text-gray-300">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">5</div>
              <div className="text-gray-300">Service Categories</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-amber-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-12 bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-amber-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 hover:bg-amber-500 hover:text-white hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                {/* Actual Image with Fallback */}
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={image.image}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  
                  {/* Fallback content if image fails to load */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center hidden">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-2">{image.title}</div>
                      <div className="text-amber-100">{image.category}</div>
                    </div>
                  </div>
                </div>
                
                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-bold text-lg">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {image.category}
                  </span>
                </div>
                
                {/* Zoom Icon Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-white rounded-2xl p-12 shadow-lg max-w-md mx-auto">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-600">
                  <ZoomIn className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Images Found</h3>
                <p className="text-gray-600 mb-4">
                  We don't have any images in the {activeCategory} category yet.
                </p>
                <button
                  onClick={() => setActiveCategory('All')}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-xl font-medium transition-colors duration-200"
                >
                  View All Gallery
                </button>
              </div>
            </div>
          )}

          {/* Gallery CTA */}
          <div className="text-center mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-12 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Inspired by Our Work?
            </h3>
            <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto">
              Ready to get your own transformation? Book an appointment with our expert barbers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking"
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Appointment
              </a>
              <a
                href="/services"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors duration-200 z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="max-w-6xl max-h-full w-full">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative aspect-square lg:aspect-auto lg:h-96">
                  <Image
                    src={selectedImageData.image}
                    alt={selectedImageData.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  
                  {/* Fallback */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center hidden">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-4">{selectedImageData.title}</div>
                      <div className="text-amber-100 text-xl">{selectedImageData.category}</div>
                    </div>
                  </div>
                </div>
                
                {/* Info Section */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {selectedImageData.category}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedImageData.title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {selectedImageData.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Service Details:</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        Professional styling techniques
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        Premium quality products used
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        Expert craftsmanship guaranteed
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8 flex gap-4">
                    <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                      Book This Style
                    </button>
                    <button 
                      onClick={() => setSelectedImage(null)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl font-medium transition-colors duration-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}