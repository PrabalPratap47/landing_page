export default function PricingCard({ tier, price, bullets, highlight }) {
    return (
      <div
        className={`p-6 rounded-2xl transition border shadow-sm ${
          highlight
            ? "bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-xl hover:scale-[1.03]"
            : "bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:-translate-y-1"
        }`}
      >
        <div className="text-lg font-semibold">{tier}</div>
        <div className="mt-3 text-4xl font-extrabold">{price}</div>
  
        <ul className={`mt-5 space-y-2 text-sm ${highlight ? "text-indigo-100" : "text-slate-600"}`}>
          {bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
  
        <button
          className={`mt-6 w-full py-2 rounded-lg font-semibold shadow ${
            highlight ? "bg-white text-indigo-700" : "bg-indigo-600 text-white"
          }`}
        >
          {highlight ? "Get Pro" : "Choose"}
        </button>
      </div>
    );
  }
  