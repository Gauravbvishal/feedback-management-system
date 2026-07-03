export default function FeatureCard({
  icon,
  title,
  text,
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition">

      <div className="text-blue-600 mb-4">
        {icon}
      </div>

      <h3 className="font-bold text-lg">
        {title}
      </h3>

      <p className="text-slate-500 mt-2">
        {text}
      </p>

    </div>
  );
}