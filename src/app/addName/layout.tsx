import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WrapperNames } from "../../../context/namesContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WrapperNames>{children}</WrapperNames>
      </body>
    </html>
  );
}
