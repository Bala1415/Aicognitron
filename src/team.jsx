import React, { useState } from 'react';

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      image: "/assets/team/muthusenthil.jpg",
      title: "Dr.Muthusenthil",
      subtitle: "Head of the Department",
      handle: "@muthusenthil",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #4F46E5, #000)",
      url: "https://github.com/",
      department: "AI & Data Science",
      description: "Guiding the department and club with vision and leadership.",
      skills: ["Leadership", "Academics", "Mentorship"],
      projects: ["Department Strategy", "Faculty Development"],
      level: "level1",
      year: "Faculty"
    },
    {
      image: "public/assets/team/Abinaya.jpg",
      title: "Ms.Abinaya",
      subtitle: "Staff",
      handle: "@abinaya",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #000)",
      url: "https://linkedin.com/in/",
      department: "AI & Data Science",
      description: "Supporting club activities and student development.",
      skills: ["Teaching", "Support", "Mentorship"],
      projects: ["Student Guidance"],
      level: "level1",
      year: "Faculty"
    },
    {
      image: "/assets/team/subhree.jpg",
      title: "Ms.Sherlin Sherly",
      subtitle: "Staff",
      handle: "@sherlinsherly",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
      url: "https://github.com/",
      department: "AI & Data Science",
      description: "Facilitating club events and academic excellence.",
      skills: ["Teaching", "Event Support"],
      projects: ["Event Facilitation"],
      level: "level1",
      year: "Faculty"
    },
    // Level 2 - cooordinators  
    {
      image: "public/assets/team/pavithran.jpg",
      title: "Pavithran",
      subtitle: "Technical Program Manager",
      handle: "@pavithran",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
      url: "https://linkedin.com/in/",
      department: "AI & Data Science",
      description: "Managing technical programs and club operations.",
      skills: ["Program Management", "Operations", "Technical Leadership"],
      projects: ["Tech Program Coordination"],
      level: "level2",
      year: "4th Year"
    },
    {
      image: "/assets/team/aakash.jpg",
      title: "Aakash",
      subtitle: "Technical Head",
      handle: "@aakash",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #000)",
      url: "https://github.com/",
      department: "AI & Data Science",
      description: "Leading technical teams and innovation initiatives.",
      skills: ["Technical Leadership", "Innovation", "Team Management"],
      projects: ["Innovation Drive"],
      level: "level2",
      year: "4th Year"
    },
    {
      image: "/assets/team/sethumadhavan.jpg",
      title: "Sethumadhavan",
      subtitle: "Chief Technical Officer",
      handle: "@sethu",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #000)",
      url: "https://aws.amazon.com/",
      department: "AI & Data Science",
      description: "Overseeing technical strategy and club technology vision.",
      skills: ["Strategy", "Technology Vision", "Leadership"],
      projects: ["Tech Strategy"],
      level: "level2",
      year: "4th Year"
    },
    // Level 3 - Team Leads
    {
      image: "/assets/team/kavirajan.jpg",
      title: "Kavirajan",
      subtitle: "Tech Innovate Lead",
      handle: "@kavirajan",
      borderColor: "#EC4899",
      gradient: "linear-gradient(160deg, #EC4899, #000)",
      url: "https://github.com/",
      department: "AI & Data Science",
      description: "Driving innovation and new technology initiatives.",
      skills: ["Innovation", "Tech Leadership"],
      projects: ["Innovate Projects"],
      level: "level3",
      year: "3rd Year"
    },
    {
      image: "/assets/team/balavignesh.jpg",
      title: "Balavignesh",
      subtitle: "Platform Developer",
      handle: "@balavignesh",
      borderColor: "#F97316",
      gradient: "linear-gradient(245deg, #F97316, #000)",
      url: "https://github.com/",
      department: "AI & Data Science",
      description: "Developing and maintaining club platforms and tools.",
      skills: ["Development", "Platform Engineering"],
      projects: ["Platform Development"],
      level: "level3",
      year: "2nd Year"
    },
    {
      image: "/assets/team/subha.jpg",
      title: "Subha",
      subtitle: "Tech Content Curator",
      handle: "@subha",
      borderColor: "#84CC16",
      gradient: "linear-gradient(120deg, #84CC16, #000)",
      url: "https://linkedin.com/in/",
      department: "AI & Data Science",
      description: "Curating technical content and resources for the club.",
      skills: ["Content Creation", "Technical Writing"],
      projects: ["Content Curation"],
      level: "level3",
      year: "3rd Year"
    },
    // Level 4 - Core Members
    {
      image: "/assets/team/johndoe.jpg",
      title: "John Doe",
      subtitle: "AI Researcher",
      handle: "@johndoe",
      borderColor: "#FFBB33",
      gradient: "linear-gradient(120deg, #FFBB33, #000)",
      url: "https://linkedin.com/in/",
      department: "AI & Data Science",
      description: "Research and development in AI technologies.",
      skills: ["AI Research", "Machine Learning"],
      projects: ["AI Research Projects"],
      level: "level4",
      year: "2nd Year"
    },
    {
      image: "/assets/team/janesmith.jpg",
      title: "Jane Smith",
      subtitle: "Data Scientist",
      handle: "@janesmith",
      borderColor: "#FF5733",
      gradient: "linear-gradient(120deg, #FF5733, #000)",
      url: "https://linkedin.com/in/",
      department: "AI & Data Science",
      description: "Data analysis and visualization expert.",
      skills: ["Data Science", "Analytics"],
      projects: ["Data Projects"],
      level: "level4",
      year: "2nd Year"
    },
    {
      image: "/assets/team/alex.jpg",
      title: "Alex Kumar",
      subtitle: "ML Engineer",
      handle: "@alexkumar",
      borderColor: "#9C27B0",
      gradient: "linear-gradient(120deg, #9C27B0, #000)",
      url: "https://github.com/",
      department: "AI & Data Science",
      description: "Machine learning model development and deployment.",
      skills: ["Machine Learning", "Python", "TensorFlow"],
      projects: ["ML Model Development"],
      level: "level4",
      year: "2nd Year"
    },
    {
      image: "/assets/team/sara.jpg",
      title: "Sara Patel",
      subtitle: "Frontend Developer",
      handle: "@sarapatel",
      borderColor: "#00BCD4",
      gradient: "linear-gradient(120deg, #00BCD4, #000)",
      url: "https://portfolio.com/",
      department: "AI & Data Science",
      description: "Creating user-friendly interfaces for AI applications.",
      skills: ["React", "JavaScript", "UI/UX"],
      projects: ["Web Development"],
      level: "level4",
      year: "1st Year"
    }
  ];

  // Group members by level for sections
  const facultyMembers = teamMembers.filter(member => member.level === "level1");
  const seniorLeads = teamMembers.filter(member => member.level === "level2");
  const teamLeads = teamMembers.filter(member => member.level === "level3");
  const coreMembers = teamMembers.filter(member => member.level === "level4");

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
        }
        
        body {
          overflow-x: hidden;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          min-height: 100vh;
        }
        
        .team-section {
          max-width: 100vw;
          overflow-x: hidden;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          min-height: 100vh;
          padding: 2rem 0;
        }
        
        /* Ensure navbar stays fixed */
        nav {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          z-index: 1000 !important;
        }

        .wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 4rem 2rem 2rem;
        }

        .title {
          text-align: center;
          margin-bottom: 3rem;
        }

        .title h4 {
          position: relative;
          display: inline-block;
          padding: 15px;
          color: #ffffff;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 500;
          letter-spacing: 1.2px;
          word-spacing: 5px;
          text-transform: uppercase;
          background: linear-gradient(45deg, #7ed6df, #70a1ff, #ff6b6b);
          background-size: 300% 300%;
          animation: gradientShift 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          backdrop-filter: blur(15px);
          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        }

        .section {
          margin: 40px 0;
          width: 100%;
          max-width: 1200px;
        }

        .section h5 {
          text-align: center;
          color: #ffffff;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 500;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .card_Container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 30px;
          margin: 40px 0;
        }

        .card {
          position: relative;
          width: 250px;
          height: 300px;
          overflow: hidden;
          box-shadow: 0 30px 30px -20px rgba(0, 0, 0, 0.8),
                      inset 0 0 0 1000px rgba(67, 52, 109, 0.6);
          border-radius: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, rgba(126, 214, 223, 0.1), rgba(112, 161, 255, 0.1));
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 40px 40px -20px rgba(126, 214, 223, 0.3);
        }

        .card .imgBx {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .card .imgBx img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .card:hover .imgBx img {
          transform: scale(1.1);
        }

        .card .content {
          position: absolute;
          bottom: -160px;
          width: 100%;
          height: 160px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          backdrop-filter: blur(15px);
          background: rgba(0, 0, 0, 0.7);
          box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px 15px 0 0;
          transition: bottom 0.5s ease;
          transition-delay: 0.65s;
        }

        .card:hover .content {
          bottom: 0;
          transition-delay: 0ms;
        }

        .content .contentBx h3 {
          text-transform: uppercase;
          color: #fff;
          letter-spacing: 1px;
          font-weight: 500;
          font-size: 16px;
          text-align: center;
          margin: 20px 0 15px;
          line-height: 1.2em;
          transition: 0.5s;
          transition-delay: 0.6s;
          opacity: 0;
          transform: translateY(-20px);
        }

        .card:hover .content .contentBx h3 {
          opacity: 1;
          transform: translateY(0);
        }

        .content .contentBx h3 span {
          font-size: 12px;
          font-weight: 300;
          text-transform: initial;
          color: #7ed6df;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .card_Container {
            flex-direction: column;
            align-items: center;
          }
          
          .card {
            width: 280px;
            height: 320px;
          }
          
          .section h5 {
            font-size: 1.5rem;
          }
          
          .title h4 {
            font-size: 2rem;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      
      <section className="team-section">
        <div className="wrapper">
          <div className="title">
            <h4>AICOGNITRON</h4>
          </div>

          {/* Faculty Section */}
          <div className="section">
            <div className="card_Container">
              {facultyMembers.map((member, index) => (
                <TeamCard 
                  key={index} 
                  member={member} 
                  onClick={() => setSelectedMember(member)} 
                />
              ))}
            </div>
          </div>

          {/* Senior Leads Section */}
          <div className="section">
            <h5>cooordinators</h5>
            <div className="card_Container">
              {seniorLeads.map((member, index) => (
                <TeamCard 
                  key={index} 
                  member={member} 
                  onClick={() => setSelectedMember(member)} 
                />
              ))}
            </div>
          </div>

          {/* Team Leads Section */}
          <div className="section">
             
            <div className="card_Container">
              {teamLeads.map((member, index) => (
                <TeamCard 
                  key={index} 
                  member={member} 
                  onClick={() => setSelectedMember(member)} 
                />
              ))}
            </div>
          </div>

          {/* Core Members Section */}
          <div className="section">
            <h5>out reach volunteers</h5>
            <div className="card_Container">
              {coreMembers.map((member, index) => (
                <TeamCard 
                  key={index} 
                  member={member} 
                  onClick={() => setSelectedMember(member)} 
                />
              ))}
            </div>
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
      </section>
    </>
  );
}

