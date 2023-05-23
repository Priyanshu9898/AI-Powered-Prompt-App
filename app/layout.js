import "@styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Prompt App",
  description: "Discover & Share AI prompt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            {children}
          </main>

      </body>
    </html>
  );
}
