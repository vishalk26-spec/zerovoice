'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getRequestToken, clearAuthTokens } from '../utils/auth';

export default function Welcome() {
    const router = useRouter();
    const [requestToken, setRequestToken] = useState<string | null>(null);

    useEffect(() => {
        const token = getRequestToken();
        if (!token) {
            router.push('/');
            return;
        }
        setRequestToken(token);
    }, [router]);

    const handleLogout = () => {
        clearAuthTokens();
        router.push('/');
    };

    if (!requestToken) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <h1 className="text-2xl font-bold mb-4">Welcome to ZeroVoice</h1>
                                <p>You are successfully authenticated with Zerodha!</p>
                               
                                <button
                                    onClick={handleLogout}
                                    className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 