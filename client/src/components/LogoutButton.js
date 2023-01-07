import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <button class="button2" onClick={() => logout()}>
                Odjava
            </button>
        )
    )
}

export default LogoutButton