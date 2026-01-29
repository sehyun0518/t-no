import { Sidebar } from "@/components/common/sidebar"
import { Header } from "@/components/common/header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background flex-col">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <SidebarInset className="flex-1 overflow-auto bg-gray-50">
            <div className="h-full w-full">
              {children}
            </div>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
