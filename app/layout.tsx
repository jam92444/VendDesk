import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VendDesk — Offline Business Management Software',
  description: 'Manage sales, expenses, inventory, and profit without internet. Perfect for small businesses.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
