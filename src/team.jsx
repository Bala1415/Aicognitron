import React, { useState } from 'react';

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [filter, setFilter] = useState('all');

  const teamMembers = [
    {
      id: 1,
      name: "Kavirajan E",
      position: "Coordinator",
      department: "AI & Data Science",
      image: "🤖",
      description: "",
      skills: [],
      projects: [],
      level: "senior"
    },
    {
      id: 2,
      name: "Balavignesh A U",
      position: "Coordinator",
      department: "AI & Data Science",
      image: "👩‍💼",
      description: "",
      skills: [],
      projects: [],
      level: "senior"
    },
    {
      id: 3,
      name: "Subhashree",
      position: "Coordinator",
      department: "AI & Data Science",
      image: "👨‍💻",
      description: "",
      skills: [],
      projects: [],
      level: "senior"
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Secretary",
      department: "AI & Data Science",
      image: "👩‍💻",
      description: "Managing documentation and communication",
      skills: ["Documentation", "Communication", "Project Management"],
      projects: ["Club Documentation System", "Newsletter Program"],
      level: "junior"
    },
    {
      id: 5,
      name: "David Kim",
      position: "Event Coordinator",
      department: "AI & Data Science",
      image: "👨‍🎓",
      description: "Organizing hackathons and technical competitions",
      skills: ["Event Planning", "Logistics", "Partnerships"],
      projects: ["AI Hackathon Series", "Industry Partnerships"],
      level: "junior"
    },
    {
      id: 6,
      name: "Lisa Wang",
      position: "Treasurer",
      department: "AI & Data Science",
      image: "👩‍🎓",
      description: "Managing club finances and sponsorships",
      skills: ["Finance", "Budgeting", "Sponsorship"],
      projects: ["Budget Management System", "Sponsorship Program"],
      level: "junior"
    }
  ];

  const filteredMembers = teamMembers.filter(member => 
    filter === 'all' || member.level === filter
  );

  return (
    <section style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      textAlign: 'center',
      zIndex: 2,
      padding: '2vw',
      boxSizing: 'border-box',
      paddingTop: '6vw',
      overflowX: 'hidden',
      background: 'none',
    }}>
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        padding: '0 1vw',
      }}>
        {/* Animated header */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
            fontWeight: 800, 
            background: 'linear-gradient(45deg, #7ed6df, #70a1ff, #ff6b6b)',
            backgroundSize: '300% 300%',
            animation: 'gradientShift 3s ease infinite',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem'
          }}>
            MEET THE TEAM 🚀
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            color: '#dff9fb',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            The brilliant minds driving innovation and building the future of AI
          </p>

          {/* Filter buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            {['all', 'senior', 'junior'].map(filterType => (
              <FilterButton
                key={filterType}
                active={filter === filterType}
                onClick={() => setFilter(filterType)}
                label={filterType === 'all' ? 'All Members' : 
                       filterType === 'senior' ? 'Leadership' : 'Core Members'}
              />
            ))}
          </div>
        </div>
        
        {/* Team grid */}
        <div style={{
          display: 'grid',
          gap: '2vw',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          marginBottom: '3rem',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          {filteredMembers.map((member, index) => (
            <EnhancedMemberCard
              key={member.id}
              member={member}
              index={index}
              onClick={() => setSelectedMember(member)}
              isSelected={selectedMember?.id === member.id}
            />
          ))}
        </div>
        
        {/* Join team section */}
        <JoinTeamSection />
      </div>

      {/* Member detail modal */}
      {selectedMember && (
        <MemberModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
}

// Filter button component
function FilterButton({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active 
          ? 'linear-gradient(45deg, #7ed6df, #70a1ff)' 
          : 'rgba(126, 214, 223, 0.1)',
        color: active ? '#000' : '#7ed6df',
        border: `2px solid ${active ? 'transparent' : '#7ed6df'}`,
        padding: '0.7rem 1.5rem',
        borderRadius: '25px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.target.style.background = 'rgba(126, 214, 223, 0.2)';
          e.target.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.target.style.background = 'rgba(126, 214, 223, 0.1)';
          e.target.style.transform = 'translateY(0)';
        }
      }}
    >
      {label}
    </button>
  );
}

