import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-2xl w-full text-center">
        <h1 className="text-5xl font-bold text-black mb-4">
          Lead Distribution System
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Full Stack Developer Assignment
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/request-service"
            className="bg-black text-white p-4 rounded-xl hover:bg-gray-800 transition"
          >
            Request Service
          </Link>

          <Link
            href="/dashboard"
            className="bg-blue-700 text-white p-4 rounded-xl hover:bg-blue-800 transition"
          >
            View Dashboard
          </Link>

          <Link
            href="/test-tools"
            className="bg-green-700 text-white p-4 rounded-xl hover:bg-green-800 transition md:col-span-2"
          >
            Open Test Tools
          </Link>
        </div>

        
      </div>
    </main>
  );
}