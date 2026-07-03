"use client";

export default function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color,
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      <div className="flex justify-between items-start">

        <div>

          <p className="text-slate-500 text-sm">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-800">
            {value}
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            {subtitle}
          </p>

        </div>

        <div
          className={`${color} w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg`}
        >
          <Icon size={28} />
        </div>

      </div>

    </div>
  );
}