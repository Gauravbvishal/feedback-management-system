"use client";

export default function FeedbackTable({ feedbacks = [] }) {
  if (feedbacks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <h2 className="text-xl font-semibold text-slate-700">
          No Feedback Found
        </h2>

        <p className="mt-2 text-slate-500">
          No feedback matches your search or filter.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Category
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Feedback
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Email
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
              Date
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200 bg-white">
          {feedbacks.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-slate-50 transition"
            >
              <td className="px-6 py-4">
                <CategoryBadge category={item.category} />
              </td>

              <td className="px-6 py-4">
                <p className="max-w-md truncate text-slate-700">
                  {item.feedback}
                </p>
              </td>

              <td className="px-6 py-4 text-slate-600">
                {item.email || "Anonymous"}
              </td>

              <td className="px-6 py-4 text-slate-500">
                {formatDate(item.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CategoryBadge({ category }) {
  const colors = {
    "Bug Report":
      "bg-red-100 text-red-700",

    "Feature Request":
      "bg-blue-100 text-blue-700",

    "UI / UX":
      "bg-purple-100 text-purple-700",

    Performance:
      "bg-green-100 text-green-700",

    Other:
      "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        colors[category] || "bg-slate-100 text-slate-700"
      }`}
    >
      {category}
    </span>
  );
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}