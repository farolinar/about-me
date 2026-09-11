import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";
import "./BlogsCarousel.css";

function BlogsCarousel({ blogs = [] }) {
  const navigate = useNavigate();
  const topBlogs = blogs.slice(0, 5);

  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth <= 900) {
        setCardsToShow(1);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const maxIndex = Math.max(0, topBlogs.length - cardsToShow);

  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [cardsToShow, maxIndex, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const totalDots = maxIndex + 1;

  useEffect(() => {
    if (topBlogs.length <= cardsToShow) {
      setCardsToShow(topBlogs.length);
    }
  }, [topBlogs.length]);

  return (
    <div className="blogs-carousel-container">
      <div className="blogs-carousel-controls">
        <button
          className={`carousel-nav-btn prev ${
            topBlogs.length <= cardsToShow ? "is-hidden" : ""
          }`}
          onClick={handlePrev}
          aria-label="Previous Blog"
        >
          <span>◀</span>
        </button>

        <div
          className="carousel-track-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${activeIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {topBlogs.map((blog, index) => (
              <div
                className="carousel-slide"
                key={`carousel-item-${blog.id ?? index}`}
                style={{ flex: `0 0 ${100 / cardsToShow}%` }}
              >
                <BlogCard data={blog} />
              </div>
            ))}
          </div>
        </div>

        <button
          className={`carousel-nav-btn next ${
            topBlogs.length <= cardsToShow ? "is-hidden" : ""
          }`}
          onClick={handleNext}
          aria-label="Next Blog"
        >
          <span>▶</span>
        </button>
      </div>

      {totalDots > 1 && (
        <div className="carousel-dots">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={`dot-${index}`}
              className={`carousel-dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className="see-more-wrapper">
        <button className="see-more-btn" onClick={() => navigate("/blogs")}>
          <span>See More Blogs →</span>
        </button>
      </div>
    </div>
  );
}

export default BlogsCarousel;
