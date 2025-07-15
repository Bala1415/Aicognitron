


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
      width: '100vw', 
      overflowX: 'hidden', 
      background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 25%, #16213e 50%, #0f172a 75%, #0f0f1a 100%)', 
      color: '#ffffff', 
      fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif', 
      position: 'relative' 
    }}>
      <ModernAnimatedBackground />
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


// Modern subtle animated background
function ModernAnimatedBackground() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {/* Subtle grid lines */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        animation: 'gentleGridMove 30s linear infinite'
      }} />
      
      {/* Floating subtle orbs */}
      {[...Array(5)].map((_, i) => (
        <div key={`subtle-orb-${i}`} style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: 120 + Math.random() * 100,
          height: 120 + Math.random() * 100,
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(96, 165, 250, 0.08) 50%, transparent 100%)`,
          borderRadius: '50%',
          filter: 'blur(3px)',
          animation: `subtleFloat${i} ${15 + Math.random() * 10}s ease-in-out infinite alternate`,
          animationDelay: `${Math.random() * 8}s`,
        }} />
      ))}
      
      {/* Minimal geometric shapes */}
      {[...Array(3)].map((_, i) => (
        <div key={`shape-${i}`} style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: 60 + Math.random() * 40,
          height: 60 + Math.random() * 40,
          background: 'transparent',
          border: `1px solid rgba(59, 130, 246, 0.2)`,
          borderRadius: i % 2 === 0 ? '50%' : '0%',
          filter: `drop-shadow(0 0 5px rgba(59, 130, 246, 0.3))`,
          animation: `gentleRotate${i} ${20 + Math.random() * 15}s linear infinite`,
          animationDelay: `${Math.random() * 10}s`,
        }} />
      ))}
      
      {/* Subtle scanning lines */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 4px,
          rgba(59, 130, 246, 0.02) 4px,
          rgba(59, 130, 246, 0.02) 6px
        )`,
        animation: 'subtleScanLines 0.3s linear infinite'
      }} />
      
      <style>{`
        @keyframes gentleGridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes subtleFloat0 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(20px, -30px) scale(1.1); }
        }
        
        @keyframes subtleFloat1 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-25px, 20px) scale(0.9); }
        }
        
        @keyframes subtleFloat2 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(15px, 25px) scale(1.05); }
        }
        
        @keyframes subtleFloat3 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-20px, -15px) scale(0.95); }
        }
        
        @keyframes subtleFloat4 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, 10px) scale(1.08); }
        }
        
        @keyframes gentleRotate0 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gentleRotate1 {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes gentleRotate2 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes subtleScanLines {
          0% { transform: translateY(0); }
          100% { transform: translateY(6px); }
        }
      `}</style>
    </div>
  );
}

// Helper functions for modern theme
function getModernColor() {
  const colors = ['#3b82f6', '#60a5fa', '#93c5fd', '#2563eb', '#1d4ed8'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateSubtleBinary() {
  return Array.from({ length: 15 }, () => Math.random() > 0.7 ? '1' : '0').join('');
}

export default App;
