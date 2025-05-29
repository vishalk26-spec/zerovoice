'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ZERODHA_CONFIG } from '../../config/zerodha';

export default function AuthCallback() {
    const router = useRouter();

    useEffect(() => {
        const handleCallback = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const requestToken = urlParams.get('request_token');

            if (requestToken) {
                try {
                    // Store the request token in localStorage or your preferred storage
                    localStorage.setItem('zerodha_request_token', requestToken);
                    
                    // Redirect to welcome page
                    router.push('/welcome');
                } catch (error) {
                    console.error('Authentication error:', error);
                    router.push('/');
                }
            } else {
                router.push('/');
            }
        };

        handleCallback();
    }, [router]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Processing authentication...</h2>
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
        </div>
    );
} 