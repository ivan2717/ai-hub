import { createFileRoute } from '@tanstack/react-router'
import { useStore } from '../../store'

export const Route = createFileRoute('/explorer/')({
    
    component: RouteComponent,
})

function RouteComponent() {
    const {explorerUrl} = useStore()
    return (
        <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: 'hidden' }}>
            <iframe
                src={explorerUrl}
                style={{ width: "100%", height: "100%", border: "none" }}
            />
        </div>
    )
}
