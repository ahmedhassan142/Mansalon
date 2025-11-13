'use client';

import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail,
  CheckCircle,
  Scissors,
  Loader
} from 'lucide-react';

interface Service {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  category: string;
  features: string[];
}

interface AvailableSlot {
  date: string;
  availableSlots: string[];
  bookedSlots: string[];
  totalAvailable: number;
}

export default function BookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [availableSlots, setAvailableSlots] = useState<AvailableSlot | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    serviceId: '',
    barberId: '',
    appointmentDate: '',
    appointmentTime: '',
    specialRequests: ''
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const fetchAvailableSlots = async (date: string) => {
    if (!date) return;
    
    setLoadingSlots(true);
    try {
      const response = await fetch(`/api/booking/availableslots?date=${date}`);
      const data = await response.json();
      setAvailableSlots(data);
    } catch (error) {
      console.error('Error fetching available slots:', error);
    } finally {
      setLoadingSlots(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Fetch available slots when date changes
    if (name === 'appointmentDate') {
      fetchAvailableSlots(value);
    }
  };

  const selectedService = services.find(service => service._id === formData.serviceId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const bookingData = {
        ...formData,
        serviceType: selectedService?.name || '',
        duration: selectedService?.duration || 0,
        price: selectedService?.price || 0
      };

      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          customerName: '',
          customerEmail: '',
          customerPhone: '',
          serviceId: '',
          barberId: '',
          appointmentDate: '',
          appointmentTime: '',
          specialRequests: ''
        });
        setAvailableSlots(null);
      } else {
        const error = await response.json();
        alert(error.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Your appointment has been scheduled successfully. We'll send you a confirmation email shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)'
      }} className="text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Book Appointment
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Schedule your premium grooming experience with our expert stylists
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 text-white text-center">
            <Scissors className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Schedule Your Visit</h2>
            <p className="text-amber-100">Choose your service and preferred time slot</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      name="customerEmail"
                      value={formData.customerEmail}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      name="customerPhone"
                      value={formData.customerPhone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Details</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Service *
                  </label>
                  {loading ? (
                    <div className="flex items-center justify-center py-3">
                      <Loader className="w-5 h-5 animate-spin text-amber-600" />
                    </div>
                  ) : (
                    <select
                      name="serviceId"
                      value={formData.serviceId}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
                    >
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service._id} value={service._id}>
                          {service.name} - ${service.price} ({service.duration}min)
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                {selectedService && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <h4 className="font-semibold text-amber-900 mb-2">Service Details:</h4>
                    <p className="text-amber-800 text-sm">{selectedService.description}</p>
                    <ul className="text-amber-700 text-sm mt-2 space-y-1">
                      {selectedService.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Appointment Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    {loadingSlots ? (
                      <div className="flex items-center justify-center py-3 border border-gray-300 rounded-xl">
                        <Loader className="w-5 h-5 animate-spin text-amber-600" />
                        <span className="ml-2 text-gray-500">Loading available slots...</span>
                      </div>
                    ) : (
                      <select
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                        required
                        disabled={!formData.appointmentDate || !availableSlots}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200 disabled:bg-gray-100"
                      >
                        <option value="">{!formData.appointmentDate ? 'Select date first' : 'Choose time slot'}</option>
                        {availableSlots?.availableSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    )}
                  </div>
                  {availableSlots && (
                    <p className="text-sm text-gray-500 mt-2">
                      {availableSlots.totalAvailable} slots available on {new Date(formData.appointmentDate).toLocaleDateString()}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
                    placeholder="Any special requirements or preferences..."
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Booking...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Booking</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}