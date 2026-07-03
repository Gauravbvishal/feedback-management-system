"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import FeedbackTable from "@/components/dashboard/FeedbackTable";
import SearchBar from "@/components/dashboard/SearchBar";
import CategoryFilter from "@/components/dashboard/CategoryFilter";
import Loader from "@/components/ui/Loader";

import { getFeedback } from "@/services/feedback.service";

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  async function loadFeedback() {
    try {
      setLoading(true);

      const response = await getFeedback({
        search,
        category,
        page: 1,
        limit: 10,
      });

      setFeedbacks(response.feedbacks || []);
    } catch (error) {
      toast.error(error.message || "Failed to fetch feedback.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadFeedback();
  }, [search, category]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Feedback
        </h1>

        <p className="text-slate-500 mt-1">
          View and manage all user feedback.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <CategoryFilter
            value={category}
            onChange={setCategory}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
        <FeedbackTable feedbacks={feedbacks} />
      </div>
    </div>
  );
}