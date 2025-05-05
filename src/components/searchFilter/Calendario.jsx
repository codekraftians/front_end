import { useEffect } from "react";

export default function Calendario() {
  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("calendar-ctx")) {
      import("cally")
        .then(() => console.log("Cally cargado"))
        .catch((err) => console.error("Error al cargar cally:", err));
    }
  }, []);

  return (
    <div className="my-6">
      <calendar-ctx />
    </div>
  );
}


