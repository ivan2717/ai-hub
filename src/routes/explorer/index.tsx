import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useStore } from '../../store'

export const Route = createFileRoute('/explorer/')({
    
    component: RouteComponent,
})

function RouteComponent() {
    const {explorerUrl} = useStore()
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate({ to: '/' })
    }

    return (
        <div style={{ position: 'relative', width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: 'hidden' }}>
            <button 
                onClick={handleGoBack}
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    zIndex: 1000,
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    background: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
            >
                返回
            </button>
            <iframe
                src={explorerUrl}
                style={{ width: "100%", height: "100%", border: "none" }}
            />
        </div>
    )
}
