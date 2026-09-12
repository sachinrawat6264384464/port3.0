import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const syne = Syne({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'The Outline — Strategy | Design | Direction',
  description:
    'The Outline is where strategy meets aesthetics. We bring clarity to brands in a noisy world by turning raw ideas into structured, powerful visual identities.',
  openGraph: {
    title: 'The Outline — Strategy | Design | Direction',
    description:
      'Ideas with Intent. Design with Direction. Premium branding studio specializing in packaging, logos, presentations, annual reports, and brochures.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${syne.variable} dark scroll-smooth`}
    >
      <body className="bg-[#050505] text-[#f5f5f7] min-h-screen font-sans antialiased selection:bg-orange-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
