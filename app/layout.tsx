import { DesktopNavBar } from "@/components/navbar";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=''>
        <DesktopNavBar />
        {children}</body>
    </html>
  );
}
