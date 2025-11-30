export default function FeatureCard({ title, desc, icon }) {
    return (
      <div className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg border border-slate-200 transition hover:-translate-y-1 hover:bg-white">
        <div className="text-3xl">{icon}</div>
        <h4 className="mt-4 font-semibold text-slate-900">{title}</h4>
        <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
      </div>
    );
  }
  