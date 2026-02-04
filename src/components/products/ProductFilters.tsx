import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type ProductFiltersProps = {
  search: string
  onSearchChange: (value: string) => void
  category: string
  onCategoryChange: (value: string) => void
  categories: string[]
}

export default function ProductFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
}: ProductFiltersProps) {
  const hasFilters = search.trim().length > 0 || category !== "all"

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="w-full sm:w-72">
        <Input
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          placeholder="Search products..."
        />
      </div>

      <select
        value={category}
        onChange={e => onCategoryChange(e.target.value)}
        className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
      >
        <option value="all">All Categories</option>
        {categories.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {hasFilters && (
        <Button
          variant="ghost"
          className="text-slate-500 hover:text-slate-800"
          onClick={() => {
            onSearchChange("")
            onCategoryChange("all")
          }}
        >
          Clear filters
        </Button>
      )}
    </div>
  )
}
