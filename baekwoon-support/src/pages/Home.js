
import React, { useState, useEffect } from 'react';
import Pledges from '../components/Pledges';
import Candidates from '../components/Candidates';

const Home = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const pledgesSection = document.getElementById('pledges');
    if (!pledgesSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowOverlay(!entry.isIntersecting && entry.boundingClientRect.top > 0);
      },
      { threshold: 0.1 } // Trigger when 10% of the pledges section is visible
    );

    observer.observe(pledgesSection);

    return () => {
      observer.unobserve(pledgesSection);
    };
  }, []);

  return (
    <>
      <div className="video-container">
        <iframe
            src="https://www.youtube.com/embed/SDFHhIAO0WU" // 여기에 실제 홍보 영상 ID를 넣어주세요 (예: dQw4w9WgXcQ)
            frameBorder="0"
            allow="accelerometer; clipboard-write; gyroscope; picture-in-picture"
            allowFullScreen
            title="홍보 영상"
          ></iframe>
      </div>
      <div className="scroll-indicator">
        ▼
      </div>
      <Pledges />
      <Candidates />
      <div className={`scroll-overlay ${showOverlay ? 'visible' : ''}`}>
        아래로 스크롤하여 더 많은 공약을 확인하세요 ▼
      </div>
    </>
  );
};

export default Home;
