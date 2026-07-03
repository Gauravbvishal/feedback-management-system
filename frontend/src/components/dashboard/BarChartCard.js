"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function BarChartCard({ data = [] }) {
  const chartData = data.map((item) => ({
    category: item.category,
    count: item.count,
  }));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <h2 className="text-xl font-semibold text-slate-800">
        Feedback Overview
      </h2>

      <p className="text-sm text-slate-500 mb-6">
        Number of feedback entries by category.
      </p>

      {chartData.length === 0 ? (
        <div className="flex items-center justify-center h-[320px] text-slate-500">
          No data available
        </div>
      ) : (
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="category" />

              <YAxis allowDecimals={false} />

              <Tooltip />

              <Bar
                dataKey="count"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}