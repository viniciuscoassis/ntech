import { Toaster } from 'react-hot-toast';
import AuthContext from './context/AuthContext';
import DataContextFunc from './context/DataContext';
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <DataContextFunc>
        <AuthContext>
          <body suppressHydrationWarning={true}>
            <Toaster />
            {children}
          </body>
        </AuthContext>
      </DataContextFunc>
    </html>
  );
}
