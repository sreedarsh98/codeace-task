import {
  LayoutDashboard,
  ShoppingBag,
  Tags,
  Users,
  ShoppingCart,
  BarChart,
  Settings,
} from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0B0F12] text-white/90 flex flex-col border-r border-white/5">
      <div className="px-6 py-5 flex items-center gap-2 text-xl font-semibold tracking-tight">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-indigo-500 text-white text-sm font-bold">
          B
        </span>
        BIG DAY
      </div>

      <div className="px-6 pb-5">
        <div className="rounded-lg bg-white/5 p-3 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-xs font-semibold">
            KR
          </div>
          <div>
            <div className="text-sm font-semibold">Kate Russell</div>
            <div className="text-xs text-white/60">Employee ID : 7924</div>
          </div>
        </div>
      </div>

      <nav className="px-4 space-y-1 text-sm">
        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5">
          <LayoutDashboard size={16} /> Dashboard
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-white/10 text-white">
          <ShoppingBag size={16} /> Products
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5">
          <Tags size={16} /> Categories
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5">
          <ShoppingCart size={16} /> Orders
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5">
          <Users size={16} /> Customers
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5">
          <BarChart size={16} /> Reports
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5">
          <Settings size={16} /> Settings
        </div>
      </nav>
    </aside>
  )
}
