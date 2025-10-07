import React from 'react';
import './Team.css';

function Team() {
  const teamMembers = [
    {
      image: "/assets/team/hod.jpg",
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
      subtitle: "Technical Affairs Director",
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
      subtitle: "Technical Director",
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
      image: "/assets/team/akash.jpeg",
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
      image: "/assets/team/sedhumadavan.jpg",
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
      image: "/assets/team/kavi.jpg",
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
      image: "/assets/team/Bala.jpg",
      title: "Balavignesh",
      subtitle: "Tech Developer",
      handle: "@balavignesh",
      borderColor: "#F97316",
      gradient: "linear-gradient(245deg, #F97316, #000)",
      url: "https://github.com/",
      department: "AI & Data Science",
      description: "Developing and maintaining club platforms and tools.",
      skills: ["Development", "Platform Engineering"],
      projects: ["Platform Development"],
      level: "level3",
      year: "3rd Year"
    },
    {
      image: "/assets/team/subhashree.jpg",
      title: "SubhaShree",
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
      image: "/assets/team/shakti.jpg",
      title: "Sakthivel",
      subtitle: "Outreach Coordinator",
      handle: "@shakti",
      url: "https://linkedin.com/in/",
      department: "AI & Data Science",
      description: "Research and development in AI technologies.",
      skills: ["AI Research", "Machine Learning"],
      projects: ["AI Research Projects"],
      level: "level4",
      year: "2nd Year"
    },
    {
      image: "/assets/team/MaheswariS.jpg",
      title: "Maheswari S",
      subtitle: "Outreach Coordinator",
      handle: "@janesmith",
      url: "https://linkedin.com/in/",
      department: "AI & Data Science",
      skills: ["Data Science", "Analytics"],
      projects: ["Data Projects"],
      level: "level4",
      year: "2nd Year"
    },
    {
      image: "/assets/team/elavarasan.jpg",
      title: "Elavarasan",
      subtitle: "Outreach Coordinator",
      handle: "@elavarasan",
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
      image: "/assets/team/suryaprakash.jpg",
      title: "Suryaprakash",
      subtitle: "Outreach Coordinator",
      handle: "@suriyaprakash",
      department: "AI & Data Science",
      description: "Creating user-friendly interfaces for AI applications.",
      skills: ["React", "JavaScript", "UI/UX"],
      projects: ["Web Development"],
      level: "level4",
      year: "2nd Year"
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
              />
            ))}
          </div>
        </div>

        {/* Core Members Section */}
        {/* Core Members Section */}
        <div className="section">
          <h5>out reach volunteers</h5>
          <div className="card_Container">
            {coreMembers.map((member, index) => (
              <TeamCard 
                key={index} 
                member={member} 
              />
            ))}
          </div>
        </div>

        {/* All Team Members List */}
        <div className="section">
          <h5>All Team Members</h5>
          <div className="team-members-list">
            <div className="member-name-item">Annet.A</div>
            <div className="member-name-item">Avantika A D</div>
            <div className="member-name-item">Jeevadharshini T</div>
            <div className="member-name-item">Ovija S</div>
            <div className="member-name-item">G.M.Sevita</div>
            <div className="member-name-item">Loshini D</div>
            <div className="member-name-item">Divya Dharshini V</div>
            <div className="member-name-item">PrasannaRaj.S</div>
            <div className="member-name-item">Thudhin.N.S</div>
            <div className="member-name-item">Jovina M</div>
            <div className="member-name-item">Lokesh.G</div>
            <div className="member-name-item">Ragul.M</div>
            <div className="member-name-item">Ram Sundar.S</div>
            <div className="member-name-item">Naveen P</div>
            <div className="member-name-item">N.Mukesh</div>
            <div className="member-name-item">Dhivya S.S</div>
            <div className="member-name-item">Kritthika.S</div>
            <div className="member-name-item">T.Sathiya</div>
            <div className="member-name-item">N.Premkumar</div>
            <div className="member-name-item">Savishnu.L</div>
            <div className="member-name-item">Varma .N</div>
            <div className="member-name-item">K. Subhashree</div>
            <div className="member-name-item">E. Kavirajan</div>
            <div className="member-name-item">Balavignesh A.U.</div>
            <div className="member-name-item">Vijayvarshan.A</div>
            <div className="member-name-item">S.Srinath</div>
            <div className="member-name-item">Jijesh Raj.K</div>
            <div className="member-name-item">Ashwin.M</div>
            <div className="member-name-item">v.Manoj</div>
            <div className="member-name-item">Jack.M</div>
            <div className="member-name-item">Saiful Azman.M</div>
            <div className="member-name-item">N. Sanjai</div>
            <div className="member-name-item">Ragul.S</div>
            <div className="member-name-item">Aadhitya Arunachalam.A</div>
            <div className="member-name-item">Surendhiran.S</div>
            <div className="member-name-item">S.Ramakrishnan</div>
            <div className="member-name-item">P.Rohan Raaj</div>
            <div className="member-name-item">D.Keerthivasan</div>
            <div className="member-name-item">K.A.Viroshan</div>
            <div className="member-name-item">G.Sudharsan</div>
            <div className="member-name-item">P.Aswin Kumar</div>
            <div className="member-name-item">B.Arun Karthick</div>
            <div className="member-name-item">D.Murugavelrajan</div>
            <div className="member-name-item">D.Varshanth</div>
            <div className="member-name-item">Saran</div>
            <div className="member-name-item">A.Mohamed Naveed</div>
            <div className="member-name-item">Amuthapriyan.A.M</div>
          </div>
        </div>

        {/* Join team section */}
  
      </div>
    </section>
  );
}

// Team Card Component matching your HTML structure
function TeamCard({ member }) {
  const cardStyle = {
    backgroundImage: `url(${member.image || "/assets/team/placeholder.jpg"})`
  };
  
  return (
    <div className="card" style={cardStyle}>
      <div className="content">
        <div className="contentBx">
          <h3>
            {member.title}
            <br />
            <span>{member.department}</span>
            <br />
            <span>{member.year}</span>
            <br />
            <span>{member.subtitle}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Team;
