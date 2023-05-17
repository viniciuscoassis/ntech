import AuthContext from './context/AuthContext';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <AuthContext>
        <body>{children}</body>
      </AuthContext>
    </html>
  );
}
