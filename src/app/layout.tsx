import "./globals.css"
import Sidebar from "@/components/layout/Sidebar"
import Topbar from "@/components/layout/Topbar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-[#F4F6F8]">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Topbar />
          <main className="p-6 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}
