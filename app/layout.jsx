import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmergencyBar from '@/components/EmergencyBar';
import { site } from '@/lib/siteData';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Locksmith Tendring | Brodley Locksmiths',
    template: '%s'
  },
  description: 'Brodley Locksmiths provides lock installations, lock upgrades, lock changes, uPVC door repairs and security surveys across Tendring, Essex.',
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: false
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png'
  },
  manifest: '/manifest.webmanifest'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#303237'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        <Header />
        <EmergencyBar />
        <main>{children}</main>
        <Footer />
        </body>
    </html>
  );
}
