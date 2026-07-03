import clsx from "clsx";

export default function Button({
  children,
  className,
  loading,
  ...props
}) {
  return (
    <button
      {...props}
      disabled={loading}
      className={clsx(
        "w-full rounded-xl bg-blue-600 px-5 py-3 text-white font-medium transition hover:bg-blue-700 disabled:opacity-60",
        className
      )}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}