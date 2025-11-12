'use client';

import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Story from '@/components/sections/Story';

export default function Home() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Prevent scroll during loading
    const preventScroll = (e: Event) => e.preventDefault();
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });

    // Re-enable scroll after component mounts
    const timer = setTimeout(() => {
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <Story />
    </Layout>
  );
}