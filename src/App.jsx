


import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import Team from './team';
import EventsSection from './EventsSection';
import BlogsSection from './BlogsSection';
import { sections } from './sections';


function App() {
  const [section, setSection] = useState('home');

  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100%',
      overflowX: 'hidden', 
      color: '#ffffff', 
      fontFamily: 'JetBrains Mono, Fira Mono, Georgia, serif', // changed font
      position: 'relative',
      background: '#111',
    }}>
      <Navbar section={section} setSection={setSection} sections={sections} />
      <div style={{ height: 70 }} />
      {section === 'home' && <HomeSection />}
      {section === 'about' && <AboutSection />}
      {section === 'team' && <Team />}
      {section === 'blogs' && <BlogsSection />}
      {section === 'events' && <EventsSection />}
      <footer style={{ 
        textAlign: 'center', 
        color: '#60a5fa', 
        padding: '2rem 0 1rem', 
        fontSize: 18, 
        letterSpacing: 1, 
        marginTop: 40,
        textShadow: '0 0 5px rgba(96, 165, 250, 0.6)'
      }}>
        &copy; {new Date().getFullYear()} AI Cognitron Club | AI & DS Department
      </footer>
    </div>
  );
}


// Helper functions for modern theme
function getModernColor() {
  const colors = ['#3b83f6', '#60a5fa', '#93c4fd', '#2564eb', '#1d4fd8'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateSubtleBinary() {
  return Array.from({ length: 15 }, () => Math.random() > 0.7 ? '1' : '0').join('');
}

export default App;
