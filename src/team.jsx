import React, { useState } from 'react';
import './Team.css';

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
      image: "assets/team/Abinaya.jpg",
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
      image: "/assets/team/sherlin.jpg",
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
      image: "assets/team/pavithran.jpg",
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
  );
}

// Team Card Component matching your HTML structure
function TeamCard({ member, onClick }) {
  const cardStyle = {
    backgroundImage: `url(${member.image || "/assets/team/placeholder.jpg"})`
  };
  
  return (
    <div className="card" onClick={onClick} style={cardStyle}>
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
    <div 
      className="modal-overlay"
      onClick={onClose}
    >
      <div 
        className="modal-content"
        style={{
          border: `2px solid ${member.borderColor || '#7ed6df'}`,
          boxShadow: `0 25px 50px ${member.borderColor || '#7ed6df'}30`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div 
            className="modal-avatar"
            style={{ border: `3px solid ${member.borderColor || '#7ed6df'}` }}
          >
            <img 
              src={member.image} 
              alt={member.title}
            />
          </div>
          
          <h2 
            className="modal-name"
            style={{ color: member.borderColor || '#7ed6df' }}
          >
            {member.title}
          </h2>
          
          <div className="modal-subtitle">
            {member.subtitle}
          </div>

          <div className="modal-handle">
            {member.handle}
          </div>
        </div>

        <div className="modal-body">
          <p className="modal-description">
            {member.description}
          </p>

          <h3 
            className="modal-section-title"
            style={{ color: member.borderColor || '#7ed6df' }}
          >
            Skills & Expertise
          </h3>
          <div className="modal-skills">
            {member.skills.map(skill => (
              <span 
                key={skill} 
                className="modal-skill-tag"
                style={{ background: member.borderColor || '#7ed6df' }}
              >
                {skill}
              </span>
            ))}
          </div>

          <h3 
            className="modal-section-title"
            style={{ color: member.borderColor || '#7ed6df' }}
          >
            Current Projects
          </h3>
          <ul className="modal-projects">
            {member.projects.map(project => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        </div>

        <button 
          onClick={onClose} 
          className="modal-close-btn"
          style={{
            background: `linear-gradient(45deg, ${member.borderColor || '#7ed6df'}, ${member.borderColor || '#70a1ff'})`,
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Join team section
function JoinTeamSection() {
  return (
    <div className="join-team-section">
      <h3 className="join-team-title">
        Join Our Amazing Team! 🌟
      </h3>
      
      <p className="join-team-description">
        Ready to shape the future of AI? We're always looking for passionate individuals 
        to join our mission and make a real impact in the tech world.
      </p>

      <div className="join-team-buttons">
        <button 
          className="join-team-btn-primary"
          onClick={() => alert('Applications opening soon! 🚀')}
        >
          🚀 Apply Now
        </button>
        
        <button 
          className="join-team-btn-secondary"
          onClick={() => alert('Check out our ongoing projects! 💡')}
        >
          💡 Learn More
        </button>
      </div>
    </div>
  );
}

export default Team;
