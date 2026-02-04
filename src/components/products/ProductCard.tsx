import { Product } from "@/types/product"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition">
      <div className="h-40 w-full rounded-lg bg-slate-50 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-36 w-full object-contain"
        />
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="rounded-full bg-slate-100 px-2 py-1">
            {product.category}
          </span>
          {product.rating && (
            <span>
              {product.rating.rate.toFixed(1)} ★ ({product.rating.count})
            </span>
          )}
        </div>
        <h3 className="font-semibold text-sm text-slate-900 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-xs text-slate-500 line-clamp-2">
          {product.description}
        </p>
        <p className="text-base font-semibold text-slate-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  )
}
