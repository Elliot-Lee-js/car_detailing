// components/Navbar.tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          {/* ===== LOGO PLACEHOLDER =====
              Replace this block with:
              <Image
                src="/logo.svg"
                alt="Optimal Group"
                width={120}
                height={32}
                className="h-8 w-auto"
                priority
              />
          */}
          <div className="flex h-8 items-center rounded-md border border-dashed border-zinc-300 px-3 text-xs font-medium text-zinc-500">
            Logo
          </div>
          <span className="text-lg font-bold tracking-tight text-zinc-900">
            Optimal Group
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-zinc-900"
                      : "text-zinc-600 hover:text-zinc-900"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex h-9 items-center rounded-full bg-zinc-900 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Book Now
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex size-9 items-center justify-center rounded-md text-zinc-700 hover:bg-zinc-100 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-zinc-900 px-4 py-2 text-center text-sm font-medium text-white hover:bg-zinc-800"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}