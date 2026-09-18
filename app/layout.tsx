import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Norcal | Buy and Sell Cars',
  description: 'Norcal is the smart car marketplace for buying, selling, messaging, and upgrading your dealership presence.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
