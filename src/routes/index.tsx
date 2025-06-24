import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useStore } from '../store';
import { useState, useLayoutEffect, CSSProperties } from 'react';

// --- Data for our cards ---
const services = [
  {
    title: 'AI 3D',
    imageUrl: '/ai_3d.svg',
    targetUrl: 'https://p2p.parflowai.com/',
  },
  {
    title: 'AI 绘画',
    imageUrl: '/ai_paiting.svg',
    targetUrl: 'https://ai-3d.parflowai.com',
  },
  {
    title: '职业时光机',
    imageUrl: '/ai_career.svg',
    targetUrl: 'https://career.parflowai.com',
  },
];

// --- 1. Custom Hook to get window size ---
// This hook tells us if we should use mobile styles
const useIsMobile = (breakpoint = 768): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Set the initial value
    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};


// --- 2. Reusable ServiceCard Component (with inline styles) ---
interface ServiceCardProps {
  title: string;
  imageUrl: string;
  onClick: () => void;
}

function ServiceCard({ title, imageUrl, onClick }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const cardBaseStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    width: '200px',
    height: '200px',
    background: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease-in-out',
    flexShrink: 0,
  };
  
  // Apply hover effect conditionally
  const cardStyle: CSSProperties = {
    ...cardBaseStyle,
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };
  
  const imageStyle: CSSProperties = {
     width: '80px', height: '80px', marginBottom: '15px' 
  };
  
  const titleStyle: CSSProperties = {
     fontSize: '18px', fontWeight: 'bold', color: '#333' 
  };

  return (
    <div
      style={cardStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt={title} style={imageStyle} />
      <span style={titleStyle}>{title}</span>
    </div>
  );
}


// --- Main Route Component ---
export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const navigate = useNavigate();
  const { setExplorerUrl } = useStore();
  const isMobile = useIsMobile(); // 3. Use the hook to get responsive state

  const handleClick = (url: string) => {
    setExplorerUrl(url);
    navigate({ to: '/explorer' });
  };

  // 4. Define styles conditionally based on `isMobile`
  const containerStyle: CSSProperties = {
    width: "100vw",
    minHeight: "100vh", // Use minHeight to allow scrolling on mobile
    margin: 0,
    padding: '20px',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    display: 'flex',
    justifyContent: isMobile ? 'flex-start' : 'center', // Center on desktop, top on mobile
    alignItems: 'center',
    gap: isMobile ? '25px' : '40px', // Smaller gap on mobile
    background: '#f0f2f5',
    flexDirection: isMobile ? 'column' : 'row', // The key change for responsiveness
    paddingTop: isMobile ? '40px' : '20px', // Add more top padding on mobile
  };

  return (
    <div style={containerStyle}>
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          imageUrl={service.imageUrl}
          onClick={() => handleClick(service.targetUrl)}
        />
      ))}
    </div>
  );
}