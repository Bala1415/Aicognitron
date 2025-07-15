import React from 'react';

function OfficeBearersSection() {
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
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        <h2 style={{ 
          fontSize: '3rem', 
          fontWeight: 800, 
          color: '#70a1ff', 
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Office Bearers
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <TeamMemberCard 
            name="John Doe"
            position="President"
            description="Leading the club's vision and strategic initiatives in AI innovation"
            email="president@aicognitron.club"
          />
          <TeamMemberCard 
            name="Jane Smith"
            position="Vice President"
            description="Supporting operations and coordinating academic partnerships"
            email="vp@aicognitron.club"
          />
          <TeamMemberCard 
            name="Alex Johnson"
            position="Technical Lead"
            description="Overseeing technical projects and workshop development"
            email="tech@aicognitron.club"
          />
          <TeamMemberCard 
            name="Sarah Wilson"
            position="Events Coordinator"
            description="Managing events, workshops, and external collaborations"
            email="events@aicognitron.club"
          />
          <TeamMemberCard 
            name="Mike Chen"
            position="Research Head"
            description="Leading research initiatives and academic collaborations"
            email="research@aicognitron.club"
          />
          <TeamMemberCard 
            name="Emily Davis"
            position="Outreach Manager"
            description="Building community relationships and promoting club activities"
            email="outreach@aicognitron.club"
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
            Want to Get Involved?
          </h3>
          <p style={{
            color: '#dff9fb',
            fontSize: '1.1rem',
            marginBottom: '1.5rem'
          }}>
            Join our team and help shape the future of AI and Data Science at our institution!
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
            transition: 'all 0.3s ease'
          }}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ name, position, description, email }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.08)',
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(126, 214, 223, 0.2)',
      transition: 'all 0.3s ease',
      textAlign: 'center'
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = 'translateY(-5px)';
      e.target.style.boxShadow = '0 12px 40px rgba(126, 214, 223, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
    }}>
      {/* Avatar placeholder */}
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #7ed6df, #70a1ff)',
        margin: '0 auto 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#000'
      }}>
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#70a1ff',
        marginBottom: '0.5rem'
      }}>
        {name}
      </h3>
      
      <div style={{
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: '#7ed6df',
        marginBottom: '1rem'
      }}>
        {position}
      </div>
      
      <p style={{
        color: '#dff9fb',
        lineHeight: '1.5',
        marginBottom: '1.5rem',
        fontSize: '0.95rem'
      }}>
        {description}
      </p>
      
      <a href={`mailto:${email}`} style={{
        color: '#7ed6df',
        textDecoration: 'none',
        fontSize: '0.9rem',
        padding: '0.5rem 1rem',
        border: '1px solid rgba(126, 214, 223, 0.3)',
        borderRadius: '15px',
        transition: 'all 0.3s ease',
        display: 'inline-block'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'rgba(126, 214, 223, 0.1)';
        e.target.style.borderColor = '#7ed6df';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'transparent';
        e.target.style.borderColor = 'rgba(126, 214, 223, 0.3)';
      }}>
        {email}
      </a>
    </div>
  );
}

export default OfficeBearersSection;
