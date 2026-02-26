import {Link} from 'react-router-dom'
import {useEffect, useMemo, useState} from 'react'

function useParallax(multiplier = 0.12) {
    const [y, setY] = useState(0)
    useEffect(() => {
        const onScroll = () => setY(window.scrollY || 0)
        onScroll()
        window.addEventListener('scroll',onScroll, {passive: true})
        return ()=> window.removeEventListener('scroll', onScroll)
    }, [])
    return y * multiplier;
}

const navLinks = [
    { label: 'Features', href: '#features' },
    { label: "How it works", href: "#how" },
    { label: "FAQ", href: "#faq" },
]

export default function Landing() {
    const blobA = useParallax(0.10);
    const blobB = useParallax(0.18);

 return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <LandingNavbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* decorative blobs (ShopFlow vibe) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-[90%] rounded-full bg-blue-200/60 blur-3xl"
          style={{ transform: `translate(-90%, ${blobA}px)` }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-[10%] rounded-full bg-indigo-200/50 blur-3xl"
          style={{ transform: `translate(-10%, ${blobB}px)` }}
        />

        <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                Modern Airbnb UI • React + Tailwind
              </div>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Find your next stay with a{" "}
                <span className="text-blue-700">clean & fast</span> experience.
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                A polished Airbnb clone UI with searching, favorites, and details
                page. Built to feel like a real product: consistent spacing,
                modern cards, and smooth interactions.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/stays"
                  className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.99]"
                >
                  Browse stays
                  <ArrowIcon className="ml-2 h-4 w-4" />
                </Link>

                <a
                  href="https://github.com/mehdi-filban/airbnb-clone"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition hover:bg-white"
                >
                  View on GitHub
                  <ExternalIcon className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md">
                <StatCard title="Fast UI" value="Vite" />
                <StatCard title="Animations" value="Framer" />
                <StatCard title="State" value="Redux" />
              </div>
            </div>

            {/* Preview card */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-800">
                    Live Preview
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="group rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="h-28 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50" />
                      <div className="mt-3 flex items-start justify-between">
                        <div>
                          <div className="h-3 w-28 rounded bg-slate-200" />
                          <div className="mt-2 h-3 w-20 rounded bg-slate-100" />
                        </div>
                        <div className="rounded-full border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-700">
                          ★ 4.9
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Tip: Try the <span className="font-semibold">favorites</span>{" "}
                  toggle and open a property details page.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Why it feels professional
          </h2>
          <p className="mt-3 text-slate-600">
            Clean hierarchy, consistent UI tokens, and product-style sections.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<ShieldIcon className="h-5 w-5" />}
            title="Clean UI system"
            desc="Reusable cards, badges, and buttons with consistent spacing."
          />
          <FeatureCard
            icon={<SearchIcon className="h-5 w-5" />}
            title="Search & filtering"
            desc="Find stays faster and keep the UX snappy."
          />
          <FeatureCard
            icon={<HeartIcon className="h-5 w-5" />}
            title="Favorites flow"
            desc="Save places you love with instant UI feedback."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                How it works
              </h3>
              <p className="mt-3 text-slate-600">
                A simple user journey—browse, filter, favorite, and view details.
              </p>
            </div>

            <Link
              to="/stays"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.99]"
            >
              Open the app
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <StepCard n="01" title="Browse stays" desc="See popular listings in a clean grid." />
            <StepCard n="02" title="Filter & favorite" desc="Narrow results and save what you like." />
            <StepCard n="03" title="Open details" desc="View location, price, and description." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">FAQ</h2>
          <p className="mt-3 text-slate-600">
            چند تا جواب کوتاه، همون vibe اپ‌های واقعی.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <FaqItem
            q="این پروژه برای رزومه خوبه؟"
            a="آره، چون UI تمیز + state + روتینگ + صفحه جزئیات داره و حس محصول واقعی می‌ده."
          />
          <FaqItem
            q="چطور تم پروژه رو شبیه ShopFlow نگه داشتی؟"
            a="glass navbar، rounded های بزرگ، کارت‌های مرزبندی‌شده و اکسنـت آبی + blob background."
          />
          <FaqItem
            q="آیا ریسپانسیو هست؟"
            a="بله؛ گریدها و ناوبری موبایل/دسکتاپ کامل تنظیم شده."
          />
          <FaqItem
            q="بهترین قدم بعدی چیه؟"
            a="اضافه‌کردن Skeleton loading، pagination و اتصال API واقعی برای لیست‌ها."
          />
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-600 sm:flex-row">
          <div className="font-semibold text-slate-800">Airbnb Clone</div>
          <div>© {new Date().getFullYear()} • Built with React + Tailwind</div>
        </footer>
      </section>
    </div>
  );
}

