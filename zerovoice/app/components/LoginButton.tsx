'use client';

import { ZERODHA_CONFIG } from '../config/zerodha';

export default function LoginButton() {
    const handleLogin = () => {
        const loginUrl = new URL(ZERODHA_CONFIG.KITE_LOGIN_URL);
        loginUrl.searchParams.append('api_key', ZERODHA_CONFIG.API_KEY);
        loginUrl.searchParams.append('v', ZERODHA_CONFIG.KITE_VERSION);
        loginUrl.searchParams.append('redirect_uri', ZERODHA_CONFIG.REDIRECT_URI);
        
        window.location.href = loginUrl.toString();
    };

    return (
        <button
            onClick={handleLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Login with Zerodha
        </button>
    );
} 