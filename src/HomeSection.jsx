import React from 'react';
import Hyperspeed from './Hyperspeed';

function HomeSection() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
        }
        
        .home-section {
          max-width: 100vw;
          overflow-x: hidden;
        }
      `}</style>
      <section id="home" className="home-section" style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}>
      {/* Hyperspeed Background Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.5
      }}>
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
      </div>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#ffffff',
        zIndex: 1,
        width: '100%',
        maxWidth: '800px',
        padding: '0 2rem',
        boxSizing: 'border-box'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          margin: '0 0 1rem 0',
          wordWrap: 'break-word'
        }}>
          Welcome to Aicognitron
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
          margin: 0,
          wordWrap: 'break-word'
        }}>
          Your journey into the future of AI starts here.
        </p>    
      </div>
    </section>
    </>
  );
}

export default HomeSection;
