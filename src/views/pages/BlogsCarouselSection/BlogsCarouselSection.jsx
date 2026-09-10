import Page from '../../layouts/Page/Page';
import BlogsCarousel from '../../../components/BlogsCarousel/BlogsCarousel';
import blogsData from '../../../data/blogs.json';
import './BlogsCarouselSection.css';

function BlogsCarouselSection({ thisRef }) {
  return (
    <Page>
      <div className="blogs-section-outer" ref={thisRef}>
        <h1>Blogs</h1>
        <BlogsCarousel blogs={blogsData} />
      </div>
    </Page>
  );
}

export default BlogsCarouselSection;
