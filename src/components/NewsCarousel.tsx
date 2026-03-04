import { useState, useEffect } from 'react';
import { Newspaper } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    category: "Logistics",
    title: "New Trade Routes Opening in 2026",
    description: "Global shipping companies announce faster routes between Asian and South American ports."
  },
  {
    id: 2,
    category: "Economy",
    title: "Global Export Trends: The Rise of Tech",
    description: "Software and technology services now represent 15% of total international trade volume."
  },
  {
    id: 3,
    category: "Sustainability",
    title: "Green Shipping: Carbon-Zero by 2030",
    description: "Major maritime carriers implement hydrogen-powered vessels to reduce environmental impact."
  }
];

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
  <section className="news-section"> {/* Usamos la clase de tu CSS */}
    <div className="container">
      <div className="flex items-center gap-2 mb-8 justify-center">
        <Newspaper className="text-[#FF8C00]" size={24} />
        <h2 className="section-title" style={{marginBottom: 0}}>Global News Feed</h2>
      </div>

      <div className="news-card"> {/* Usamos la clase de tu CSS */}
        <div className="flex flex-col items-center text-center">
          <span style={{color: 'var(--accent-orange)', fontWeight: 'bold', fontSize: '0.8rem'}}>
              {newsItems[currentIndex]?.category}
          </span>
          <h3 style={{margin: '15px 0', color: 'var(--primary-blue)'}}>
              {newsItems[currentIndex]?.title}
          </h3>
          <p style={{color: '#666'}}>
              {newsItems[currentIndex]?.description}
          </p>
        </div>
      </div>
    </div>
  </section>
);
};

export default NewsCarousel;