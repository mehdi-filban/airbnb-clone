import AppNavbar from "../components/AppNavbar";
import SearchBar from "../components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useState } from "react";
import { filterProperties, resetFilter } from "../features/properties/propertiesSlice";
import PropertyCard from "../components/PropertyCard";

const AIRBNB = { primary: "#FF385C", primaryDark: "#E31C5F" };

export default function Home() {
  const dispatch = useDispatch();
  const { list, filtered, favorites } = useSelector((state) => state.properties);

  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const properties = useMemo(() => {
    const base = filtered.length ? filtered : list;
    return showOnlyFavorites ? base.filter((p) => favorites.includes(p.id)) : base;
  }, [filtered, list, favorites, showOnlyFavorites]);

  const handleFilter = ({ location, maxPrice }) => {
    if (!location && !maxPrice) {
      dispatch(resetFilter());
      return;
    }
    dispatch(filterProperties({ location, maxPrice }));
  };

  return (
    <div className="min-h-screen bg-white">
      <AppNavbar />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Popular stays
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Browse listings, filter quickly, and open details.
            </p>
          </div>

          <button
            onClick={() => setShowOnlyFavorites((prev) => !prev)}
            className={
              "inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition " +
              (showOnlyFavorites
                ? "text-white"
                : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50")
            }
            style={showOnlyFavorites ? { backgroundColor: AIRBNB.primary, borderColor: AIRBNB.primary } : undefined}
            onMouseEnter={(e) => {
              if (showOnlyFavorites) e.currentTarget.style.backgroundColor = AIRBNB.primaryDark;
            }}
            onMouseLeave={(e) => {
              if (showOnlyFavorites) e.currentTarget.style.backgroundColor = AIRBNB.primary;
            }}
          >
            {showOnlyFavorites ? "Show all" : "Only favorites"}
          </button>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <SearchBar onFilter={handleFilter} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </main>
    </div>
  );
}