import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ section, setSection, sections }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: scrolled ? '60px' : '70px',
      background: scrolled 
        ? 'rgba(0, 0, 0, 0.9)' 
        : 'rgba(15, 15, 25, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${scrolled ? '#3b82f6' : 'rgba(59, 130, 246, 0.3)'}`,
      boxShadow: scrolled 
        ? '0 2px 10px rgba(0, 0, 0, 0.3)' 
        : '0 2px 5px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      zIndex: 1000,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      {/* Neon Logo */}
      <div style={{
        fontSize: scrolled ? '1.3rem' : '1.5rem',
        fontWeight: 'bold',
        color: '#3b82f6',
        textShadow: '0 0 2px rgba(59, 130, 246, 0.5)',
        letterSpacing: '1px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative'
      }}
      onClick={() => setSection('home')}
      onMouseEnter={(e) => {
        e.target.style.color = '#60a5fa';
        e.target.style.textShadow = '0 0 4px rgba(96, 165, 250, 0.7)';
      }}
      onMouseLeave={(e) => {
        e.target.style.color = '#3b82f6';
        e.target.style.textShadow = '0 0 2px rgba(59, 130, 246, 0.5)';
      }}
      >
        AI COGNITRON
      </div>
      
      {/* Desktop Navigation */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>
        {sections.map(({ key, label }, index) => (
          <NavButton
            key={key}
            isActive={section === key}
            onClick={() => setSection(key)}
            delay={index * 0.1}
            scrolled={scrolled}
          >
            {label}
          </NavButton>
        ))}
        
        {/* Settings button */}
        <button style={{
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid #3b82f6',
          borderRadius: '8px',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          marginLeft: '1rem',
          color: '#3b82f6',
          fontSize: '1.1rem'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(59, 130, 246, 0.2)';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(59, 130, 246, 0.1)';
          e.target.style.transform = 'scale(1)';
        }}
        >
          ⚙️
        </button>
      </div>

      <style>{`
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </nav>
  );
};

// Enhanced neon navigation button component
function NavButton({ children, isActive, onClick, delay, scrolled }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isActive 
          ? 'rgba(59, 130, 246, 0.2)' 
          : isHovered 
            ? 'rgba(59, 130, 246, 0.1)' 
            : 'transparent',
        color: isActive ? '#60a5fa' : isHovered ? '#3b82f6' : '#e5e7eb',
        border: `1px solid ${isActive ? '#3b82f6' : isHovered ? '#60a5fa' : 'rgba(229, 231, 235, 0.3)'}`,
        padding: scrolled ? '0.5rem 1rem' : '0.6rem 1.2rem',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: scrolled ? '0.85rem' : '0.9rem',
        fontWeight: isActive ? '600' : '500',
        transition: 'all 0.3s ease',
        letterSpacing: '0.5px',
        position: 'relative',
        overflow: 'hidden',
        animation: `slideIn 0.6s ease-out ${delay}s both`,
        transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
        boxShadow: isActive 
          ? '0 2px 8px rgba(59, 130, 246, 0.3)' 
          : isHovered 
            ? '0 2px 4px rgba(0, 0, 0, 0.1)' 
            : 'none'
      }}
    >
      <span style={{
        position: 'relative',
        zIndex: 1
      }}>
        {children}
      </span>
    </button>
  );
}

export default Navbar;
