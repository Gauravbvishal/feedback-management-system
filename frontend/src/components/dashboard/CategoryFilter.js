"use client";

const categories = [
  "",
  "Bug Report",
  "Feature Request",
  "UI / UX",
  "Performance",
  "Other",
];

export default function CategoryFilter({
  value,
  onChange,
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600"
    >
      <option value="">All Categories</option>

      {categories
        .filter((item) => item !== "")
        .map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
    </select>
  );
}