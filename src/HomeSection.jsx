import React from 'react';
import Hyperspeed from './Hyperspeed';
import './HomeSection.css';

function HomeSection() {
  return (
    <>
      <section id="home" className="home-section">
        {/* Hyperspeed Animation - now in front, more visible */}
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
        {/* 
          How to add CSS for this:
          1. Open your 'src/HomeSection.css' file.
          2. Add the following styles at the end of the file:

          .hod-message {
            background: rgba(24, 24, 32, 0.92);
            border-radius: 18px;
            box-shadow: 0 4px 32px #000a, 0 0 0 2px #60a5fa33;
            padding: 2rem 1.5rem;
            margin: 2.5rem auto 0;
            max-width: 600px;
            text-align: center;
            color: #e0e7ef;
          }
          .hod-title {
            font-size: 2rem;
            color: #60a5fa;
            margin-bottom: 1rem;
            font-family: 'JetBrains Mono', 'Fira Mono', Georgia, serif;
            font-weight: 800;
            letter-spacing: 1px;
            text-shadow: 0 2px 12px #000, 0 0 8px #60a5fa55;
          }
          .hod-text {
            font-size: 1.15rem;
            color: #b5e0ff;
            line-height: 1.7;
            font-family: 'IBM Plex Sans', Arial, sans-serif;
            text-shadow: 0 1px 6px #000, 0 0 4px #60a5fa22;
          }

          3. Save the CSS file. The styles will automatically apply to this section.
        */}
      </section>
    </>
  );
}

export default HomeSection;
