"use client";

import {
  Globe,
  Server,
  Database,
  Activity,
  ShieldCheck,
  Code2,
} from "lucide-react";

export default function SettingsPage() {
  const settings = [
    {
      title: "Application",
      value: "Feedback Hub",
      icon: Globe,
      color: "bg-blue-500",
    },
    {
      title: "Frontend",
      value: "Next.js 15",
      icon: Code2,
      color: "bg-sky-500",
    },
    {
      title: "Backend",
      value: "Express.js",
      icon: Server,
      color: "bg-green-500",
    },
    {
      title: "Database",
      value: "Supabase PostgreSQL",
      icon: Database,
      color: "bg-purple-500",
    },
    {
      title: "Environment",
      value: "Production",
      icon: Activity,
      color: "bg-orange-500",
    },
    {
      title: "API Health",
      value: "Healthy",
      icon: ShieldCheck,
      color: "bg-emerald-500",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Settings
        </h1>

        <p className="text-slate-500 mt-2">
          Application configuration and system information.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {settings.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">

                <div
                  className={`${item.color} h-14 w-14 rounded-xl flex items-center justify-center text-white`}
                >
                  <Icon size={28} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="text-lg font-semibold text-slate-800">
                    {item.value}
                  </h2>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* System Status */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

        <h2 className="text-2xl font-semibold mb-6">
          System Status
        </h2>

        <div className="space-y-5">

          <StatusItem
            title="Backend API"
            status="Online"
          />

          <StatusItem
            title="Database"
            status="Connected"
          />

          <StatusItem
            title="Frontend"
            status="Running"
          />

        </div>

      </div>

    </div>
  );
}

function StatusItem({ title, status }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 pb-4">

      <div>
        <h3 className="font-medium text-slate-700">
          {title}
        </h3>
      </div>

      <div className="flex items-center gap-2">

        <span className="h-3 w-3 rounded-full bg-green-500"></span>

        <span className="text-green-600 font-medium">
          {status}
        </span>

      </div>

    </div>
  );
}