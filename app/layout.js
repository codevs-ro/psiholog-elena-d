import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata = {
  title: "Psiholog Elena Dordea",
  description: "Fă din viața ta arta ta!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-jost">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
