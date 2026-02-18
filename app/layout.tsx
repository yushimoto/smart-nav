import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import JOSProvider from '@/components/JOSProvider';
import '@/styles/globals.css';
import '@/styles/vendors/menu.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'SMARTNAV — Autonomy, Out of the Box',
  description:
    'ARGUS is a plug-and-play edge AI module that transforms any drone into an autonomous platform. One operator. Entire fleet. No new airframes.',
  keywords: ['drone AI', 'autonomous drones', 'ARGUS', 'SMARTNAV', 'edge AI', 'drone brain', 'UAV autonomy', 'predictive stability'],
  openGraph: {
    title: 'SMARTNAV — Autonomy, Out of the Box',
    description:
      'ARGUS is a plug-and-play edge AI module that transforms any drone into an autonomous platform.',
    url: 'https://smartnav.ai',
    siteName: 'SMARTNAV',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMARTNAV — Autonomy, Out of the Box',
    description:
      'ARGUS is a plug-and-play edge AI module that transforms any drone into an autonomous platform.',
  },
  icons: {
    icon: [
      {
        url: '/assets/img_placeholder/favicon-light.png',
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
      },
      {
        url: '/assets/img_placeholder/favicon-dark.png',
        media: '(prefers-color-scheme: dark)',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${dmSans.variable} ${inter.variable}`}
      >
        <JOSProvider>
          {children}
        </JOSProvider>
      </body>
    </html>
  );
}
