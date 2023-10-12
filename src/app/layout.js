import "./globals.css";

import Navigation from "@components/Navigation/navigation";

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
        </div>
      </body>
    </html>
  );
}
