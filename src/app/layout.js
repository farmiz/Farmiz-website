import localFont from 'next/font/local'
import './globals.css'

const cabinet = localFont({
  src: [
    {
      path: './fonts/CabinetGrotesk-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CabinetGrotesk-Medium.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/CabinetGrotesk-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/CabinetGrotesk-ExtraBold.otf',
      weight: '700',
      style: 'italic',
    },
  ],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabinet.className}>{children}</body>
    </html>
  )
}
