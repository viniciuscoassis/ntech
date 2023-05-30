import { Toaster } from 'react-hot-toast';
import AuthContext from './context/AuthContext';
import DataContextFunc from './context/DataContext';
import './globals.css'
import RelatorioContextFunc from './context/RelatorioContext';
import { ScriptContext } from './context/Script';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <DataContextFunc>
        <RelatorioContextFunc>
         
        <AuthContext>
          <body suppressHydrationWarning={true}>
            <Toaster />
            {children}
          </body>
        </AuthContext>
        </RelatorioContextFunc>
      </DataContextFunc>
    </html>
  );
}
