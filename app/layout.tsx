import type { Metadata } from 'next';
import AppShell from '@/components/app-shell';
import './globals.css';

export const metadata: Metadata = {
  title: 'Norcal | Buy and Sell Cars',
  description: 'A full-featured car marketplace for buying, selling, messaging, dashboard tracking, and premium subscriptions.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
