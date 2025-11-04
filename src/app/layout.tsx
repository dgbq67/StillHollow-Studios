import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KPR VERSE - Keepers of the Realm',
  description: 'A collective narrative experience in the digital realm. Explore the story of the Keepers through interactive storytelling, media, and immersive experiences.',
  keywords: ['KPR', 'KPR VERSE', 'Keepers', 'NFT', 'Digital Art', 'Storytelling', 'Interactive'],
  authors: [{ name: 'KPR VERSE' }],
  openGraph: {
    title: 'KPR VERSE - Keepers of the Realm',
    description: 'A collective narrative experience in the digital realm',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KPR VERSE - Keepers of the Realm',
    description: 'A collective narrative experience in the digital realm',
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