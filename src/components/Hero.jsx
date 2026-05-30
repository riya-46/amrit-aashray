import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="overflow-hidden bg-[#fffaf5]" id="home">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:py-16 lg:min-h-[calc(100svh-96px)] lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.82fr)] lg:gap-14 lg:px-8 lg:py-12 xl:gap-16">
        <div className="max-w-3xl">
          <h1 className="text-[clamp(2.45rem,8vw,4rem)] font-black leading-[1.06] text-[#1f4d5c] sm:text-[clamp(3.25rem,7vw,4.65rem)] lg:text-[clamp(3.8rem,5vw,5.35rem)]">
            Spreading education with love and awareness with purpose.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#625446] sm:text-lg sm:leading-8 xl:text-xl">
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

        </div>

        <div className="hero-logo-wrap lg:translate-y-8 xl:translate-y-10">
          <div className="hero-logo-frame">
            <img src="/logo.jpeg" alt="Amrit Aashray Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
