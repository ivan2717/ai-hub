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
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: 'hidden' }}>
      <div onClick={()=>handleClick("http://101.35.252.91:9092")} style={{}}>
        AI 3D
      </div>
      <div onClick={()=>handleClick("http://101.35.252.91:9091") }>
        AI 绘画
      </div>
    </div>
  );
}
