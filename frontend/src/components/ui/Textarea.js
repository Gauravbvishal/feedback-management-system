export default function Textarea({
  label,
  error,
  ...props
}) {
  return (
    <div className="space-y-2">

      <label className="font-medium">
        {label}
      </label>

      <textarea
        {...props}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none resize-none focus:border-blue-600"
      />

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}

    </div>
  );
}