import "./globals.css";

import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "Car Hub",
  description: "Discover the world's best automotive showcase application.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}