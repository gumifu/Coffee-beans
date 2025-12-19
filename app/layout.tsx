import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

const Footer = () => (
  <footer className="bg-coffee-950 text-coffee-300 py-12 border-t border-coffee-900">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <h3 className="font-serif text-2xl font-bold text-white mb-4">Velvet Bean</h3>
        <p className="max-w-xs text-sm leading-relaxed text-coffee-400">
          Crafting moments of clarity through the perfect cup. Join us on a journey of flavor, history, and community.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">Explore</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/" className="hover:text-white transition-colors">Our Story</a></li>
          <li><a href="/brew" className="hover:text-white transition-colors">Brew Guide</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Shop Beans</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">Connect</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-coffee-900 text-center text-xs text-coffee-500">
      © 2024 Velvet Bean Coffee Co. All rights reserved.
    </div>
  </footer>
);

export const metadata: Metadata = {
  title: 'Velvet Bean - The Art of Coffee',
  description: 'Explore the seed behind the drink. From the cherry to the cup, discover what makes coffee the world\'s favorite ritual.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div className="min-h-screen flex flex-col font-sans">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


