import React from 'react';

function AboutSection() {
  return (
    <section style={{ 
      minHeight: 'calc(100vh - 120px)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      zIndex: 2,
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontSize: '3rem', 
          fontWeight: 800, 
          color: '#70a1ff', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          About AI Cognitron Club
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.08)',
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
              Our Mission
            </h3>
            <p style={{
              color: '#dff9fb',
              lineHeight: '1.6',
              fontSize: '1.1rem'
            }}>
              To foster innovation and excellence in Artificial Intelligence and Data Science, 
              creating a community of learners and practitioners who will shape the future of technology.
            </p>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.08)',
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
              Our Vision
            </h3>
            <p style={{
              color: '#dff9fb',
              lineHeight: '1.6',
              fontSize: '1.1rem'
            }}>
              To be the leading student organization that bridges the gap between academic learning 
              and industry applications in AI and Data Science.
            </p>
          </div>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '20px',
          padding: '2.5rem',
          border: '1px solid rgba(112, 161, 255, 0.2)',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#70a1ff',
            marginBottom: '1.5rem'
          }}>
            What We Do
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <ActivityCard 
              title="Workshops"
              description="Hands-on learning sessions on latest AI/ML technologies"
            />
            <ActivityCard 
              title="Projects"
              description="Collaborative projects solving real-world problems"
            />
            <ActivityCard 
              title="Competitions"
              description="Hackathons and data science competitions"
            />
            <ActivityCard 
              title="Networking"
              description="Connect with industry professionals and peers"
            />
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <p style={{
            fontSize: '1.2rem',
            color: '#dff9fb',
            fontStyle: 'italic'
          }}>
            "Artificial Intelligence is the new electricity" - Andrew Ng
          </p>
        </div>
      </div>
    </section>
  );
}

function ActivityCard({ title, description }) {
  return (
    <div style={{
      padding: '1.5rem',
      borderRadius: '15px',
      background: 'rgba(126, 214, 223, 0.1)',
      border: '1px solid rgba(126, 214, 223, 0.3)',
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.target.style.background = 'rgba(126, 214, 223, 0.15)';
      e.target.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
      e.target.style.background = 'rgba(126, 214, 223, 0.1)';
      e.target.style.transform = 'scale(1)';
    }}>
      <h4 style={{
        fontSize: '1.3rem',
        fontWeight: 'bold',
        color: '#7ed6df',
        marginBottom: '0.5rem'
      }}>
        {title}
      </h4>
      <p style={{
        color: '#dff9fb',
        fontSize: '0.95rem'
      }}>
        {description}
      </p>
    </div>
  );
}

export default AboutSection;
