import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../features/properties/propertiesSlice";
// Carts Been Re-Designed at 2/26/2026
const AIRBNB = { primary: "#FF385C", primaryDark: "#E31C5F" };

export default function PropertyCard({ property }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) =>
    state.properties.favorites.includes(property.id)
  );

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFavorite(property.id));
  };

  return (
    <Link to={`/stays/${property.id}`} className="block">
      <motion.article
        className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        {/* Media */}
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />

          {/* subtle gradient for readability */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Favorite */}
          <button
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:bg-white"
          >
            <HeartIcon filled={isFavorite} />
          </button>

          {/* Optional badge (safe even if you don't have data for it) */}
          <div className="absolute left-3 top-3 flex gap-2">
            <Pill>Guest favorite</Pill>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="truncate text-base font-extrabold tracking-tight text-slate-900">
                {property.title}
              </h2>
              <p className="mt-1 truncate text-sm text-slate-600">
                {property.location}
              </p>
            </div>

            {/* rating (static, UI-ready) */}
            <div className="shrink-0 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-bold text-slate-900">
              <span style={{ color: AIRBNB.primary }}>★</span> 4.9
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="text-sm text-slate-600">
              <span className="font-extrabold text-slate-900">
                ${property.price}
              </span>{" "}
              <span className="text-slate-500">night</span>
            </div>

            <span
              className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold text-white"
              style={{ backgroundColor: AIRBNB.primary }}
            >
              View details <ArrowIcon className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-extrabold text-slate-900 shadow-sm ring-1 ring-black/5 backdrop-blur">
      {children}
    </span>
  );
}

function HeartIcon({ filled }) {
  return filled ? (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill={AIRBNB.primary}>
      <path d="M12 21s-7-4.4-9.5-9A5.8 5.8 0 0 1 12 6a5.8 5.8 0 0 1 9.5 6c-2.5 4.6-9.5 9-9.5 9Z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M12 21s-7-4.4-9.5-9A5.8 5.8 0 0 1 12 6a5.8 5.8 0 0 1 9.5 6c-2.5 4.6-9.5 9-9.5 9Z"
        stroke="currentColor"
        strokeWidth="2"
        className={filled ? "text-slate-200" : "text-slate-600"}
        strokeLinejoin="round"
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