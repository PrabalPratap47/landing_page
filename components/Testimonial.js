export default function Testimonial({ name, role, quote }) {
    return (
      <div className="p-6 bg-[#f4f2ff] rounded-2xl shadow-sm border border-violet-100 hover:shadow-md hover:-translate-y-1 transition">
        <p className="text-slate-800 text-[15px] leading-relaxed italic">“{quote}”</p>
        <div className="mt-4 text-sm font-semibold">{name}</div>
        <div className="text-slate-500 text-sm">{role}</div>
      </div>
    );
  }
  