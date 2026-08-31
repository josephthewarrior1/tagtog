"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems, productItems } from "@/data/landingContent";

export function LandingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-secondary)]/12 bg-[var(--color-bg-light)]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#platform" className="flex items-center gap-3" aria-label="TAGTOG home">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-[var(--color-secondary)]/10 bg-[var(--color-secondary)] text-white">
            T
          </span>
          <span className="text-lg font-extrabold tracking-[0.08em]">TAGTOG</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]"
              aria-expanded={productsOpen}
            >
              Products
              <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen && (
              <div className="absolute left-0 top-full mt-3 w-64 rounded-2xl border border-[var(--color-secondary)]/12 bg-white p-3 shadow-xl shadow-[rgba(32,30,46,0.08)]">
                {productItems.map((product) => (
                  <a
                    key={product.id}
                    href={`#${product.id}`}
                    className="block rounded-xl px-4 py-3 transition hover:bg-[var(--color-bg-light)]"
                  >
                    <p className="font-semibold text-[var(--color-text-primary)]">{product.name}</p>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{product.fullName}</p>
                  </a>
                ))}
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/request-demo"
            className="hidden h-10 items-center rounded-md bg-[var(--color-primary)] px-4 text-sm font-bold text-white shadow-[0_16px_32px_rgba(255,92,122,0.18)] transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] sm:inline-flex"
          >
            Book a Demo
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-md border border-[var(--color-secondary)]/14 text-[var(--color-text-primary)] transition hover:bg-white lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-[var(--color-secondary)]/12 bg-[var(--color-bg-light)] px-4 py-4 lg:hidden" aria-label="Mobile">
          <div className="mx-auto grid max-w-7xl gap-2">
            <p className="px-3 pt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Products
            </p>
            {productItems.map((product) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-bold text-[var(--color-text-primary)] transition hover:bg-white"
              >
                {product.name}
              </a>
            ))}
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-bold text-[var(--color-text-primary)] transition hover:bg-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/request-demo"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-[var(--color-primary)] px-4 text-sm font-bold text-white"
            >
              Book a Demo
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
