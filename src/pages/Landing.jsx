import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Screens", href: "#screens" },
];

const AIRBNB = {
  primary: "#FF385C",
  primaryDark: "#E31C5F",
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <LandingNavbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Subtle Airbnb-ish decorative gradients (less shopflow blob vibe) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,56,92,0.20), rgba(255,56,92,0) 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 right-[-140px] h-[520px] w-[520px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(227,28,95,0.18), rgba(227,28,95,0) 62%)",
          }}
        />

        <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: AIRBNB.primary }}
                />
                Airbnb-inspired landing • React + Tailwind
              </div>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Book stays with a{" "}
                <span style={{ color: AIRBNB.primary }}>modern</span> experience.
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                A clean Airbnb clone UI with a product-first layout. Minimal,
                responsive, and built for speed.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/stays"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition active:scale-[0.99]"
                  style={{
                    backgroundColor: AIRBNB.primary,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = AIRBNB.primaryDark)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = AIRBNB.primary)
                  }
                >
                  Browse stays
                  <ArrowIcon className="ml-2 h-4 w-4" />
                </Link>

                <a
                  href="https://github.com/mehdi-filban/airbnb-clone"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  View on GitHub
                  <ExternalIcon className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md">
                <StatCard title="Build" value="Vite" />
                <StatCard title="UI" value="Tailwind" />
                <StatCard title="Routing" value="React Router" />
              </div>
            </div>

            {/* Right hero: minimal feature mock (no live preview section) */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900">
                    Popular stays
                  </div>
                  <span
                    className="rounded-full px-2 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: AIRBNB.primary }}
                  >
                    New
                  </span>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[1, 2, 3, 4].map((i) => (
                    <MiniCard key={i} />
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Built with reusable UI components and consistent spacing—like
                  a real product.
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
            What you get
          </h2>
          <p className="mt-3 text-slate-600">
            A focused landing and a clean app flow for browsing stays.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<SearchIcon className="h-5 w-5" />}
            title="Search-ready layout"
            desc="A structure that makes adding real filters & API simple."
          />
          <FeatureCard
            icon={<HeartIcon className="h-5 w-5" />}
            title="Favorites flow"
            desc="Save stays with instant UI feedback and clean state updates."
          />
          <FeatureCard
            icon={<SparkIcon className="h-5 w-5" />}
            title="Responsive UI"
            desc="Mobile-first design with crisp cards and typography."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                How it works
              </h3>
              <p className="mt-3 text-slate-600">
                Browse stays → pick a place → open details. A clear product
                journey with minimal distractions.
              </p>
            </div>

            <Link
              to="/stays"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition active:scale-[0.99]"
              style={{ backgroundColor: AIRBNB.primary }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = AIRBNB.primaryDark)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = AIRBNB.primary)
              }
            >
              Open the app
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <StepCard n="01" title="Browse stays" desc="See listings in a clean grid." />
            <StepCard n="02" title="Save favorites" desc="Keep what you like with a click." />
            <StepCard n="03" title="View details" desc="Open a stay and explore details." />
          </div>
        </div>
      </section>

      {/* SCREENS */}
      <section id="screens" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Screens overview
            </h2>
            <p className="mt-3 text-slate-600">
              A quick glance at the UI building blocks and the flow.
            </p>
          </div>

          <Link
            to="/stays"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Go to stays
            <ArrowIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <ScreenCard title="Landing" desc="Hero + sections + responsive nav" />
          <ScreenCard title="Stays" desc="Listings grid + quick actions" />
          <ScreenCard title="Details" desc="Full info page for each stay" />
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-600 sm:flex-row">
          <div className="font-semibold text-slate-900">
            Airbnb Clone - By Mehdi Filban <span style={{ color: AIRBNB.primary }}>•</span>
          </div>
          <div>© {new Date().getFullYear()} • React + Tailwind</div>
        </footer>
      </section>
    </div>
  );
}

/* ---------- UI Components ---------- */

function LandingNavbar() {
  const [open, setOpen] = useState(false);

  const onNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div
            className="grid h-9 w-9 place-items-center rounded-2xl text-white"
            style={{ backgroundColor: AIRBNB.primary }}
          >
            <HomeIcon className="h-5 w-5" />
          </div>
          <span className="text-sm font-extrabold tracking-tight text-slate-900">
            airbnb<span className="opacity-70">clone</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => onNavClick(l.href)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
            >
              {l.label}
            </button>
          ))}
          <Link
            to="/stays"
            className="ml-2 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white transition"
            style={{ backgroundColor: AIRBNB.primary }}
          >
            Open App
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-900 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => onNavClick(l.href)}
                  className="rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  {l.label}
                </button>
              ))}
              <Link
                to="/stays"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: AIRBNB.primary }}
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
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="text-xs font-semibold text-slate-500">{title}</div>
      <div className="mt-1 text-base font-extrabold tracking-tight text-slate-900">
        {value}
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div
        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white"
        style={{ backgroundColor: AIRBNB.primary }}
      >
        {icon}
      </div>
      <h3 className="mt-4 text-base font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function StepCard({ n, title, desc }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-xs font-extrabold" style={{ color: AIRBNB.primary }}>
        {n}
      </div>
      <div className="mt-2 text-base font-bold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function ScreenCard({ title, desc }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-base font-bold text-slate-900">{title}</div>
        <span
          className="rounded-full px-2 py-1 text-xs font-bold text-white"
          style={{ backgroundColor: AIRBNB.primary }}
        >
          UI
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
      <div className="mt-4 h-28 rounded-2xl bg-slate-50" />
    </div>
  );
}

function MiniCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="h-24 rounded-xl bg-slate-50" />
      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="h-3 w-28 rounded bg-slate-200" />
          <div className="mt-2 h-3 w-20 rounded bg-slate-100" />
        </div>
        <div
          className="shrink-0 rounded-full px-2 py-1 text-xs font-bold text-white"
          style={{ backgroundColor: AIRBNB.primary }}
        >
          ★ 4.9
        </div>
      </div>
    </div>
  );
}

/* ---------- Icons (no deps) ---------- */

function MenuIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function CloseIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function ArrowIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ExternalIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M14 5h5v5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14L19 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19 14v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function HomeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function SearchIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
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
function SparkIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l1.4 6.1L20 10l-6.6 1.9L12 18l-1.4-6.1L4 10l6.6-1.9L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}