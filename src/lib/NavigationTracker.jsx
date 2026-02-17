import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * NavigationTracker (Vercel / sin Base44)
 * - Antes enviaba eventos a Base44.
 * - En despliegue externo lo dejamos como “no-op” seguro.
 * - Si quieres, aquí puedes añadir Google Analytics / Plausible, etc.
 */
export default function NavigationTracker() {
  const location = useLocation();

  useEffect(() => {
    // Aquí podrías registrar pageviews si usas analytics:
    // window.gtag?.("event", "page_view", { page_path: location.pathname });
    // o plausible:
    // window.plausible?.("pageview", { u: window.location.href });

    // Por ahora: no hace nada (evita dependencias Base44)
  }, [location.pathname]);

  return null;
}
