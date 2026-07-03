export default function Select({
  label,
  children,
  ...props
}) {
  return (
    <div className="space-y-2">

      <label className="font-medium">
        {label}
      </label>

      <select
        {...props}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
      >
        {children}
      </select>

    </div>
  );
}