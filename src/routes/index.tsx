import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useStore } from '../store';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {

  const navigate = useNavigate();
  const {setExplorerUrl} = useStore()

  const handleClick = (url:string) => {
    setExplorerUrl(url)
    navigate({ to: '/explorer' });
  };
  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', background: '#f0f2f5' }}>
      <div 
        onClick={() => handleClick("http://101.35.252.91:9092")} 
        style={{
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
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img src="/ai_3d.svg" alt="AI 3D" style={{ width: '80px', height: '80px', marginBottom: '15px' }} />
        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>AI 3D</span>
      </div>
      <div 
        onClick={() => handleClick("http://101.35.252.91:9091")} 
        style={{
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
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img src="/ai_paiting.svg" alt="AI 绘画" style={{ width: '80px', height: '80px', marginBottom: '15px' }} />
        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>AI 绘画</span>
      </div>
    </div>
  );
}
