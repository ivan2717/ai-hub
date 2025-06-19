import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useStore } from '../../store';

export const Route = createFileRoute('/home/')({
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
      {/* <iframe
        src="http://101.35.252.91:9091"
        style={{ width: "100%", height: "100%", border: "none" }}
      /> */}

      <div onClick={()=>handleClick("http://101.35.252.91:9092")} style={{}}>
        AI 3D
      </div>
      <div onClick={()=>handleClick("http://101.35.252.91:9091") }>
        AI 绘画
      </div>
    </div>
  );
}
