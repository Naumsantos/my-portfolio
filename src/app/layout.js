import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Meu portfólio',
  description: 'Generated by create next app | Naum Santos Mourão',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt_BR">
      <head>
        <link rel="shortcut icon" href="../images/favicon.svg" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}