// Enhanced member card with animations
function EnhancedMemberCard({ member, index, onClick, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: isSelected
          ? 'linear-gradient(135deg, rgba(126, 214, 223, 0.2) 0%, rgba(112, 161, 255, 0.2) 100%)'
          : isHovered
            ? 'rgba(255,255,255,0.12)'
            : 'rgba(255,255,255,0.08)',
        borderRadius: '2vw',
        padding: '2vw',
        border: `2px solid ${isSelected ? '#7ed6df' : 'rgba(126, 214, 223, 0.2)'}`,
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transform: isHovered ? 'translateY(-1vw) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered
          ? '0 2vw 4vw rgba(126, 214, 223, 0.3)'
          : '0 0.5vw 2vw rgba(0, 0, 0, 0.2)',
        animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
        minWidth: 0,
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Floating particles effect */}
      {isHovered && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '3px',
                height: '3px',
                background: '#7ed6df',
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float 3s ease-in-out infinite ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div style={{
        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
        marginBottom: '2vw',
        animation: isHovered ? 'pulse 2s ease-in-out infinite' : 'none',
        width: '100%',
        textAlign: 'center',
      }}>
        {member.image}
      </div>
      
      <h3 style={{
        fontSize: 'clamp(1.2rem, 3vw, 2rem)',
        fontWeight: 'bold',
        color: '#7ed6df',
        marginBottom: '0.5vw',
        wordBreak: 'break-word',
      }}>
        {member.name}
      </h3>
      
      <div style={{
        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
        fontWeight: '600',
        background: 'linear-gradient(45deg, #70a1ff, #7ed6df)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '0.5vw',
        wordBreak: 'break-word',
      }}>
        {member.position}
      </div>
      
      <div style={{
        fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
        color: '#b2bec3',
        marginBottom: '1vw',
        fontStyle: 'italic',
        wordBreak: 'break-word',
      }}>
        {member.department}
      </div>
      
      <p style={{
        color: '#dff9fb',
        fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
        lineHeight: '1.5',
        textAlign: 'left',
        marginBottom: '1.5vw',
        wordBreak: 'break-word',
      }}>
        {member.description}
      </p>

      {/* Skills tags */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5vw',
        marginBottom: '1vw',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        {member.skills.slice(0, 3).map(skill => (
          <span key={skill} style={{
            background: 'rgba(126, 214, 223, 0.2)',
            color: '#7ed6df',
            padding: '0.3vw 0.8vw',
            borderRadius: '1vw',
            fontSize: 'clamp(0.7rem, 1vw, 0.9rem)',
            fontWeight: '500',
            wordBreak: 'break-word',
          }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

// Member detail modal
function MemberModal({ member, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '2rem'
    }}
    onClick={onClose}
    >
      <div style={{
        background: 'linear-gradient(135deg, rgba(35, 37, 38, 0.95) 0%, rgba(16, 16, 16, 0.95) 100%)',
        borderRadius: '25px',
        padding: '3rem',
        maxWidth: '600px',
        width: '100%',
        border: '2px solid #7ed6df',
        boxShadow: '0 25px 50px rgba(126, 214, 223, 0.3)',
        animation: 'slideUp 0.3s ease-out'
      }}
      onClick={(e) => e.stopPropagation()}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>
            {member.image}
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#7ed6df',
            marginBottom: '0.5rem'
          }}>
            {member.name}
          </h2>
          
          <div style={{
            fontSize: '1.4rem',
            color: '#70a1ff',
            fontWeight: '600',
            marginBottom: '2rem'
          }}>
            {member.position}
          </div>
        </div>

        <div style={{ textAlign: 'left' }}>
          <h3 style={{ color: '#7ed6df', marginBottom: '1rem' }}>Skills & Expertise</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {member.skills.map(skill => (
              <span key={skill} style={{
                background: 'linear-gradient(45deg, #7ed6df, #70a1ff)',
                color: '#000',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                {skill}
              </span>
            ))}
          </div>

          <h3 style={{ color: '#7ed6df', marginBottom: '1rem' }}>Current Projects</h3>
          <ul style={{ color: '#dff9fb', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            {member.projects.map(project => (
              <li key={project} style={{ marginBottom: '0.5rem' }}>{project}</li>
            ))}
          </ul>
        </div>

        <button onClick={onClose} style={{
          background: 'linear-gradient(45deg, #7ed6df, #70a1ff)',
          color: '#000',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '25px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          width: '100%',
          transition: 'all 0.3s ease'
        }}>
          Close
        </button>
      </div>
    </div>
  );
}

// Join team section
function JoinTeamSection() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(126, 214, 223, 0.1) 0%, rgba(112, 161, 255, 0.1) 100%)',
      borderRadius: '25px',
      padding: '3rem',
      border: '2px solid rgba(126, 214, 223, 0.3)',
      marginTop: '3rem',
      textAlign: 'center'
    }}>
      <h3 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #7ed6df, #70a1ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '1rem'
      }}>
        Join Our Amazing Team! 🌟
      </h3>
      
      <p style={{
        color: '#dff9fb',
        fontSize: '1.2rem',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto 2rem'
      }}>
        Ready to shape the future of AI? We're always looking for passionate individuals 
        to join our mission and make a real impact in the tech world.
      </p>

      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button style={{
          background: 'linear-gradient(45deg, #7ed6df, #70a1ff)',
          color: '#000',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '25px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase'
        }}
        onClick={() => alert('Applications opening soon! 🚀')}
        >
          🚀 Apply Now
        </button>
        
        <button style={{
          background: 'transparent',
          color: '#7ed6df',
          border: '2px solid #7ed6df',
          padding: '1rem 2rem',
          borderRadius: '25px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase'
        }}
        onClick={() => alert('Check out our ongoing projects! 💡')}
        >
          💡 Learn More
        </button>
      </div>
    </div>
  );
}

export default Team;
