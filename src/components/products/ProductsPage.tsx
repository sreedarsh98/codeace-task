"use client"

import { useMemo, useState, useEffect } from "react"
import { useProducts } from "@/hooks/useProducts"
import ProductGrid from "@/components/products/ProductGrid"
import ProductFilters from "@/components/products/ProductFilters"
import AddProductDialog from "@/components/products/AddProductDialog"
import EmptyState from "@/components/products/EmptyState"
import { Button } from "@/components/ui/button"
import { Product } from "@/types/product"

const PAGE_SIZE = 8

export default function ProductsPage() {
  const { products, setProducts, loading, error, refetch } = useProducts()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [page, setPage] = useState(1)

  const categories = useMemo(() => {
    const unique = new Set(products.map(item => item.category))
    return Array.from(unique).sort((a, b) => a.localeCompare(b))
  }, [products])

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return products.filter(item => {
      const matchesSearch =
        term.length === 0 ||
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term)
      const matchesCategory = category === "all" || item.category === category
      return matchesSearch && matchesCategory
    })
  }, [products, search, category])

  useEffect(() => {
    setPage(1)
  }, [search, category])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  )

  const handleAdd = (newProduct: Product) => {
    setProducts(prev => [newProduct, ...prev])
    setPage(1)
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Products</h1>
          <p className="text-sm text-slate-500">
            Browse, search, and manage the product catalog.
          </p>
        </div>
        <AddProductDialog onAdd={handleAdd} categories={categories} />
      </div>

      <ProductFilters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        categories={categories}
      />

      {loading && <p className="text-sm text-slate-500">Loading products...</p>}

      {error && (
        <div className="rounded-lg border border-rose-100 bg-rose-50 p-4 text-sm text-rose-600">
          {error}{" "}
          <button
            onClick={() => refetch()}
            className="font-semibold underline"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <EmptyState
          title={search || category !== "all" ? "No matching products" : "No products yet"}
          description={
            search || category !== "all"
              ? "Try adjusting your search or filters to find products."
              : "Add your first product to start building the catalog."
          }
        />
      )}

      {!loading && !error && filtered.length > 0 && (
        <>
          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>
              Showing {(currentPage - 1) * PAGE_SIZE + 1}-
              {Math.min(currentPage * PAGE_SIZE, filtered.length)} of{" "}
              {filtered.length} products
            </span>
            <span>Page {currentPage} of {totalPages}</span>
          </div>
          <ProductGrid products={pageItems} />
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => setPage(prev => Math.max(1, prev - 1))}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              number => (
                <Button
                  key={number}
                  variant={number === currentPage ? "default" : "outline"}
                  onClick={() => setPage(number)}
                >
                  {number}
                </Button>
              )
            )}
            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
