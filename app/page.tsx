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

        <div className="mt-10 text-left bg-gray-100 p-5 rounded-xl">
          <h2 className="font-bold text-xl mb-3 text-black">
            Features Implemented
          </h2>

          <ul className="space-y-2 text-black">
            <li>✅ Lead creation</li>
            <li>✅ Duplicate prevention</li>
            <li>✅ Fair provider allocation</li>
            <li>✅ Round-robin distribution</li>
            <li>✅ Monthly quota handling</li>
            <li>✅ Real-time dashboard updates</li>
            <li>✅ Webhook idempotency</li>
            <li>✅ Concurrency testing</li>
          </ul>
        </div>
      </div>
    </main>
  );
}