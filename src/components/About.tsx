export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-martimma-blue mb-6">
            About Martimma Global Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proudly Nigerian company with global standards, driving innovation 
            in the downstream oil and gas sector since 2008.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-martimma-blue mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to transform Nigeria's energy landscape, Martimma Global Services 
              has grown from a local distributor to a leading player in the downstream oil and gas sector. 
              We combine deep local knowledge with international best practices to deliver exceptional value.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our commitment to excellence, innovation, and sustainable practices has earned us the trust 
              of partners across Nigeria and beyond. We're not just moving energy – we're powering progress.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-martimma-gold mb-2">₦50B+</div>
                <div className="text-sm text-gray-600">Annual Revenue</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-martimma-gold mb-2">1000+</div>
                <div className="text-sm text-gray-600">Employees</div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-martimma-blue to-martimma-green rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
                <p className="text-lg font-semibold">Nigerian Excellence</p>
                <p className="text-sm opacity-80">Global Standards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-martimma-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-martimma-blue mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide reliable, efficient, and sustainable energy solutions that power 
              Nigeria's growth while maintaining the highest standards of safety and environmental responsibility.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-martimma-green rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-martimma-blue mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be West Africa's most trusted and innovative downstream oil and gas company, 
              setting the benchmark for excellence in energy distribution and services.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-martimma-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-martimma-blue mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Integrity, Excellence, Innovation, and Sustainability guide everything we do. 
              We're committed to building lasting relationships and contributing to Nigeria's prosperity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
