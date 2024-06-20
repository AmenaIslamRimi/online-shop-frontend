import { DesktopNavBar } from "@/components/navbar";
import { DesktopFooter } from "@/components/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <DesktopNavBar />
        {children}
        <DesktopFooter />
      </body>
    </html>
  );
}
