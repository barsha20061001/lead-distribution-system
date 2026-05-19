import { NextResponse } from "next/server";

export async function POST() {
  const results = await Promise.allSettled(
    Array.from({ length: 10 }).map((_, i) =>
      fetch("http://localhost:3000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `Test User ${Date.now()}-${i}`,
          phone: `${Date.now()}${i}`,
          city: "Test City",
          service: i % 3 === 0 ? "Service 1" : i % 3 === 1 ? "Service 2" : "Service 3",
          description: "Generated test lead",
        }),
      }).then((res) => res.json())
    )
  );

  return NextResponse.json({
    success: true,
    results,
  });
}

