export default function Calendario() {
  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("calendar-ctx")) {
      import("cally")
        .then(() => console.log("Cally loaded"))
        .catch((err) => console.error("Error loading cally:", err));
    }
  }, []);

  return (
    <div className="my-6">
      <calendar-ctx />
    </div>
  );
}
