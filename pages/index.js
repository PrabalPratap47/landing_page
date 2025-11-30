import Nav from "../components/Nav";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Testimonial from "../components/Testimonial";
import PricingCard from "../components/PricingCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef1ff] via-[#f4f5ff] to-[#f8f9ff] text-slate-900">
      {/* Navigation */}
      <Nav />

      {/* PAGE CONTENT */}
      <main className="max-w-7xl mx-auto px-6">

        {/* HERO SECTION */}
        <Hero />

        {/* FEATURES SECTION */}
        <section id="features" className="py-20">
          <div className="max-w-3xl mb-10">
            <h2 className="text-4xl font-extrabold tracking-tight">Features</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Beautiful, fast, and powerful UI components built for modern development workflows.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="⚡"
              title="Instant Responsive Layouts"
              desc="Fluid responsive grid system tailored for every device using pure Tailwind."
            />
            <FeatureCard
              icon="🎨"
              title="Design Tokens & Themes"
              desc="Consistent spacing, color tokens, shadows, and typography to keep your UI aligned."
            />
            <FeatureCard
              icon="🚀"
              title="One-Click Deploy"
              desc="Integrated with Vercel—your pages deploy in seconds with zero config."
            />
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="py-20">
          <div className="max-w-3xl mb-10">
            <h3 className="text-3xl font-bold tracking-tight">Loved by Teams</h3>
            <p className="mt-3 text-slate-600"> Designers and developers ship faster using this UI system.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Testimonial
              name="Ananya"
              role="Product Designer"
              quote="This design system helped us ship a landing page in literally one day."
            />
            <Testimonial
              name="Rahul"
              role="Frontend Engineer"
              quote="The responsiveness and token system made my work 10× easier."
            />
            <Testimonial
              name="Maya"
              role="Founder"
              quote="We shipped a beautiful product site in a single sprint. Amazing!"
            />
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-20">
          <div className="max-w-3xl mb-10">
            <h3 className="text-3xl font-bold tracking-tight">Pricing</h3>
            <p className="mt-3 text-slate-600">Choose the plan that fits your workflow.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <PricingCard
              tier="Starter"
              price="Free"
              bullets={["3 components", "Basic support", "Community access"]}
            />

            <PricingCard
              tier="Pro"
              price="₹799/mo"
              bullets={["Full component library", "Unlimited projects", "Priority support"]}
              highlight={true}
            />

            <PricingCard
              tier="Enterprise"
              price="Custom"
              bullets={["Dedicated design system", "Onboarding", "Team training"]}
            />
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-20">
          <div className="bg-indigo-600 rounded-3xl p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between shadow-xl">
            <div>
              <h4 className="text-white text-2xl font-semibold">Ready to build faster?</h4>
              <p className="text-indigo-100 mt-2 text-sm">
                Start building with premium UI components generated from Vercel v0.
              </p>
            </div>

            <a
              href="#pricing"
              className="mt-6 sm:mt-0 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:bg-indigo-50 transition"
            >
              Get Started
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-8 border-t text-center text-slate-500 mt-16">
        © {new Date().getFullYear()} VeroProduct — All rights reserved.
      </footer>
    </div>
  );
}
