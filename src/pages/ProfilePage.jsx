import { useNavigate, useOutletContext } from "react-router-dom"


export default function ProfilePage() {
    const {loggedIn} = useOutletContext()
    const navigate = useNavigate()

    return <div className="card">
        {loggedIn && <p>Congratulations for logging in!</p>}

        {!loggedIn && navigate('/login')}
    </div>
}