import { NavBar,Footer } from "@/componant"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen ">
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
