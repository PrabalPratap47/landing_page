export default function Hero() {
    return (
      <section className="pt-20 pb-20 grid gap-14 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            Stunning UI components for
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
              modern landing pages
            </span>
          </h1>
  
          <p className="mt-5 text-lg text-slate-600 max-w-xl leading-relaxed">
            Build beautiful websites 5× faster using pre-built responsive sections powered by Tailwind & Vercel v0.
          </p>
  
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white shadow hover:scale-[1.03] transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
            >
              Explore Features
            </a>
          </div>
        </div>
  
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-md p-6 rounded-3xl shadow-xl bg-white border border-slate-200">
            <div className="h-60 rounded-2xl bg-gradient-to-r from-indigo-100 to-violet-100 flex items-center justify-center text-slate-400 text-xl">
              🔥 Premium UI Mockup
            </div>
            <p className="mt-4 text-slate-600 text-sm">
              Fully responsive and auto-generated via Vercel v0 with adaptive scaling.
            </p>
          </div>
        </div>
      </section>
    );
  }
  