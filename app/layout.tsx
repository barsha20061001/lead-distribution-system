import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Lead Distribution System",
  description: "Book My Packers Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-black text-white px-6 py-4 flex gap-6 font-semibold">
          <Link href="/">Home</Link>

          <Link href="/request-service">
            Request Service
          </Link>

          <Link href="/dashboard">
            Dashboard
          </Link>

          <Link href="/test-tools">
            Test Tools
          </Link>
        </nav>

        {children}
      </body>
    </html>
  );
}