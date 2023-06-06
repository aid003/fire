import "./globals.css";
import "./base.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Хождение в огонь",
  description: "Проект Хождение в огонь",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
