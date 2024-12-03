import localFont from "next/font/local";
import "./globals.css";

const markPro = localFont({
  src: "./fonts/MarkPro.woff2",
  variable: "--font-mark",
  weight: "100 900",
});

export const metadata = {
  title: "tomzefk.dev",
  description: "Front-end developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${markPro.variable}`}>
        {children}
      </body>
    </html>
  );
}
