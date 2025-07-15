import React, { useState, useEffect } from 'react';

function HomeSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section style={{ 
      minHeight: 'calc(100vh - 120px)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center', 
      zIndex: 2,
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
        {/* Interactive cursor follower */}
        <div style={{
          position: 'fixed',
          left: mousePosition.x - 80,
          top: mousePosition.y - 80,
          width: '160px',
          height: '160px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'all 0.1s ease'
        }} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative'
      }}>
        {/* Modern glowing title */}
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: 900, 
            color: '#3b82f6',
            textShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
            marginBottom: '1rem',
            position: 'relative',
            animation: 'subtleGlow 4s ease-in-out infinite'
          }}>
            AI COGNITRON CLUB
            
            {/* Subtle border accents */}
            <div style={{
              position: 'absolute',
              top: '-8px',
              left: '10%',
              right: '10%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #60a5fa, #3b82f6, #60a5fa, transparent)',
              animation: 'gentleFlow 3s ease-in-out infinite'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '10%',
              right: '10%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #3b82f6, #60a5fa, #3b82f6, transparent)',
              animation: 'gentleFlow 3s ease-in-out infinite reverse'
            }} />
          </h1>
          
          {/* Typewriter effect subtitle */}
          <TypewriterText />
        </div>

        {/* Modern stats with subtle glow */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          <StatCounter label="Projects" value={42} color="#3b82f6" />
          <StatCounter label="Members" value={150} color="#60a5fa" />
          <StatCounter label="Events" value={25} color="#93c5fd" />
        </div>
        
        {/* Interactive feature cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          <InteractiveCard 
            icon="🤖"
            title="AI Innovation"
            description="Build next-gen AI solutions that change the world"
            color="#3b82f6"
            particles={false}
          />
          <InteractiveCard 
            icon="📊"
            title="Data Science"
            description="Turn data into actionable insights and predictions"
            color="#60a5fa"
            particles={false}
          />
          <InteractiveCard 
            icon="🚀"
            title="Future Ready"
            description="Prepare for the tech revolution with cutting-edge skills"
            color="#93c5fd"
            particles={false}
          />
        </div>
        
        {/* Call to action with pulse effect */}
        <div style={{
          marginTop: '4rem',
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <PulseButton 
            text="🚀 JOIN THE REVOLUTION"
            primary={true}
            onClick={() => alert('Welcome to the future! 🎉')}
          />
          
          <PulseButton 
            text="💡 EXPLORE PROJECTS"
            primary={false}
            onClick={() => alert('Check out our amazing projects! 🔥')}
          />
        </div>
      </div>

      <style>{`
        @keyframes subtleGlow {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% { 
            text-shadow: 0 0 15px rgba(59, 130, 246, 0.7), 0 0 25px rgba(59, 130, 246, 0.4);
          }
        }
        
        @keyframes gentleFlow {
          0% { transform: translateX(-20px); opacity: 0.6; }
          50% { opacity: 1; }
          100% { transform: translateX(20px); opacity: 0.6; }
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
        
        @keyframes modernPulse {
          0%, 100% { 
            transform: scale(1);
            filter: brightness(1);
          }
          50% { 
            transform: scale(1.02);
            filter: brightness(1.1);
          }
        }
        
        @keyframes modernFloat {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-5px);
          }
        }
        
        @keyframes modernGlow {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.3), inset 0 0 10px rgba(255,255,255,0.05);
          }
          50% { 
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.5), inset 0 0 15px rgba(255,255,255,0.08);
          }
        }
      `}</style>
    </section>
  );
}

// Typewriter effect component
function TypewriterText() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrases = [
      'Building the Future with AI 🤖',
      'Data Science Enthusiasts 📊',
      'Innovation Through Technology 💡',
      'Where Code Meets Creativity 🎨'
    ];
    
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <p style={{ 
      fontSize: '1.5rem', 
      color: '#60a5fa', 
      marginBottom: '2rem',
      lineHeight: '1.6',
      height: '2em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textShadow: '0 0 8px rgba(96, 165, 250, 0.6)'
    }}>
      {text}<span style={{ 
        animation: 'modernBlink 1s infinite',
        color: '#3b82f6',
        textShadow: '0 0 5px rgba(59, 130, 246, 0.8)'
      }}>|</span>
      <style>{`
        @keyframes modernBlink {
          0%, 50% { 
            opacity: 1; 
            text-shadow: 0 0 5px rgba(59, 130, 246, 0.8);
          }
          51%, 100% { 
            opacity: 0; 
          }
        }
      `}</style>
    </p>
  );
}

