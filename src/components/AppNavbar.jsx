import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const AIRBNB = { primary: "#FF385C", primaryDark: "#E31C5F" };

export default function AppNavbar() {
  const [open, setOpen] = useState(false);

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

        <nav className="hidden items-center gap-2 md:flex">
          <NavLink
            to="/stays"
            className={({ isActive }) =>
              "rounded-xl px-3 py-2 text-sm font-semibold transition " +
              (isActive ? "text-slate-900" : "text-slate-700 hover:bg-slate-50 hover:text-slate-900")
            }
          >
            Stays
          </NavLink>

          <Link
            to="/stays"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white transition"
            style={{ backgroundColor: AIRBNB.primary }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = AIRBNB.primaryDark)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = AIRBNB.primary)}
          >
            Explore
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-900 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-1">
              <NavLink
                to="/stays"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Stays
              </NavLink>

              <Link
                to="/stays"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: AIRBNB.primary }}
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

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