import { auth, provider } from '../../config/firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate, Navigate } from 'react-router-dom';
import { useGetUserInfo } from '../../hooks/useGetUserInfo'
import "./styles.css";

export const Auth = () => {
    const navigate = useNavigate();
    const { isAuth } = useGetUserInfo();

    const SignInWithGoogle = async () => {
        const results = await signInWithPopup(auth, provider);
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true
        };
        localStorage.setItem("Auth", JSON.stringify(authInfo));
        navigate("/expense-tracker");
    }

    if (isAuth) {
        return <Navigate to="/expense-tracker" />
    }

    return (
        <div className="login-page">
            <p>Sign In With Google to Continue </p>
            <button className="login-with-google-btn" onClick={SignInWithGoogle}>Sign In With Google</button>
        </div>
    );
};