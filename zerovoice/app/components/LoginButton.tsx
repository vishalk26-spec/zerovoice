'use client';

import { ZERODHA_CONFIG } from '../config/zerodha';

export default function LoginButton() {
    const handleLogin = () => {
        const loginUrl = `${ZERODHA_CONFIG.KITE_LOGIN_URL}?api_key=${ZERODHA_CONFIG.API_KEY}&v=3`;
        
        window.location.href = loginUrl;
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