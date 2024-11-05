import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
    title: 'chandanbsd.com',
    description: 'Chandan Bangalore Shankar Denanath\'s Personal Website',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <title>chandanbsd.com</title>
            </head>

            <body>
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}
