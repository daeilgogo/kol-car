import "./globals.css";

import { NavBar,Footer } from "@/componant";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative w-full h-full p-2 items-center justify-center'>
        {children}
      </body>
    </html>
  );
}