// Modern animated counter component
function StatCounter({ label, value, color }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev < value) {
          return prev + Math.ceil((value - prev) / 10);
        }
        return value;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div style={{
      textAlign: 'center',
      padding: '1.5rem',
      background: 'rgba(15, 15, 25, 0.9)',
      borderRadius: '15px',
      border: `1px solid ${color}`,
      minWidth: '140px',
      boxShadow: `0 0 15px ${color}30, inset 0 0 15px rgba(255,255,255,0.05)`,
      animation: 'modernGlow 3s ease-in-out infinite',
      position: 'relative',
      overflow: 'hidden',
      backdropFilter: 'blur(10px)'
    }}>
      {/* Subtle scanning line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '1px',
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        animation: 'gentleFlow 3s linear infinite'
      }} />
      
      <div style={{
        fontSize: '2.8rem',
        fontWeight: 'bold',
        color: color,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textShadow: `0 0 10px ${color}80`,
        marginBottom: '0.5rem'
      }}>
        {count}+
      </div>
      <div style={{
        fontSize: '0.9rem',
        color: '#e5e7eb',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textShadow: `0 0 5px ${color}60`
      }}>
        {label}
      </div>
    </div>
  );
}

// Interactive modern card with subtle effects
function InteractiveCard({ icon, title, description, color, particles }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        background: isHovered 
          ? `linear-gradient(135deg, rgba(15,15,25,0.95) 0%, ${hexToRgb(color)}15 100%)`
          : 'rgba(15,15,25,0.9)',
        borderRadius: '20px',
        padding: '2.5rem',
        border: `1px solid ${isHovered ? color : 'rgba(59, 130, 246, 0.3)'}`,
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transform: isHovered ? 'translateY(-5px) scale(1.01)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
          ? `0 10px 30px ${color}30, 0 0 20px ${color}20` 
          : '0 5px 20px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle scanning lines */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `repeating-linear-gradient(
          90deg,
          transparent,
          transparent 4px,
          ${color}08 4px,
          ${color}08 6px
        )`,
        opacity: isHovered ? 0.2 : 0,
        transition: 'opacity 0.3s ease'
      }} />

      {/* Remove particle effects but keep structure */}
      {particles && isHovered && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {/* Particles removed for cleaner look */}
        </div>
      )}

      <div style={{
        fontSize: '4rem',
        marginBottom: '1.5rem',
        animation: isHovered ? 'modernPulse 2s ease-in-out infinite' : 'none',
        filter: isHovered ? `drop-shadow(0 0 10px ${color})` : 'none'
      }}>
        {icon}
      </div>
      
      <h3 style={{
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: isHovered ? color : '#60a5fa',
        marginBottom: '1rem',
        transition: 'color 0.3s ease',
        textShadow: `0 0 8px ${isHovered ? color : 'rgba(96, 165, 250, 0.6)'}`
      }}>
        {title}
      </h3>
      
      <p style={{
        color: '#e5e7eb',
        lineHeight: '1.6',
        fontSize: '1.1rem',
        textShadow: '0 0 3px rgba(229, 231, 235, 0.3)'
      }}>
        {description}
      </p>

      {/* Electric border effect */}
      {isHovered && (
        <div style={{
          position: 'absolute',
          top: -2,
          left: -2,
          right: -2,
          bottom: -2,
          border: `2px solid ${color}`,
          borderRadius: '20px',
          animation: 'neonGlow 2s ease-in-out infinite'
        }} />
      )}
    </div>
  );
}

// Modern pulse button component
function PulseButton({ text, primary, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      style={{
        background: primary 
          ? 'linear-gradient(45deg, #3b82f6, #60a5fa)' 
          : 'rgba(15, 15, 25, 0.9)',
        color: primary ? '#ffffff' : '#60a5fa',
        border: primary ? 'none' : '1px solid #60a5fa',
        padding: '1.2rem 2.5rem',
        borderRadius: '25px',
        fontSize: '1.1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: isHovered 
          ? primary 
            ? '0 0 20px rgba(59, 130, 246, 0.6)' 
            : '0 0 15px rgba(96, 165, 250, 0.4)'
          : primary
            ? '0 0 10px rgba(59, 130, 246, 0.3)'
            : '0 0 8px rgba(96, 165, 250, 0.2)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        textShadow: primary ? 'none' : '0 0 5px rgba(96, 165, 250, 0.6)',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Subtle flowing effect */}
      {isHovered && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '-100%',
          right: '-100%',
          height: '1px',
          background: primary 
            ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)'
            : 'linear-gradient(90deg, transparent, #60a5fa, transparent)',
          animation: 'gentleFlow 1s ease-in-out infinite',
          transform: 'translateY(-50%)'
        }} />
      )}
      
      <span style={{ position: 'relative', zIndex: 1 }}>
        {text}
      </span>
    </button>
  );
}

// Helper function to convert hex to rgb
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '59, 130, 246'; // Default to blue
  
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
}

export default HomeSection;
