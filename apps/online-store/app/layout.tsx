import { Inter, Merriweather } from 'next/font/google';

import { Nav } from '../components/nav';
import './global.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const merriweather = Merriweather({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-merriweather',
});

export const metadata = {
  title: 'Welcome to online-store',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-pampas-100 ${inter.variable} ${merriweather.variable}`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
