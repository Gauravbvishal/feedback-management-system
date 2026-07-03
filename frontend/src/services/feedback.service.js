import API from "@/lib/api";

export async function submitFeedback(data) {
  const response = await fetch(`${API}/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}

export async function getFeedback({
  page = 1,
  limit = 10,
  search = "",
  category = "",
}) {
  const params = new URLSearchParams({
    page,
    limit,
    search,
    category,
  });

  const response = await fetch(
    `${API}/feedback?${params.toString()}`
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}