import React from 'react';
import Form from '../Component/Form';
import Footer from '../Component/Footer';
import BlogImg from '../assets/blog.webp'; // Corrected import path

function Blog() {

  const blogs = [
    { id: 1, title: 'Blog 1', content: 'Content of Blog 1', imageUrl: BlogImg },
    { id: 2, title: 'Blog 2', content: 'Content of Blog 2', imageUrl: BlogImg},
    { id: 3, title: 'Blog 3', content: 'Content of Blog 3', imageUrl: BlogImg},
  ];

  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'rgba(68, 181, 141, 1)', marginTop: '30px', marginBottom: '30px', fontWeight: 600 }}> BLOG </h1>

      <div className="blog-container">
        <div className="grid">
          {blogs.map(blog => (
            <div key={blog.id} className="grid-item">
              <img src={blog.imageUrl} alt="Blog" style={{ width: '100%', height: 'auto' }} />
              <h2 className='blog_title'>{blog.title}</h2>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
