import "./globals.css";
import "./github.css";

import Navigation from "@components/Navigation/navigation";
import Footer from "@components/Footer/footer";

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
        </div>
      </body>
    </html>
  );
}
