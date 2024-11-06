import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const PleaseVerifyEmailPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }, [history]);

    return (
        <div className="card">
         <div className="card-body register-card-body">
        <div className="content-container">
            <h1>Thanks for Signing Up!</h1>
            <p>
                A verification email has been sent to the email address you provided.
                Please verify your email to unlock full site features.
            </p>
        </div>
        </div>
        </div>
    );
}