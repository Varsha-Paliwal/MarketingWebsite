import { Header } from "@/pages/Header";
import "./globals.css";

export const metadata = {
  title: "Live View Page -  591 villa agency Template",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
