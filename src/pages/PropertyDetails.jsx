import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PropertyNotFound from "./PropertyNotFound";
import { motion } from "framer-motion";
import AppNavbar from "../components/AppNavbar";

const AIRBNB = { primary: "#FF385C" };

export default function PropertyDetails() {
  const { id } = useParams();

  const { list } = useSelector((state) => state.properties);

  // ✅ robust find: works for string/number ids
  const property = list?.find((p) => String(p.id) === String(id));

  if (!property) {
    return (
      <div className="min-h-screen bg-white">
        <AppNavbar />
        <div className="mx-auto max-w-4xl px-4 py-10">
          <PropertyNotFound />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <AppNavbar />

      <motion.main
        className="mx-auto max-w-4xl px-4 py-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <Link
          to="/stays"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
        >
          <span className="text-base">←</span> Back to stays
        </Link>

        <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative">
            <img
              src={property.image}
              alt={property.title}
              className="h-72 w-full object-cover sm:h-80"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 backdrop-blur">
              <span style={{ color: AIRBNB.primary }}>★</span> 4.9
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  {property.title}
                </h1>
                <p className="mt-2 text-sm text-slate-600">{property.location}</p>
              </div>

              <div className="shrink-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="text-xs font-semibold text-slate-600">Price</div>
                <div className="mt-1 text-lg font-extrabold" style={{ color: AIRBNB.primary }}>
                  ${property.price}
                  <span className="ml-1 text-sm font-semibold text-slate-600">/ night</span>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <h2 className="text-sm font-bold text-slate-900">About this place</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {property.description}
              </p>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}