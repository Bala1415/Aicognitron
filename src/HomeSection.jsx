import React, { useState, useEffect } from 'react';
import Hyperspeed from './Hyperspeed';
import './HomeSection.css';

function HomeSection() {
  const [webglSupported, setWebglSupported] = useState(true);
  const [hyperspeedError, setHyperspeedError] = useState(false);

  useEffect(() => {
    // Check for WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch (e) {
      setWebglSupported(false);
    }
  }, []);

  return (
    <>
      <section id="home" className="home-section">
        {/* Hyperspeed Animation - with error handling */}
        {webglSupported && !hyperspeedError ? (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            opacity: 0.8,
            pointerEvents: 'none',
          }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              {(() => {
                try {
                  return (
                    <Hyperspeed
                      effectOptions={{
                        onSpeedUp: () => { },
                        onSlowDown: () => { },
                        distortion: 'turbulentDistortion',
                        length: 400,
                        roadWidth: 10,
                        islandWidth: 2,
                        lanesPerRoad: 4,
                        fov: 90,
                        fovSpeedUp: 150,
                        speedUp: 2,
                        carLightsFade: 0.4,
                        totalSideLightSticks: 20,
                        lightPairsPerRoadWay: 40,
                        shoulderLinesWidthPercentage: 0.05,
                        brokenLinesWidthPercentage: 0.1,
                        brokenLinesLengthPercentage: 0.5,
                        lightStickWidth: [0.12, 0.5],
                        lightStickHeight: [1.3, 1.7],
                        movingAwaySpeed: [60, 80],
                        movingCloserSpeed: [-120, -160],
                        carLightsLength: [400 * 0.03, 400 * 0.2],
                        carLightsRadius: [0.05, 0.14],
                        carWidthPercentage: [0.3, 0.5],
                        carShiftX: [-0.8, 0.8],
                        carFloorSeparation: [0, 5],
                        colors: {
                          roadColor: 0x080808,
                          islandColor: 0x0a0a0a,
                          background: 0x000000,
                          shoulderLines: 0xFFFFFF,
                          brokenLines: 0xFFFFFF,
                          leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                          rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                          sticks: 0x03B3C3,
                        }
                      }}
                    />
                  );
                } catch (error) {
                  console.warn('Hyperspeed component failed to render:', error);
                  setHyperspeedError(true);
                  return null;
                }
              })()}
            </div>
          </div>
        ) : (
          // Fallback background when WebGL is not supported
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)',
            opacity: 0.8,
            pointerEvents: 'none',
          }} />
        )}
        
        {/* Logos Section */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '0',
          right: '0',
          zIndex: 2,
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
          flexWrap: 'wrap',
          gap: '10px',
        }}>
          {/* Left Logo - BIS */}
          <img 
            src="/assets/BIS_LOGO.png" 
            alt="BIS Logo" 
            style={{
              width: 'clamp(50px, 8vw, 80px)',
              height: 'auto',
              opacity: 0.9,
              flexShrink: 0,
            }}
          />
          
          {/* Center Logo - SRM */}
          <img 
            src="/assets/srm.png" 
            alt="SRM Logo" 
            style={{
              backgroundColor: 'white',
              width: 'clamp(200px, 40vw, 400px)',
              padding: 'clamp(5px, 1vw, 10px)',
              borderRadius: '10px',
              height: 'auto',
              opacity: 1,
              flexShrink: 1,
              maxWidth: '60%',
            }}
          />
          
          {/* Right Logo - SRMVEC */}
          <img 
            src="/assets/srmvec.png" 
            alt="SRMVEC Logo" 
            style={{
              width: 'clamp(50px, 8vw, 80px)',
              height: 'auto',
              opacity: 0.9,
              flexShrink: 0,
            }}
          />
        </div>
        
        <div className="home-content">
          <h1 className="home-title">Where Code meets Quality </h1>
          <p className="home-desc">Your journey into the future of <span style={{color:'#f7c873'}}>AI</span> starts here.</p>
        </div>
      </section>
      <section>
        <div className="hod-message">
          <h2 className="hod-title">Message from the HOD</h2>
          <p className="hod-text">
            Welcome to the AI Cognitron Club! We are committed to fostering innovation, collaboration, and excellence in the field of Artificial Intelligence and Data Science. Join us as we explore the frontiers of technology together.
          </p>
        </div>
        
      </section>


      <section >
        <div className='upcoming-events'>
          <h1 className='date'>Date:  30/07/2025</h1>
            <h2 className='top-card'>BIS Standard Writing</h2>

        </div>


      </section>
    </>
  );
}

export default HomeSection;
