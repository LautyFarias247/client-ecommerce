import './globals.css'

export const metadata = {
  title: 'Blitz',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='min-h-screen'>{children}</body>
    </html>
  )
}
