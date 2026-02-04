import { Search, Bell, Settings } from "lucide-react"

export default function Topbar() {
  return (
    <header className="h-14 bg-white border-b border-slate-200 flex items-center px-6 justify-end p-5">
      
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
