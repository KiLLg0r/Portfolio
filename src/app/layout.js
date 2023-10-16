import "./globals.css";
import "./github.css";

import Navigation from "@components/Navigation/navigation";
import Footer from "@components/Footer/footer";

import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Robert Oblesniuc | JavaScript Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <Navigation />
          <div className="container">{children}</div>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
