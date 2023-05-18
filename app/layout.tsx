import AuthContext from './context/AuthContext';
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <AuthContext>
        <body suppressHydrationWarning={true}>{children}</body>
      </AuthContext>
    </html>
  );
}
