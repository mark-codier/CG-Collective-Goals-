import "./globals.css";

export const metadata = {
  title: "CG Assistance",
  description: "Created for people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
