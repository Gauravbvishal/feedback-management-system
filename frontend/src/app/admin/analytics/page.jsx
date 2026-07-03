"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  MessageSquare,
  FolderKanban,
  TrendingUp,
  CalendarDays,
} from "lucide-react";

import Loader from "@/components/ui/Loader";
import StatsCard from "@/components/dashboard/StatsCard";
import PieChartCard from "@/components/dashboard/PieChartCard";
import BarChartCard from "@/components/dashboard/BarChartCard";
import RecentFeedback from "@/components/dashboard/RecentFeedback";

import { getAnalytics } from "@/services/analytics.service";

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadAnalytics() {
    try {
      setLoading(true);

      const response = await getAnalytics();

      setAnalytics(response.data);
    } catch (error) {
      toast.error(error.message || "Failed to load analytics.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAnalytics();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Analytics
        </h1>

        <p className="text-slate-500 mt-1">
          Insights into feedback submissions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatsCard
          title="Total Feedback"
          value={analytics.totalFeedback}
          subtitle="Overall submissions"
          icon={MessageSquare}
          color="bg-blue-600"
        />

        <StatsCard
          title="Categories"
          value={analytics.categoryDistribution.length}
          subtitle="Available categories"
          icon={FolderKanban}
          color="bg-green-600"
        />

        <StatsCard
          title="Recent"
          value={analytics.recentSubmissions.length}
          subtitle="Latest submissions"
          icon={CalendarDays}
          color="bg-orange-500"
        />

        <StatsCard
          title="Growth"
          value="100%"
          subtitle="Project demo"
          icon={TrendingUp}
          color="bg-purple-600"
        />

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <PieChartCard
          data={analytics.categoryDistribution}
        />

        <BarChartCard
          data={analytics.categoryDistribution}
        />

      </div>

      <RecentFeedback
        feedbacks={analytics.recentSubmissions}
      />

    </div>
  );
}