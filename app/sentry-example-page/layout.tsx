import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
      template: '%s | Deerwalk Dhading School',
      default: 'Deerwalk Dhading School',
    },
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
