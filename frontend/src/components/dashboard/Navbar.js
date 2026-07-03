import { Bell, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-8">

      <div>

        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>

        <p className="text-slate-500">
          Welcome back 👋
        </p>

      </div>

      <div className="flex items-center gap-5">

        <button className="relative">

          <Bell />

          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        <div className="flex items-center gap-2">

          <UserCircle size={38} />

          <div>

            <h4 className="font-semibold">
              Admin
            </h4>

            <p className="text-sm text-slate-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}