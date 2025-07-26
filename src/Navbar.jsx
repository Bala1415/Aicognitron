import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

// Fix: import as image path, not as component
import CognitronLogo from './assets/cognitron.png';

const Navbar = ({ section, setSection, sections }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: scrolled ? '60px' : '72px',
      background: 'var(--color-bg-glass)',
      borderBottom: '1.5px solid var(--color-border)',
      boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2.5rem',
      zIndex: 1000,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      {/* Logo and Cognitron symbol */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.7rem',
        cursor: 'pointer',
      }} onClick={() => setSection('home')}>
        {/* Use <img> for logo */}
        <img
          src={CognitronLogo}
          alt="Cognitron Logo"
          style={{
            height: scrolled ? '40px' : '58px',
            width: 'auto',
            background: 'white',
            borderRadius: '12px',
            padding: '4px',
            boxShadow: '0 2px 8px #6c63ff22',
            transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            filter: 'drop-shadow(0 2px 8px #6c63ff44)'
          }}
        />
        <span className="navbar-logo" style={{
          fontSize: scrolled ? '1.5rem' : '1.8rem',
          color: 'var(--color-primary)',
          fontWeight: 800,
          letterSpacing: '2px',
          fontFamily: 'JetBrains Mono, monospace',
          textShadow: '0 2px 12px #6c63ff44',
        }}>COGNITRON</span>
      </div>
      {/* Desktop Navigation */}
      <div className="navbar-desktop" style={{
        display: 'flex',
        gap: '1.2rem',
        alignItems: 'center',
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
      </div>
      {/* Mobile Hamburger Icon */}
      <button
        className="navbar-mobile"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          background: mobileMenuOpen 
            ? 'var(--color-primary)' 
            : 'var(--color-bg-glass)',
          border: '1.5px solid var(--color-border)',
          borderRadius: '10px',
          width: '44px',
          height: '44px',
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: mobileMenuOpen ? '#fff' : 'var(--color-primary)',
          fontSize: '2rem',
          marginLeft: '1rem',
          transition: 'all 0.3s ease',
        }}
        aria-label="Open menu"
      >
        <GiHamburgerMenu />
      </button>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay glass"
          style={{
            position: 'fixed',
            top: scrolled ? '60px' : '72px',
            left: 0,
            right: 0,
            background: 'var(--color-bg-glass)',
            padding: '2rem 1rem',
            zIndex: 999,
            borderTop: '1.5px solid var(--color-border)'
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            maxWidth: '320px',
            margin: '0 auto',
          }}>
            {sections.map(({ key, label }, index) => (
              <MobileNavButton
                key={key}
                isActive={section === key}
                onClick={() => {
                  setSection(key);
                  setMobileMenuOpen(false);
                }}
                delay={index * 0.1}
              >
                {label}
              </MobileNavButton>
            ))}
          </div>
        </div>
      )}
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(10,16,38,0.5)',
            zIndex: 998
          }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <style>{`
        @media (max-width: 900px) {
          .navbar-desktop {
            display: none !important;
          }
          .navbar-mobile {
            display: flex !important;
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

// Mobile navigation button component
function MobileNavButton({ children, isActive, onClick, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isActive 
          ? 'rgba(59, 130, 246, 0.3)' 
          : isHovered 
            ? 'rgba(59, 130, 246, 0.2)' 
            : 'rgba(59, 130, 246, 0.1)',
        color: isActive ? '#60a5fa' : '#e5e7eb',
        border: `1px solid ${isActive ? '#3b82f6' : 'rgba(59, 130, 246, 0.4)'}`,
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: isActive ? '600' : '500',
        transition: 'all 0.3s ease',
        letterSpacing: '0.5px',
        textAlign: 'center',
        width: '100%',
        animation: `fadeInMobile 0.4s ease-out ${delay}s both`,
        transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
        boxShadow: isActive 
          ? '0 4px 12px rgba(59, 130, 246, 0.4)' 
          : isHovered 
            ? '0 2px 8px rgba(59, 130, 246, 0.2)' 
            : '0 1px 4px rgba(0, 0, 0, 0.2)'
      }}
    >
      {children}
    </button>
  );
}

export default Navbar;
