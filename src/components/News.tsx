import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function News() {
  const featuredNews = useQuery(api.news.getFeaturedNews);

  // Example news data for display
  const exampleNews = [
    {
      title: "Martimma Expands Distribution Network to Northern Nigeria",
      excerpt: "New strategic partnerships and infrastructure investments strengthen our presence across key northern states.",
      content: "Full article content...",
      category: "expansion",
      publishedAt: Date.now() - 86400000, // 1 day ago
      featured: true,
      imageUrl: "/api/placeholder/600/400"
    },
    {
      title: "Sustainability Initiative: Green Energy Integration",
      excerpt: "Martimma announces major investment in renewable energy solutions and carbon reduction programs.",
      content: "Full article content...",
      category: "sustainability",
      publishedAt: Date.now() - 172800000, // 2 days ago
      featured: true,
      imageUrl: "/api/placeholder/600/400"
    },
    {
      title: "Industry Recognition: Excellence in Safety Standards",
      excerpt: "Martimma receives prestigious safety award from the Nigerian National Petroleum Corporation.",
      content: "Full article content...",
      category: "awards",
      publishedAt: Date.now() - 259200000, // 3 days ago
      featured: true,
      imageUrl: "/api/placeholder/600/400"
    }
  ];

  const displayNews = featuredNews || exampleNews;

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      expansion: "bg-martimma-blue",
      sustainability: "bg-martimma-green",
      awards: "bg-martimma-gold",
      default: "bg-gray-600"
    };
    return colors[category] || colors.default;
  };

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-martimma-blue mb-6">
            News & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments, industry insights, 
            and company milestones from Martimma Global Services.
          </p>
        </div>

        {/* Featured News */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayNews.map((article, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Article Image */}
              <div className="h-48 bg-gradient-to-br from-martimma-blue to-martimma-green flex items-center justify-center relative">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                  <p className="text-sm font-medium opacity-90">NEWS ARTICLE</p>
                </div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 ${getCategoryColor(article.category)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                  {article.category.toUpperCase()}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {formatDate(article.publishedAt)}
                </div>
                
                <h3 className="text-xl font-bold text-martimma-blue mb-3 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <button className="text-martimma-blue font-semibold hover:text-blue-700 transition-colors flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Industry Insights */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-martimma-blue mb-4">Industry Insights</h3>
            <p className="text-gray-600">Expert analysis and market trends in Nigeria's oil and gas sector</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-martimma-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-martimma-blue mb-2">Market Analysis Q4 2024</h4>
                <p className="text-gray-600 text-sm">Comprehensive review of downstream market trends and future projections.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-martimma-green rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-martimma-blue mb-2">Energy Transition Report</h4>
                <p className="text-gray-600 text-sm">Nigeria's path towards sustainable energy and the role of downstream companies.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-martimma-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View All Insights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
