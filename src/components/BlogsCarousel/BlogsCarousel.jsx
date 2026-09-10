import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../BlogCard/BlogCard';
import './BlogsCarousel.css';

function BlogsCarousel({ blogs = [] }) {
  const navigate = useNavigate();

  // Top 5 blogs for carousel
  const topBlogs = blogs.slice(0, 5);

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? topBlogs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === topBlogs.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="blogs-carousel-container">
      <div className="blogs-carousel-controls">
        <button className="carousel-nav-btn prev" onClick={handlePrev} aria-label="Previous Blog">
          <span>◀</span>
        </button>
        <div className="carousel-track-wrapper">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {topBlogs.map((blog, index) => (
              <div className="carousel-slide" key={`carousel-item-${blog.id ?? index}`}>
                <BlogCard data={blog} />
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-nav-btn next" onClick={handleNext} aria-label="Next Blog">
          <span>▶</span>
        </button>
      </div>

      <div className="carousel-dots">
        {topBlogs.map((_, index) => (
          <button
            key={`dot-${index}`}
            className={`carousel-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="see-more-wrapper">
        <button className="see-more-btn" onClick={() => navigate('/blogs')}>
          <span>See More Blogs →</span>
        </button>
      </div>
    </div>
  );
}

export default BlogsCarousel;
