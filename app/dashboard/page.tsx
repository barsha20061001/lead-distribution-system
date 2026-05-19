"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [providers, setProviders] = useState<any[]>([]);

  const fetchDashboard = async () => {
    const res = await fetch("/api/dashboard");
    const data = await res.json();

    if (data.success) {
      setProviders(data.data);
    }
  };

  useEffect(() => {
    fetchDashboard();

    const interval = setInterval(fetchDashboard, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-black mb-8">
        Provider Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {providers.map((provider) => (
          <div
            key={provider._id}
            className="bg-white rounded-xl shadow-lg p-5 text-black"
          >
            <h2 className="text-xl font-bold mb-2">{provider.name}</h2>

            <p>Total Quota: {provider.monthlyQuota}</p>
            <p>Used: {provider.usedQuota}</p>
            <p>Remaining: {provider.remainingQuota}</p>

            <h3 className="font-semibold mt-4 mb-2">Assigned Leads</h3>

            <div className="space-y-3 max-h-64 overflow-y-auto">
              {provider.leads.length === 0 ? (
                <p className="text-gray-500">No leads yet</p>
              ) : (
                provider.leads.map((lead: any, index: number) => (
                  <div
                    key={index}
                    className="border rounded-lg p-3 bg-gray-50"
                  >
                    <p className="font-semibold">{lead.name}</p>
                    <p>{lead.phone}</p>
                    <p>{lead.city}</p>
                    <p>{lead.service}</p>
                    <p className="text-sm text-gray-600">
                      {lead.description}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

