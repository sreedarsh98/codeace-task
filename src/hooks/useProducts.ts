"use client"

import { useEffect, useState } from "react"
import { Product } from "@/types/product"

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProducts = async (signal?: AbortSignal) => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch("https://fakestoreapi.com/products", {
        signal,
      })
      if (!response.ok) {
        throw new Error("Failed to load products")
      }
      const data = (await response.json()) as Product[]
      setProducts(data)
    } catch (err) {
      if ((err as { name?: string }).name === "AbortError") return
      setError("Unable to fetch products. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    fetchProducts(controller.signal)
    return () => controller.abort()
  }, [])

  return { products, setProducts, loading, error, refetch: fetchProducts }
}
