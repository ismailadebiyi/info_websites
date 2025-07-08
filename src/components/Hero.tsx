import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Industry showcase images data
  const industryImages = [
    {
      title: "Petroleum Distribution Network",
      description: "State-of-the-art distribution facilities across Nigeria",
      category: "Distribution"
    },
    {
      title: "Marine Bunkering Operations",
      description: "Advanced marine fuel supply and offshore services",
      category: "Bunkering"
    },
    {
      title: "Retail Network Excellence",
      description: "Premium retail stations with modern infrastructure",
      category: "Retail"
    },
    {
      title: "Logistics & Transportation",
      description: "Modern fleet ensuring safe and timely deliveries",
      category: "Transport"
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % industryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-martimma-blue/95 to-martimma-green/85">
          {/* Slider Container */}
          <div className="relative w-full h-full overflow-hidden">
            {industryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-30' : 'opacity-0'
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-martimma-blue/20 to-martimma-green/20 flex items-center justify-center">
                  <div className="text-center text-white/40">
                    <svg className="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      {image.category === "Distribution" && (
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      )}
                      {image.category === "Bunkering" && (
                        <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                      )}
                      {image.category === "Retail" && (
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      )}
                      {image.category === "Transport" && (
                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                      )}
                    </svg>
                    <p className="text-lg font-semibold">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Powering Nigeria's
            <span className="block text-martimma-gold">Energy Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading the downstream oil and gas sector with innovative solutions, 
            reliable distribution networks, and unwavering commitment to excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-martimma-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Our Services
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-martimma-blue transition-all duration-300 transform hover:scale-105">
              Learn About Us
            </button>
          </div>

          {/* Industry Showcase Indicator */}
          <div className="mb-8">
            <p className="text-white/70 text-sm mb-3">Industry Showcase</p>
            <div className="flex justify-center space-x-2">
              {industryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-martimma-gold scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            <p className="text-white/80 text-sm mt-2 font-medium">
              {industryImages[currentSlide].title}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-martimma-gold mb-2">15+</div>
            <div className="text-white/80 text-sm md:text-base">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-martimma-gold mb-2">500+</div>
            <div className="text-white/80 text-sm md:text-base">Distribution Points</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-martimma-gold mb-2">36</div>
            <div className="text-white/80 text-sm md:text-base">States Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-martimma-gold mb-2">24/7</div>
            <div className="text-white/80 text-sm md:text-base">Customer Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
