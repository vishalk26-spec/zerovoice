'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthCallback() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const handleCallback = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const requestToken = urlParams.get('request_token');
            const status = urlParams.get('status');
            const error = urlParams.get('error');

            // Check for error in URL parameters
            if (error || status === 'error') {
                setError(error || 'Authentication failed');
                setTimeout(() => router.push('/'), 3000);
                return;
            }

            if (!requestToken) {
                setError('No request token received');
                router.push('/');
                return;
            }

            try {
                // Store request token
                localStorage.setItem('zerodha_request_token', requestToken);
                
                // Redirect to welcome page
                router.push('/welcome');
            } catch (error) {
                console.error('Authentication error:', error);
                setError(error instanceof Error ? error.message : 'Failed to complete authentication');
                setTimeout(() => router.push('/'), 3000);
            }
        };

        handleCallback();
    }, [router]);

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4 text-red-600">Authentication Error</h2>
                    <p className="text-gray-600">{error}</p>
                    <p className="text-sm text-gray-500 mt-2">Redirecting to home page...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Processing authentication...</h2>
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
        </div>
    );
} 