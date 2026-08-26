import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { footerColumns } from "@/data/landingContent";

export function LandingFooter() {
  return (
    <footer className="bg-[var(--color-bg-dark)] py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-white/16 bg-white text-[var(--color-secondary)]">
                T
              </span>
              <span className="text-lg font-extrabold tracking-[0.08em]">TAGTOG</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/58">
              Connected event operations across EMS, PMS, CRM, and IAM.
            </p>
            <div className="mt-6 flex items-center gap-3 text-white/62">
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/12 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
                <FaInstagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-white/12 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a href="mailto:hello@tagtog.com" aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-white/12 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
                <MdEmail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn title="Products" items={footerColumns.products} />
            <FooterColumn title="Company" items={footerColumns.company} />
            <FooterColumn title="Resources" items={footerColumns.resources} />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/52">Contact</p>
              <div className="mt-4 space-y-3 text-sm text-white/62">
                <p>{footerColumns.contact[0]}</p>
                <p className="inline-flex items-center gap-2">
                  <MdLocationOn className="h-4 w-4" />
                  {footerColumns.contact[1]}
                </p>
                <a href="#contact" className="inline-flex text-white transition hover:text-[var(--color-primary)]">
                  {footerColumns.contact[2]}
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-8 text-xs text-white/42">(c) 2026 TAGTOG. Connected Event Operations Ecosystem.</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/52">{title}</p>
      <div className="mt-4 space-y-3 text-sm text-white/62">
        {items.map((item) => (
          <a key={item} href="#" className="block transition hover:text-[var(--color-primary)]">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}