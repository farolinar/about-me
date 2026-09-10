import { useState, useEffect } from 'react';
import Page from '../../layouts/Page/Page';
import BlogCard from '../../../components/BlogCard/BlogCard';
import BlogPagination from '../../../components/BlogPagination/BlogPagination';
import blogsData from '../../../data/blogs.json';
import './BlogsPage.css';

const ITEMS_PER_PAGE = 9;

function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const totalPages = Math.ceil(blogsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = blogsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Page last>
      <div className="blogs-page-outer">
        <h1 className="blogs-page-title">All Blogs</h1>
        <p className="blogs-page-subtitle">{"// THOUGHTS, ARCHITECTURE & CODE"}</p>

        <div className="blogs-page-grid">
          {paginatedBlogs.map((blog, index) => (
            <BlogCard data={blog} key={`blogs-page-card-${blog.id ?? index}`} />
          ))}
        </div>

        {blogsData.length === 0 && (
          <p className="blogs-empty-message">{"// No blog posts found."}</p>
        )}

        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </Page>
  );
}

export default BlogsPage;
