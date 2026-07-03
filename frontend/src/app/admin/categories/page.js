"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Loader from "@/components/ui/Loader";
import { getAnalytics } from "@/services/analytics.service";

const COLORS = {
  "Bug Report": "bg-red-100 text-red-700",
  "Feature Request": "bg-blue-100 text-blue-700",
  "UI / UX": "bg-purple-100 text-purple-700",
  Performance: "bg-green-100 text-green-700",
  Other: "bg-gray-100 text-gray-700",
};

export default function CategoriesPage() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  async function loadCategories() {
    try {
      setLoading(true);

      const response = await getAnalytics();

      setCategories(response.data.categoryDistribution || []);
    } catch (error) {
      toast.error("Unable to load categories.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Categories
        </h1>

        <p className="mt-2 text-slate-500">
          Overview of feedback categories and their distribution.
        </p>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {categories.map((item) => (
          <div
            key={item.category}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">

              <div>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    COLORS[item.category] ||
                    "bg-slate-100 text-slate-700"
                  }`}
                >
                  {item.category}
                </span>

                <p className="mt-5 text-slate-500 text-sm">
                  Total Feedback
                </p>

                <h2 className="text-4xl font-bold mt-1 text-slate-800">
                  {item.count}
                </h2>

              </div>

              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-2xl">
                📂
              </div>

            </div>

            <div className="mt-6">

              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">

                <div
                  className="h-full bg-blue-600"
                  style={{
                    width: `${Math.min(item.count * 10, 100)}%`,
                  }}
                />

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Summary Table */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left">
                Category
              </th>

              <th className="px-6 py-4 text-left">
                Feedback Count
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {categories.map((item) => (
              <tr
                key={item.category}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  {item.category}
                </td>

                <td className="px-6 py-4 font-semibold">
                  {item.count}
                </td>

                <td className="px-6 py-4">
                  <span className="text-green-600 font-medium">
                    Active
                  </span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}