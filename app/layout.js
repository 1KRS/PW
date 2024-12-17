import { AppProvider } from '@/context/AppContext';
import './globals.css';

export const metadata = {
  title: 'ΔΜ',
  description: 'Ο Προσωπικός Μου Ιστότοπος',
  keywords: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS'],
  creator: 'Δημήτρης Μανωλόπουλος',
  publisher: 'Δημήτρης Μανωλόπουλος',
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="el">
        <body>
          {children}
        </body>
      </html>
    </AppProvider>
  );
}
