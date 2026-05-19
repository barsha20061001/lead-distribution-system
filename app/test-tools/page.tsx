"use client";

import { useState } from "react";

export default function TestToolsPage() {
  const [message, setMessage] = useState("");

  const resetQuota = async () => {
    const res = await fetch("/api/test/reset-quota", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventId: `quota-reset-${Date.now()}`,     
      }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  const callWebhookMultipleTimes = async () => {
    const eventId = "same-webhook-event-123";

    const responses = await Promise.all([
      fetch("/api/test/reset-quota", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventId }),
      }),
      fetch("/api/test/reset-quota", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventId }),
      }),
      fetch("/api/test/reset-quota", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventId }),
      }),
    ]);

    const data = await Promise.all(responses.map((r) => r.json()));

    setMessage(data.map((d) => d.message).join(" | "));
  };

  const generateLeads = async () => {
    const res = await fetch("/api/test/generate-leads", {
      method: "POST",
    });

    const data = await res.json();

    setMessage(`Generated leads test completed. Results: ${data.results.length}`);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-black">
        <h1 className="text-3xl font-bold text-center mb-6">Test Tools</h1>

        <div className="space-y-4">
          <button
            onClick={resetQuota}
            className="w-full bg-black text-white p-3 rounded-lg"
          >
            Reset Provider Quota
          </button>

          <button
            onClick={callWebhookMultipleTimes}
            className="w-full bg-blue-700 text-white p-3 rounded-lg"
          >
            Call Webhook Multiple Times
          </button>

          <button
            onClick={generateLeads}
            className="w-full bg-green-700 text-white p-3 rounded-lg"
          >
            Generate 10 Leads Instantly
          </button>
        </div>

        {message && (
          <p className="mt-6 bg-gray-100 border p-4 rounded-lg">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}


