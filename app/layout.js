// app/layout.jsx
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'VibeSafe - Security for Vibe Coders',
  description: 'Cybersecurity testing for solo developers and small startups. Easy to use with no coding experience required.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

