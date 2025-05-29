'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {

        const requestToken = localStorage.getItem('zerodha_request_token');

        // agar nahi h request token 
        if (!requestToken) {
            router.push('/');
            return;
        }
        setIsAuthenticated(true);
    }, [router]);

    const handleLogout = () => {
        // Clear the authentication token
        localStorage.removeItem('zerodha_request_token');
        // Redirect to home page
        router.push('/');
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Welcome to ZeroVoice!
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        You have successfully authenticated with Zerodha.
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm space-y-4">
                        <p className="text-sm text-gray-500">
                            You can now start using the application with your Zerodha account.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 