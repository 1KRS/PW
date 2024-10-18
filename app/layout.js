import './globals.css';

export const metadata = {
  title: 'ΔΜ',
  description: 'Ο Προσωπικός Μου Ιστότοπος',
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
