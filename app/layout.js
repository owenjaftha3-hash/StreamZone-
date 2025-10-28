export const metadata = {
  title: "StreamZone",
  description: "Free movies and series with no sign-up needed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0d0d0d', color: 'white', fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
