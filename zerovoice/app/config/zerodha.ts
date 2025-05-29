export const ZERODHA_CONFIG = {
    API_KEY: process.env.NEXT_PUBLIC_KITE_API_KEY || '',
    API_SECRET: process.env.KITE_API_SECRET || '',
    REDIRECT_URI: process.env.NEXT_PUBLIC_REDIRECT_URI || 'http://localhost:3000/auth/callback',
    KITE_LOGIN_URL: 'https://kite.zerodha.com/connect/login',
    KITE_API_URL: 'https://api.kite.trade'
}; 