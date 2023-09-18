import {Logo} from "@/features/Logo/Logo"

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <header className="flex flex-col items-center gap-6 py-4 border-b">
        <Logo className="text-3xl" />
      </header>
      <main className="max-w-lg m-auto p-4">{children}</main>
    </div>
  )
}
