import {Logo} from "@/features/Logo/Logo"

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <header className="flex flex-col items-center gap-6 py-4 border-b mb-4">
        <Logo className="text-3xl" />
      </header>
      <main className="max-w-lg m-auto">{children}</main>
    </>
  )
}
