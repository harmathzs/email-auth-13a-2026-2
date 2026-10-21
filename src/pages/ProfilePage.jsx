import { Navigate, useOutletContext } from 'react-router-dom'

export default function ProfilePage() {
    const { loggedIn } = useOutletContext()
    if (!loggedIn) return <Navigate to="/login" replace />
    return <div className="card">
        Congratulations for logging in!
    </div>
}