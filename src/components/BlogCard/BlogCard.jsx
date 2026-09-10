import { useState } from 'react';
import VaporwaveWindow from '../VaporwaveWindow/VaporwaveWindow';
import './BlogCard.css';

function BlogCard({ data }) {
  const [imgError, setImgError] = useState(false);

  const handleCardClick = () => {
    if (data.url) {
      window.open(data.url, '_blank', 'noopener,noreferrer');
    }
  };

  const defaultThumbnail = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80";

  return (
    <VaporwaveWindow
      title={data.category ? `// ${data.category}` : '// ARTICLE'}
      className="blog-card-window"
    >
      <div className="blog-card-container" onClick={handleCardClick}>
        <div className="blog-card-thumbnail-wrapper">
          <img
            src={imgError ? defaultThumbnail : (data.thumbnail || defaultThumbnail)}
            alt={data.title}
            className="blog-card-thumbnail"
            onError={() => setImgError(true)}
          />
          <div className="blog-card-category-badge">{data.category}</div>
        </div>
        <div className="blog-card-content">
          <div className="blog-card-meta">
            <span className="blog-card-date">{data.created_at}</span>
          </div>
          <h3 className="blog-card-title">{data.title}</h3>
          <p className="blog-card-description">{data.description}</p>
          {data.url && (
            <div className="blog-card-action">
              <span className="blog-card-read-more">
                Read Article ↗
              </span>
            </div>
          )}
        </div>
      </div>
    </VaporwaveWindow>
  );
}

export default BlogCard;
