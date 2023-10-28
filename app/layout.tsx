import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'partageproject',
  description: 'Partager vos project est vision pour mieux collaborer avec les informaticien',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
