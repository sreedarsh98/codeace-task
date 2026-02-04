"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Image as ImageIcon, Tag, DollarSign, AlignLeft } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Product } from "@/types/product"

const schema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  price: z.coerce.number().positive("Price must be greater than 0"),
  image: z.string().url("Please enter a valid image URL"),
  category: z.string().min(2, "Category is required"),
  description: z.string().min(10, "Description should be at least 10 characters"),
})

type FormValues = z.infer<typeof schema>

type AddProductDialogProps = {
  onAdd: (product: Product) => void
  categories: string[]
}

export default function AddProductDialog({ onAdd, categories }: AddProductDialogProps) {
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      price: 0,
      image: "",
      category: "",
      description: "",
    },
  })

  const onSubmit = (data: FormValues) => {
    const newProduct: Product = {
      id: Date.now(),
      title: data.title,
      price: data.price,
      image: data.image,
      category: data.category,
      description: data.description,
      rating: { rate: 0, count: 0 },
    }
    onAdd(newProduct)
    reset()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Product</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl bg-white">
        <DialogHeader>
          <DialogTitle>Add a new product</DialogTitle>
          <DialogDescription>
            Fill in the details below. Your product will appear in the list
            after submission.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="title">Product title</Label>
                <div className="relative">
                  <Input
                    id="title"
                    placeholder="Classic Leather Backpack"
                    className="pl-9"
                    {...register("title")}
                  />
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                </div>
                {errors.title && (
                  <p className="text-xs text-rose-500">{errors.title.message}</p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <div className="relative">
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      placeholder="99.00"
                      className="pl-9"
                      {...register("price")}
                    />
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  </div>
                  {errors.price && (
                    <p className="text-xs text-rose-500">{errors.price.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    list="product-categories"
                    placeholder="Accessories"
                    {...register("category")}
                  />
                  <datalist id="product-categories">
                    {categories.map(category => (
                      <option value={category} key={category} />
                    ))}
                  </datalist>
                  {errors.category && (
                    <p className="text-xs text-rose-500">{errors.category.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <div className="relative">
                  <Input
                    id="image"
                    placeholder="https://images.example.com/product.jpg"
                    className="pl-9"
                    {...register("image")}
                  />
                  <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                </div>
                {errors.image && (
                  <p className="text-xs text-rose-500">{errors.image.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <div className="relative">
                  <AlignLeft className="absolute left-3 top-3 text-slate-400" size={16} />
                  <textarea
                    id="description"
                    rows={4}
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 pl-9 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
                    placeholder="A short description of the product..."
                    {...register("description")}
                  />
                </div>
                {errors.description && (
                  <p className="text-xs text-rose-500">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-4">
              <div className="text-sm font-semibold text-slate-700">
                Live preview
              </div>
              <div className="aspect-[4/3] w-full rounded-lg border border-dashed border-slate-200 bg-white flex items-center justify-center overflow-hidden">
                <ImageIcon className="text-slate-300" size={32} />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-3/4 rounded-full bg-slate-200" />
                <div className="h-3 w-1/2 rounded-full bg-slate-200" />
                <div className="h-3 w-full rounded-full bg-slate-100" />
                <div className="h-4 w-1/3 rounded-full bg-slate-200" />
              </div>
              <p className="text-xs text-slate-500">
                Tip: Use a clear product title and high-resolution image.
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              Add Product
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
