export default function ValuePillars() {
  const pillars = [
    {
      title: "Speed",
      description: "Lightning-fast delivery and response times",
      stat: "99.7%",
      statLabel: "On-Time Deliveries",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-martimma-blue to-blue-600"
    },
    {
      title: "ISO-Certified",
      description: "International standards in quality management",
      stat: "ISO 9001",
      statLabel: "Quality Certified",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-martimma-green to-green-600"
    },
    {
      title: "Integrity",
      description: "Unwavering commitment to ethical business practices",
      stat: "100%",
      statLabel: "Compliance Rate",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "from-martimma-gold to-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-martimma-blue mb-6">
            Why Choose Martimma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our core values drive everything we do, ensuring exceptional service 
            and building lasting partnerships across Nigeria's energy sector.
          </p>
        </div>

        {/* Value Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {pillar.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-martimma-blue mb-4 group-hover:text-blue-700 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {pillar.description}
              </p>

              {/* Stats Overlay */}
              <div className="bg-gray-50 rounded-xl p-4 group-hover:bg-white transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                      {pillar.stat}
                    </div>
                    <div className="text-sm text-gray-600">{pillar.statLabel}</div>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${pillar.color} rounded-lg flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity duration-300`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${pillar.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Trust Badges Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-martimma-blue mb-4">Certified Excellence</h3>
            <p className="text-gray-600">Recognized by leading industry bodies and regulatory authorities</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* ISO 9001 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-martimma-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-martimma-blue mb-1">ISO 9001</h4>
              <p className="text-sm text-gray-600">Quality Management</p>
            </div>

            {/* ISO 14001 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-martimma-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-martimma-blue mb-1">ISO 14001</h4>
              <p className="text-sm text-gray-600">Environmental Management</p>
            </div>

            {/* ISO 45001 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-martimma-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h4 className="font-semibold text-martimma-blue mb-1">ISO 45001</h4>
              <p className="text-sm text-gray-600">Health & Safety</p>
            </div>

            {/* DPR/PPRA Compliance */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-martimma-blue mb-1">DPR/PPRA</h4>
              <p className="text-sm text-gray-600">Regulatory Compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
