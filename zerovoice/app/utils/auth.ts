import { ZERODHA_CONFIG } from '../config/zerodha';
import crypto from 'crypto';

export const generateChecksum = (requestToken: string) => {
    const data = ZERODHA_CONFIG.API_KEY + requestToken + ZERODHA_CONFIG.API_SECRET;
    return crypto.createHash('sha256').update(data).digest('hex');
};

export function getRequestToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('zerodha_request_token');
}

export function clearAuthTokens(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('zerodha_request_token');
}

export function isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    return !!getRequestToken();
} 