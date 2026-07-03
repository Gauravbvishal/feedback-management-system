"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#f97316",
  "#9333ea",
  "#ef4444",
  "#06b6d4",
];

export default function PieChartCard({ data = [] }) {
  const chartData = data.map((item) => ({
    name: item.category,
    value: item.count,
  }));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <h2 className="text-xl font-semibold text-slate-800">
        Category Distribution
      </h2>

      <p className="text-sm text-slate-500 mb-6">
        Feedback grouped by category.
      </p>

      {chartData.length === 0 ? (
        <div className="flex items-center justify-center h-[320px] text-slate-500">
          No data available
        </div>
      ) : (
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}