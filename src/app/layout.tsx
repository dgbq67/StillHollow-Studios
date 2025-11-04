import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SHS - StillHollow Studios',
  description: 'Creative studio featuring parallax scrolling effects, custom cursor interactions, and immersive web experiences.',
  keywords: ['SHS', 'StillHollow Studios', 'Creative', 'Digital Art', 'Parallax', 'Interactive'],
  authors: [{ name: 'StillHollow Studios' }],
  openGraph: {
    title: 'SHS - StillHollow Studios',
    description: 'Creative studio featuring parallax scrolling effects and immersive web experiences',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHS - StillHollow Studios',
    description: 'Creative studio featuring parallax scrolling effects and immersive web experiences',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}