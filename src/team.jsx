import React, { useState } from 'react';

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    // Level 1
    {
      id: 1,
      name: "Muthusenthil",
      position: "Head of the Department",
      department: "AI & Data Science",
      image: "👨‍🏫",
      description: "Guiding the department and club with vision and leadership.",
      skills: ["Leadership", "Academics", "Mentorship"],
      projects: ["Department Strategy", "Faculty Development"],
      social: {},
      level: "level1"
    },
    {
      id: 2,
      name: "Abinaya",
      position: "Staff",
      department: "AI & Data Science",
      image: "👩‍🏫",
      description: "Supporting club activities and student development.",
      skills: ["Teaching", "Support", "Mentorship"],
      projects: ["Student Guidance"],
      social: {},
      level: "level1"
    },
    {
      id: 3,
      name: "Sherlin Sherly",
      position: "Staff",
      department: "AI & Data Science",
      image: "👩‍🏫",
      description: "Facilitating club events and academic excellence.",
      skills: ["Teaching", "Event Support"],
      projects: ["Event Facilitation"],
      social: {},
      level: "level1"
    },
    // Level 2
    {
      id: 4,
      name: "Pavithran",
      position: "Technical Program Manager",
      department: "AI & Data Science",
      image: "🧑‍💼",
      description: "Managing technical programs and club operations.",
      skills: ["Program Management", "Operations", "Technical Leadership"],
      projects: ["Tech Program Coordination"],
      social: {},
      level: "level2"
    },
    {
      id: 5,
      name: "Aakash",
      position: "Technical Head",
      department: "AI & Data Science",
      image: "🧑‍💻",
      description: "Leading technical teams and innovation initiatives.",
      skills: ["Technical Leadership", "Innovation", "Team Management"],
      projects: ["Innovation Drive"],
      social: {},
      level: "level2"
    },
    {
      id: 6,
      name: "Sethu",
      position: "Chief Technical Officer",
      department: "AI & Data Science",
      image: "🧑‍🔬",
      description: "Overseeing technical strategy and club technology vision.",
      skills: ["Strategy", "Technology Vision", "Leadership"],
      projects: ["Tech Strategy"],
      social: {},
      level: "level2"
    },
    // Level 3
    {
      id: 7,
      name: "Kavirajan",
      position: "Tech Innovate Lead",
      department: "AI & Data Science",
      image: "🧑‍�",
      description: "Driving innovation and new technology initiatives.",
      skills: ["Innovation", "Tech Leadership"],
      projects: ["Innovate Projects"],
      social: {},
      level: "level3"
    },
    {
      id: 8,
      name: "Balavignesh",
      position: "Platform Developer",
      department: "AI & Data Science",
      image: "👨‍💻",
      description: "Developing and maintaining club platforms and tools.",
      skills: ["Development", "Platform Engineering"],
      projects: ["Platform Development"],
      social: {},
      level: "level3"
    },
    {
      id: 9,
      name: "Subha",
      position: "Tech Content Curator",
      department: "AI & Data Science",
      image: "👩‍💻",
      description: "Curating technical content and resources for the club.",
      skills: ["Content Creation", "Technical Writing"],
      projects: ["Content Curation"],
      social: {},
      level: "level3"
    }
  ];

  // Show all members, no filtering
  const filteredMembers = teamMembers;

  return (
    <section style={{ 
      minHeight: 'calc(100vh - 120px)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      textAlign: 'center', 
      zIndex: 2,
      padding: '2rem',
      paddingTop: '4rem'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Animated header */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 
            className="team-header"
            style={{ 
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
              fontWeight: 800, 
              background: 'linear-gradient(45deg, #7ed6df, #70a1ff, #ff6b6b)',
              backgroundSize: '300% 300%',
              animation: 'gradientShift 3s ease infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1rem'
            }}
          >
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

      {/* No filter buttons, all members shown below */}
        </div>
        
        {/* Team grid */}
        <div 
          className="team-grid"
          style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            marginBottom: '3rem'
          }}
        >
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
            transform: translate3d(0, 30px, 0); 
          }
          to { 
            opacity: 1; 
            transform: translate3d(0, 0, 0); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale3d(1, 1, 1); }
          50% { transform: scale3d(1.05, 1.05, 1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translate3d(0, 0, 0) rotateZ(0deg); }
          50% { transform: translate3d(0, -10px, 0) rotateZ(5deg); }
        }
        
        /* Performance optimizations for all devices */
        * {
          -webkit-transform: translateZ(0);
          -moz-transform: translateZ(0);
          -ms-transform: translateZ(0);
          -o-transform: translateZ(0);
          transform: translateZ(0);
        }
        
        .team-card {
          will-change: transform, opacity;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        .team-card:hover {
          transform: translate3d(0, -10px, 0) scale3d(1.02, 1.02, 1);
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .team-card {
            padding: 2rem !important;
          }
          
          .team-header {
            font-size: clamp(1.8rem, 6vw, 2.5rem) !important;
          }
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
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

// Enhanced member card with optimized animations for all devices
function EnhancedMemberCard({ member, index, onClick, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="team-card"
      style={{
        background: isSelected 
          ? 'linear-gradient(135deg, rgba(126, 214, 223, 0.2) 0%, rgba(112, 161, 255, 0.2) 100%)'
          : isHovered 
            ? 'rgba(255,255,255,0.12)' 
            : 'rgba(255,255,255,0.08)',
        borderRadius: '25px',
        padding: '2.5rem',
        border: `2px solid ${isSelected ? '#7ed6df' : 'rgba(126, 214, 223, 0.2)'}`,
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: isHovered 
          ? '0 20px 40px rgba(126, 214, 223, 0.25)' 
          : '0 8px 25px rgba(0, 0, 0, 0.2)',
        animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Optimized floating particles - only show on desktop */}
      {isHovered && window.innerWidth > 768 && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                background: '#7ed6df',
                borderRadius: '50%',
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animation: `float 2s ease-in-out infinite ${i * 0.5}s`,
                opacity: 0.7
              }}
            />
          ))}
        </div>
      )}

      <div style={{
        fontSize: '5rem',
        marginBottom: '1.5rem',
        animation: isHovered ? 'pulse 2s ease-in-out infinite' : 'none'
      }}>
        {member.image}
      </div>
      
      <h3 style={{
        fontSize: '1.6rem',
        fontWeight: 'bold',
        color: '#7ed6df',
        marginBottom: '0.5rem'
      }}>
        {member.name}
      </h3>
      
      <div style={{
        fontSize: '1.2rem',
        fontWeight: '600',
        background: 'linear-gradient(45deg, #70a1ff, #7ed6df)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '0.5rem'
      }}>
        {member.position}
      </div>
      
      <div style={{
        fontSize: '0.9rem',
        color: '#b2bec3',
        marginBottom: '1rem',
        fontStyle: 'italic'
      }}>
        {member.department}
      </div>
      
      <p style={{
        color: '#dff9fb',
        fontSize: '1rem',
        lineHeight: '1.5',
        textAlign: 'left',
        marginBottom: '1.5rem'
      }}>
        {member.description}
      </p>

      {/* Skills tags */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1rem'
      }}>
        {member.skills.slice(0, 3).map(skill => (
          <span key={skill} style={{
            background: 'rgba(126, 214, 223, 0.2)',
            color: '#7ed6df',
            padding: '0.3rem 0.8rem',
            borderRadius: '15px',
            fontSize: '0.8rem',
            fontWeight: '500'
          }}>
            {skill}
          </span>
        ))}
      </div>

      {/* Click indicator */}
      <div style={{
        fontSize: '0.9rem',
        color: '#70a1ff',
        fontWeight: 'bold',
        opacity: isHovered ? 1 : 0.7,
        transition: 'opacity 0.3s ease'
      }}>
        Click to view details →
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
