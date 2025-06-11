import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #2563eb 100%)', color: 'white' }}>
      <div className="container">
        <h1>Karim Menem</h1>
        <p>Software & Full-Stack Developer</p>
      </div>
    </section>
  );
};

export default Hero;