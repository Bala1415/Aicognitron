import React from 'react';

function BlogsSection() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
        }
        
        .blogs-section {
          max-width: 100vw;
          overflow-x: hidden;
        }
      `}</style>
      <section className="blogs-section" style={{ 
        minHeight: 'calc(100vh - 120px)', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        zIndex: 2,
        padding: '2rem',
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden'
      }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        <h2 style={{ 
          fontSize: '3rem', 
          fontWeight: 800, 
          color: '#70a1ff', 
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Latest Blogs & Articles
        </h2>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#dff9fb',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          Insights, tutorials, and discoveries from our AI & Data Science community
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <BlogCard 
            title="Getting Started with Machine Learning"
            author="Alex Johnson"
            date="July 10, 2025"
            excerpt="A comprehensive guide for beginners to understand the fundamentals of machine learning and its applications in real-world scenarios."
            readTime="8 min read"
            category="Tutorial"
          />
          
          <BlogCard 
            title="The Future of Neural Networks"
            author="Sarah Wilson"
            date="July 8, 2025"
            excerpt="Exploring the latest advancements in neural network architectures and their potential impact on artificial intelligence development."
            readTime="12 min read"
            category="Research"
          />
          
          <BlogCard 
            title="Data Visualization Best Practices"
            author="Mike Chen"
            date="July 5, 2025"
            excerpt="Learn how to create compelling and informative visualizations that tell meaningful stories with your data."
            readTime="6 min read"
            category="Tips"
          />
          
          <BlogCard 
            title="AI Ethics in Modern Applications"
            author="Emily Davis"
            date="July 3, 2025"
            excerpt="Discussing the importance of ethical considerations in AI development and deployment across various industries."
            readTime="10 min read"
            category="Ethics"
          />
          
          <BlogCard 
            title="Building Your First Chatbot"
            author="John Doe"
            date="June 30, 2025"
            excerpt="Step-by-step tutorial on creating an intelligent chatbot using natural language processing techniques."
            readTime="15 min read"
            category="Project"
          />
          
          <BlogCard 
            title="Deep Learning for Computer Vision"
            author="Jane Smith"
            date="June 28, 2025"
            excerpt="Understanding how convolutional neural networks revolutionize image recognition and computer vision applications."
            readTime="11 min read"
            category="Deep Learning"
          />
        </div>

        <div style={{
          textAlign: 'center',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '20px',
          padding: '2rem',
          border: '1px solid rgba(126, 214, 223, 0.2)'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#7ed6df',
            marginBottom: '1rem'
          }}>
            Want to Contribute?
          </h3>
          <p style={{
            color: '#dff9fb',
            fontSize: '1.1rem',
            marginBottom: '1.5rem'
          }}>
            Share your knowledge and insights with our community. Write for our blog!
          </p>
          <button style={{
            background: 'linear-gradient(45deg, #7ed6df, #70a1ff)',
            color: '#000',
            border: 'none',
            padding: '0.8rem 2rem',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginRight: '1rem'
          }}>
            Submit Article
          </button>
          <button style={{
            background: 'transparent',
            color: '#7ed6df',
            border: '2px solid #7ed6df',
            padding: '0.8rem 2rem',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            View All Posts
          </button>
        </div>
      </div>
    </section>
    </>
  );
}

function BlogCard({ title, author, date, excerpt, readTime, category }) {
  const getCategoryColor = (cat) => {
    const colors = {
      'Tutorial': '#7ed6df',
      'Research': '#70a1ff',
      'Tips': '#ff7675',
      'Ethics': '#fd79a8',
      'Project': '#fdcb6e',
      'Deep Learning': '#6c5ce7'
    };
    return colors[cat] || '#7ed6df';
  };

  return (
    <article style={{
      background: 'rgba(255,255,255,0.08)',
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(126, 214, 223, 0.2)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = 'translateY(-5px)';
      e.target.style.boxShadow = '0 12px 40px rgba(126, 214, 223, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <span style={{
          background: getCategoryColor(category),
          color: '#000',
          padding: '0.3rem 0.8rem',
          borderRadius: '15px',
          fontSize: '0.8rem',
          fontWeight: 'bold'
        }}>
          {category}
        </span>
        <span style={{
          color: '#b2bec3',
          fontSize: '0.9rem'
        }}>
          {readTime}
        </span>
      </div>
      
      <h3 style={{
        fontSize: '1.4rem',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: '1rem',
        lineHeight: '1.3'
      }}>
        {title}
      </h3>
      
      <p style={{
        color: '#dff9fb',
        lineHeight: '1.6',
        marginBottom: '1.5rem',
        fontSize: '0.95rem'
      }}>
        {excerpt}
      </p>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(126, 214, 223, 0.2)'
      }}>
        <div>
          <div style={{
            color: '#7ed6df',
            fontWeight: 'bold',
            fontSize: '0.9rem'
          }}>
            {author}
          </div>
          <div style={{
            color: '#b2bec3',
            fontSize: '0.8rem'
          }}>
            {date}
          </div>
        </div>
        
        <button style={{
          background: 'transparent',
          color: '#7ed6df',
          border: '1px solid rgba(126, 214, 223, 0.3)',
          padding: '0.5rem 1rem',
          borderRadius: '15px',
          fontSize: '0.9rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(126, 214, 223, 0.1)';
          e.target.style.borderColor = '#7ed6df';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.borderColor = 'rgba(126, 214, 223, 0.3)';
        }}>
          Read More
        </button>
      </div>
    </article>
  );
}

export default BlogsSection;
