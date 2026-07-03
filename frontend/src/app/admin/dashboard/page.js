"use client";

import { useEffect, useState } from "react";
import {
  MessageSquare,
  FolderKanban,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

import StatsCard from "@/components/dashboard/StatsCard";
import RecentFeedback from "@/components/dashboard/RecentFeedback";
import FeedbackTable from "@/components/dashboard/FeedbackTable";
import SearchBar from "@/components/dashboard/SearchBar";
import CategoryFilter from "@/components/dashboard/CategoryFilter";
import PieChartCard from "@/components/dashboard/PieChartCard";
import BarChartCard from "@/components/dashboard/BarChartCard";
import Loader from "@/components/ui/Loader";

import { getAnalytics } from "@/services/analytics.service";
import { getFeedback } from "@/services/feedback.service";

export default function DashboardPage() {
  const [analytics, setAnalytics] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(true);

  async function loadAnalytics() {
    try {
      const response = await getAnalytics();
      setAnalytics(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function loadFeedback() {
    try {
      const response = await getFeedback({
        search,
        category,
      });

      setFeedbacks(response.feedbacks);
    } catch (error) {
      console.log(error);
    }
  }

  async function loadDashboard() {
    setLoading(true);

    await Promise.all([
      loadAnalytics(),
      loadFeedback(),
    ]);

    setLoading(false);
  }

  useEffect(() => {
    loadDashboard();
  }, [search, category]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Monitor feedback, analytics and user insights.
          </p>

        </div>

        <div className="rounded-xl bg-white border px-5 py-3 shadow-sm">
          {new Date().toLocaleDateString()}
        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatsCard
          title="Total Feedback"
          value={analytics.totalFeedback}
          subtitle="All submissions"
          icon={MessageSquare}
          color="bg-blue-600"
        />

        <StatsCard
          title="Categories"
          value={analytics.categoryDistribution.length}
          subtitle="Active categories"
          icon={FolderKanban}
          color="bg-green-600"
        />

        <StatsCard
          title="Today"
          value={analytics.recentSubmissions.length}
          subtitle="Today's feedback"
          icon={CalendarDays}
          color="bg-orange-500"
        />

        <StatsCard
          title="This Week"
          value={analytics.totalFeedback}
          subtitle="Weekly activity"
          icon={TrendingUp}
          color="bg-purple-600"
        />

      </div>

      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <PieChartCard
          data={analytics.categoryDistribution}
        /> 

         <BarChartCard
          data={analytics.categoryDistribution}
        />

      </div>

      {/* Feedback Table */}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

          <div>

            <h2 className="text-2xl font-semibold">
              Recent Feedback
            </h2>

            <p className="text-slate-500">
              Search and filter user feedback.
            </p>

          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">

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

        <FeedbackTable
          feedbacks={feedbacks}
        />

      </div>

      {/* Recent Activity */}

      <RecentFeedback
        feedbacks={analytics.recentSubmissions}
      />

    </div>
  );
}