import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata = {
  title: "Psiholog Elena Dordea",
  description: "Viata ta, arta ta!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-jost">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
