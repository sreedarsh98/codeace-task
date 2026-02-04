import { Search, Bell, Settings } from "lucide-react"

export default function Topbar() {
  return (
    <header className="h-14 bg-white border-b border-slate-200 flex items-center px-6 justify-between">
      <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-md w-80">
        <Search size={16} className="text-slate-500" />
        <input
          placeholder="Search shortcuts..."
          className="bg-transparent outline-none text-sm w-full text-slate-700 placeholder:text-slate-400"
        />
        <span className="text-[11px] text-slate-400">Ctrl + K</span>
      </div>
      <div className="flex items-center gap-3">
        <button className="h-9 w-9 rounded-md bg-slate-100 hover:bg-slate-200 flex items-center justify-center relative">
          <Bell size={16} className="text-slate-600" />
          <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
        </button>
        <button className="h-9 w-9 rounded-md bg-slate-100 hover:bg-slate-200 flex items-center justify-center">
          <Settings size={16} className="text-slate-600" />
        </button>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-xs font-semibold text-white">
          AP
        </div>
      </div>
    </header>
  )
}
