export default function Nav() {
    return (
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold shadow-md">
              V
            </div>
            <span className="font-semibold text-lg tracking-tight">VeroProduct</span>
          </a>
  
          {/* Nav Menu */}
          <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
            {["Features", "Testimonials", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="hover:text-indigo-600 transition">{item}</span>
  
                {/* Underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </nav>
  
          {/* Button */}
          <a
            href="#pricing"
            className="hidden md:block px-4 py-2 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
  
          {/* Mobile */}
          <button className="md:hidden p-2 rounded-lg border">☰</button>
        </div>
      </header>
    );
  }
  