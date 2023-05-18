import { Toaster } from 'react-hot-toast';
import AuthContext from './context/AuthContext';
import './globals.css'
import RegisterModal from '@/components/modals/RegisterModal';
import LoginModal from '@/components/modals/LoginModal';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <AuthContext>
        <Toaster />
        <RegisterModal />
        <LoginModal />
        <body>{children}</body>
      </AuthContext>
    </html>
  );
}