// Team Card Component matching your HTML structure
function TeamCard({ member, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="imgBx">
        <img 
          src={member.image || "/assets/team/placeholder.jpg"} 
          alt={member.title}
          onError={(e) => {
            e.target.src = "/assets/team/placeholder.jpg";
          }}
        />
      </div>
      <div className="content">
        <div className="contentBx">
          <h3>
            {member.title}
            <br />
            <span>{member.department}</span>
            <br />
            <span>{member.year}</span>
          </h3>
        </div>
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
        border: `2px solid ${member.borderColor || '#7ed6df'}`,
        boxShadow: `0 25px 50px ${member.borderColor || '#7ed6df'}30`,
        animation: 'slideUp 0.3s ease-out'
      }}
      onClick={(e) => e.stopPropagation()}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ 
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '0 auto 1rem',
            border: `3px solid ${member.borderColor || '#7ed6df'}`
          }}>
            <img 
              src={member.image} 
              alt={member.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: member.borderColor || '#7ed6df',
            marginBottom: '0.5rem'
          }}>
            {member.title}
          </h2>
          
          <div style={{
            fontSize: '1.4rem',
            color: '#70a1ff',
            fontWeight: '600',
            marginBottom: '0.5rem'
          }}>
            {member.subtitle}
          </div>

          <div style={{
            fontSize: '1rem',
            color: '#aaa',
            fontStyle: 'italic',
            marginBottom: '2rem'
          }}>
            {member.handle}
          </div>
        </div>

        <div style={{ textAlign: 'left' }}>
          <p style={{
            color: '#dff9fb',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            {member.description}
          </p>

          <h3 style={{ color: member.borderColor || '#7ed6df', marginBottom: '1rem' }}>Skills & Expertise</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {member.skills.map(skill => (
              <span key={skill} style={{
                background: member.borderColor || '#7ed6df',
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

          <h3 style={{ color: member.borderColor || '#7ed6df', marginBottom: '1rem' }}>Current Projects</h3>
          <ul style={{ color: '#dff9fb', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            {member.projects.map(project => (
              <li key={project} style={{ marginBottom: '0.5rem' }}>{project}</li>
            ))}
          </ul>
        </div>

        <button onClick={onClose} style={{
          background: `linear-gradient(45deg, ${member.borderColor || '#7ed6df'}, ${member.borderColor || '#70a1ff'})`,
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
