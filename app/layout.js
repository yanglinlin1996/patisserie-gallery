import "./globals.css";

// Defines the root layout that wraps all pages
export const metadata = {
  title: "Patisserie Gallery",
  description: "A showcase of delicious baked goods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
