import API from "@/lib/api";

export async function getAnalytics() {
  const response = await fetch(`${API}/analytics`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch analytics.");
  }

  return data;
}