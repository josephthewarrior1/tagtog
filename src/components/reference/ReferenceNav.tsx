"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./ReferenceNav.module.css";

const navigation = [
  {
    label: "Product",
    links: [
      { label: "Overview", href: "/#platform" },
      { label: "Features", href: "/#features" },
      { label: "Integrations", href: "/#integrations" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { label: "Corporate events", href: "/#solutions" },
      { label: "Education", href: "/#solutions" },
      { label: "Exhibitions & trade shows", href: "/#solutions" },
      { label: "Nonprofit", href: "/#solutions" },
      { label: "Government", href: "/#solutions" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Customer stories", href: "/#stories" },
      { label: "The event lifecycle", href: "/#lifecycle" },
    ],
  },
];

function Chevron() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function ReferenceNav({ solid = false }: { solid?: boolean }) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const prefix = useId();

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (activeDropdown) {
        headerRef.current
          ?.querySelector<HTMLButtonElement>(`[data-dropdown="${activeDropdown}"]`)
          ?.focus();
        setActiveDropdown(null);
      } else if (mobileOpen) {
        setMobileOpen(false);
        mobileButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeDropdown, mobileOpen]);

  const closeNavigation = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${solid ? styles.solid : ""}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setActiveDropdown(null);
          setMobileOpen(false);
        }
      }}
    >
      <nav className={styles.nav} aria-label="Main navigation">
        <Link className={styles.logo} href="/" aria-label="TAGTOG home" onClick={closeNavigation}>
          TAGTOG
        </Link>

        <div className={styles.primary}>
          {navigation.map((item) => (
            <div className={styles.dropdown} key={item.label}>
              <button
                type="button"
                className={styles.navLink}
                data-dropdown={item.label}
                aria-expanded={activeDropdown === item.label}
                aria-controls={`${prefix}-${item.label}`}
                onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
              >
                {item.label}<Chevron />
              </button>
              {activeDropdown === item.label && (
                <div className={styles.dropdownPanel} id={`${prefix}-${item.label}`}>
                  {item.links.map((link) => (
                    <Link key={link.label} href={link.href} onClick={closeNavigation}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link className={styles.navLink} href="/request-demo?interest=pricing">Pricing</Link>
        </div>

        <div className={styles.actions}>
          <div className={styles.dropdown}>
            <button
              type="button"
              className={styles.navLink}
              data-dropdown="account"
              aria-expanded={activeDropdown === "account"}
              aria-controls={`${prefix}-account`}
              onClick={() => setActiveDropdown(activeDropdown === "account" ? null : "account")}
            >
              Sign in<Chevron />
            </button>
            {activeDropdown === "account" && (
              <div className={`${styles.dropdownPanel} ${styles.accountPanel}`} id={`${prefix}-account`}>
                <Link href="/request-demo?interest=account" onClick={closeNavigation}>
                  Talk to your event team
                </Link>
              </div>
            )}
          </div>
          <Link className={styles.demo} href="/request-demo">
            Book a demo <span aria-hidden="true">→</span>
          </Link>
        </div>

        <button
          ref={mobileButtonRef}
          type="button"
          className={styles.mobileToggle}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls={`${prefix}-mobile`}
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setActiveDropdown(null);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d={mobileOpen ? "m6 6 12 12M6 18 18 6" : "M4 6h16M4 12h16M4 18h16"}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className={styles.mobilePanel} id={`${prefix}-mobile`}>
          {navigation.map((item) => (
            <div className={styles.mobileGroup} key={item.label}>
              <p>{item.label}</p>
              {item.links.map((link) => (
                <Link key={link.label} href={link.href} onClick={closeNavigation}>{link.label}</Link>
              ))}
            </div>
          ))}
          <div className={styles.mobileBottom}>
            <Link href="/request-demo?interest=pricing" onClick={closeNavigation}>Pricing</Link>
            <Link href="/request-demo?interest=account" onClick={closeNavigation}>Sign in</Link>
            <Link className={styles.demo} href="/request-demo" onClick={closeNavigation}>
              Book a demo <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
