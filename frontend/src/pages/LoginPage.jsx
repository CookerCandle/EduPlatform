import { useLocation } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import AuthForm from "../components/AuthForm";  

export default function LoginPage() {
    const location = useLocation();
    const handleFormSubmit = (data) => {};
    const isLogin = location.pathname === '/';

    return (
        <div>   
            <AuthLayout 
                title={isLogin ? "Welcome Back!" : "Create Account"}
                subtitle={isLogin ? "Log in to continue your journey" : "Join our community today"}
                footerText={isLogin ? "Don't have an account?" : "Already have an account?"}
                footerLinkText={isLogin ? "Sign up for free" : "Log in here"}
                footerLinkTo={isLogin ? "/register" : "/"}
            >
                <AuthForm 
                    type={isLogin ? 'login' : 'signup'} 
                    onSubmit={handleFormSubmit}
                />
            </AuthLayout>
        </div>
    );
}