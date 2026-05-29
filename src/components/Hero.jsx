import { ArrowRight, ShieldCheck } from "lucide-react";

function Hero() {
  return (
    <section className="overflow-hidden bg-[#fffaf5]" id="home">
      <div className="mx-auto grid min-h-[76svh] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1fr_0.82fr] lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black leading-[1.05] text-[#1f4d5c] sm:text-5xl lg:text-7xl">
            Spreading education with love and awareness with purpose.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#625446] sm:text-xl">
            Amrit Aashray is a youth-led initiative supporting children through
            education with love and care, spreading social awareness, and
            building women safety solutions for safer communities.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 font-bold text-white shadow-[0_18px_40px_rgba(242,140,40,0.34)] transition hover:-translate-y-0.5"
              href="#volunteer"
            >
              Join Us
              <ArrowRight size={18} />
            </a>

            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#1f4d5c] px-6 py-3 font-bold text-[#1f4d5c] transition hover:bg-[#1f4d5c] hover:text-white"
              href="#work"
            >
              Explore Our Work
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {["Education Support", "Awareness Drives", "Women Safety App"].map(
              (item) => (
                <div
                  className="flex items-center gap-2 rounded-lg border border-[#f2d6bd] bg-white px-4 py-3 text-sm font-bold text-[#1f4d5c] shadow-sm"
                  key={item}
                >
                  <ShieldCheck className="text-[#f28c28]" size={18} />
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="hero-logo-wrap">
          <div className="hero-logo-frame">
            <img src="/logo.jpeg" alt="Amrit Aashray Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
