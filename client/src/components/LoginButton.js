import { useAuth0 } from '@auth0/auth0-react';
import "./App.css";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (<>
                <div class="login">
                    <button class="button" onClick={() => loginWithRedirect()}>
                        Prijava
                    </button>
                </div>
            </>
        )
    )
}

export default LoginButton