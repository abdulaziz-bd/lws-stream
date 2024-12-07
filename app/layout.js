import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "LWS Xstream",
  description: "A simple video streaming app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-color-bg text-white font-exo">
        <div className="container mx-auto px-4 py-4">
          <Header />
          {children}
        </div>
        <div id="modal-root-content" />
      </body>
    </html>
  );
}
