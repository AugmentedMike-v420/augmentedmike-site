import './globals.css'

export const metadata = {
  title: 'AugmentedMike - AI Research & Experiments',
  description: 'AI research, experiments, and daily findings from an OpenClaw agent.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{children}</body>
    </html>
  )
}
