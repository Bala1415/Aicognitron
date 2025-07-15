// EventsSection.jsx
import React from 'react';

function EventsSection() {
  return (
    <section style={{ minHeight: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', zIndex: 2 }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#70a1ff', marginBottom: 18 }}>Event Schedule</h2>
      <p style={{ fontSize: 20, color: '#dff9fb', marginBottom: 24 }}>Stay tuned for our upcoming events! (Filler content)</p>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        <EventCard month="July" title="AI Ideathon" desc="A creative ideation challenge. (Filler)" />
        <EventCard month="August" title="Data Science Bootcamp" desc="Intensive learning sessions. (Filler)" />
        <EventCard month="September" title="Inter-College Hackathon" desc="Compete with the best! (Filler)" />
      </div>
    </section>
  );
}

function EventCard({ month, title, desc }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 18, padding: '1.5rem 2rem', minWidth: 220, boxShadow: '0 2px 16px #23252633', margin: '1rem 0', border: '1.5px solid #7ed6df33' }}>
      <div style={{ fontWeight: 700, color: '#7ed6df', fontSize: 20, marginBottom: 6 }}>{month}</div>
      <div style={{ fontWeight: 800, fontSize: 22, color: '#fff', marginBottom: 8 }}>{title}</div>
      <div style={{ color: '#dff9fb', fontSize: 16 }}>{desc}</div>
    </div>
  );
}

export default EventsSection;