/* ---------- Components ---------- */

function LandingNavbar() {
  const [open, setOpen] = useState(false);

  const onNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-2xl bg-blue-600 text-white">
                <HomeIcon className="h-5 w-5" />
            </div>
            <span className="text-sm font-extrabold tracking-tight text-slate-900">
                Airbnb<span className="text-blue-700">Clone</span>
            </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
                <button
                key={l.href}
                onClick={() => onNavClick(l.href)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white/60 hover:text-slate-900"
                >
                {l.label}
                </button>
            ))}
            <Link
                to="/stays"
                className="ml-2 inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
                Open App
            </Link>
            </nav>

            {/* Mobile button */}
            <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 p-2 text-slate-800 backdrop-blur md:hidden"
            aria-label="Toggle menu"
            >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
        </div>

        {/* Mobile menu */}
        {open && (
            <div className="border-t border-slate-200 bg-white/80 backdrop-blur md:hidden">
            <div className="mx-auto max-w-6xl px-4 py-3">
                <div className="flex flex-col gap-1">
                {navLinks.map((l) => (
                    <button
                    key={l.href}
                    onClick={() => onNavClick(l.href)}
                    className="rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-800 hover:bg-white"
                    >
                    {l.label}
                    </button>
                ))}
                <Link
                    to="/stays"
                    onClick={() => setOpen(false)}
                    className="mt-1 inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                    Open App
                </Link>
                </div>
            </div>
        </div>
        )}
        </header>
    );
}

    function StatCard({ title, value }) {
        return (
            <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
            <div className="text-xs font-semibold text-slate-500">{title}</div>
            <div className="mt-1 text-base font-extrabold tracking-tight text-slate-900">
                {value}
            </div>
            </div>
        );
    }

    function FeatureCard({ icon, title, desc }) {
        return (
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                {icon}
            </div>
            <h3 className="mt-4 text-base font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
        );
    }

    function StepCard({ n, title, desc }) {
        return (
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-extrabold text-blue-700">{n}</div>
            <div className="mt-2 text-base font-bold text-slate-900">{title}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
        );
    }

    function FaqItem({ q, a }) {
        return (
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur">
            <div className="text-sm font-bold text-slate-900">{q}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{a}</p>
            </div>
        );
    }

    /* ---------- Simple icons (no extra deps) ---------- */

    function MenuIcon({ className }) {
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        );
    }
    function CloseIcon({ className }) {
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        );
    }
    function ArrowIcon({ className }) {
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none">
            <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }
    function ExternalIcon({ className }) {
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none">
            <path d="M14 5h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 14L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M19 14v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        );
    }
    function HomeIcon({ className }) {
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none">
            <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        );
    }
    function ShieldIcon({ className }) {
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none">
            <path d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4Z" stroke="currentColor" strokeWidth="2" />
            <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }
    function SearchIcon({ className }) {
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none">
            <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="2" />
            <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        );
    }
    function HeartIcon({ className }) {
        return (
            <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
                d="M12 21s-7-4.4-9.5-9A5.8 5.8 0 0 1 12 6a5.8 5.8 0 0 1 9.5 6c-2.5 4.6-9.5 9-9.5 9Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            </svg>
        );
    }

