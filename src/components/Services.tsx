import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Services() {
  const services = useQuery(api.services.getAllServices);

  // Enhanced services data with 4-panel grid focus
  const coreServices = [
    {
      title: "Marine Bunkering",
      description: "Comprehensive marine fuel supply and offshore support services with state-of-the-art vessels and equipment.",
      category: "bunkering",
      features: ["Vessel Operations", "Offshore Support", "Marine Logistics", "Port Services"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1z" />
        </svg>
      ),
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Petroleum Distribution",
      description: "Nationwide distribution of premium motor spirit (PMS), automotive gas oil (AGO), and dual purpose kerosene (DPK).",
      category: "distribution",
      features: ["Quality Assurance", "Nationwide Coverage", "Bulk Supply", "Real-time Tracking"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
        </svg>
      ),
      color: "from-green-600 to-green-800"
    },
    {
      title: "Retail Network",
      description: "Premium retail stations with modern infrastructure and comprehensive support for our retail partners.",
      category: "retail",
      features: ["Partner Support", "Training Programs", "Marketing Assistance", "Quality Control"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      color: "from-yellow-600 to-yellow-800"
    },
    {
      title: "Logistics & Transport",
      description: "Advanced fleet management and transportation services ensuring safe and timely delivery across Nigeria.",
      category: "transport",
      features: ["Modern Fleet", "GPS Tracking", "Safety Protocols", "24/7 Monitoring"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" />
        </svg>
      ),
      color: "from-purple-600 to-purple-800"
    }
  ];

  // Additional services
  const additionalServices = [
    {
      title: "Storage & Terminal Services",
      description: "Strategic storage facilities and terminal operations providing secure and efficient petroleum product handling.",
      category: "value-added",
      features: ["Strategic Locations", "Modern Facilities", "Safety Standards", "Efficient Operations"],
    },
    {
      title: "Consultancy Services",
      description: "Expert advisory services for downstream operations, regulatory compliance, and business optimization.",
      category: "value-added",
      features: ["Expert Advisory", "Regulatory Support", "Business Optimization", "Industry Insights"],
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-martimma-blue mb-6">
            Products & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive downstream oil and gas solutions designed to meet 
            the diverse needs of our customers across Nigeria.
          </p>
        </div>

        {/* Core Services - 4-Panel Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreServices.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100"
            >
              {/* Hover Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-95 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white group-hover:bg-white/20`}>
                    {service.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-martimma-blue mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                      <svg className="w-4 h-4 text-martimma-green mr-2 flex-shrink-0 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover CTA */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-white/20 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors backdrop-blur-sm">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Category Badge */}
              <div className={`absolute top-4 right-4 bg-gradient-to-r ${service.color} text-white px-3 py-1 rounded-full text-xs font-medium opacity-80 group-hover:opacity-100`}>
                {service.category.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {additionalServices.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-martimma-blue mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-martimma-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-martimma-blue to-martimma-green rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h3>
          <p className="text-xl mb-8 opacity-90">
            Discover how our comprehensive solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-martimma-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors transform hover:scale-105">
              Request a Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-martimma-blue transition-colors transform hover:scale-105">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
