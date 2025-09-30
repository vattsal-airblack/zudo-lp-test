import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const router = useRouter();

  useEffect(() => {
      // For external URLs, use window.open to open in new tab
      window.open('https://play.google.com/store/apps/details?id=com.zudo', '_blank');
  }, []);
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <h1 className="text-2xl font-bold">Welcome to Zudo</h1>
        <p className="text-lg">Download the Zudo Android app for more information.</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.zudo"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-600 transition"
        >
          Click here to download
        </a>
      </main>
    </div>
  );
}
