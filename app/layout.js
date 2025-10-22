export const metadata = {
  title: 'Best Restaurants in Hong Kong',
  description: 'Discover the top-rated restaurants in Hong Kong',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
