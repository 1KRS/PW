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
    <html lang="el">
      <body>
        {children}
      </body>
    </html>
  );
}
