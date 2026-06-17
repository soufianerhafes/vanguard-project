import { useState } from 'react';
import { ArrowUpRight, Award, Crown, X } from 'lucide-react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4';

const NAV_LINKS = ['Projects', 'Studio', 'Offerings', 'Inquire'];

const STATS = [
  { value: '250+', label: 'Brands Transformed' },
  { value: '95%', label: 'Client Retention' },
  { value: '10+', label: 'Years in the Game' },
];

function Brand() {
  return (
    <span className="font-podium font-bold uppercase text-2xl sm:text-3xl tracking-wider text-white">
      VANGUARD
    </span>
  );
}

function GetInTouchButton({ className = '' }: { className?: string }) {
  return (
    <a
      href="#"
      className={`inline-flex items-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/10 px-6 py-3 text-xs tracking-widest uppercase font-inter text-white transition ${className}`}
    >
      Get in Touch
      <ArrowUpRight className="w-4 h-4" />
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Subtle gradient so white text stays legible over the footage */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/60" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
        <Brand />

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition"
            >
              {link}
            </a>
          ))}
        </div>

        <GetInTouchButton className="hidden md:inline-flex" />

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="flex md:hidden flex-col justify-center space-y-1.5"
        >
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-4 h-0.5 bg-white" />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
          <Brand />
          <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X className="w-7 h-7 text-white" />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="font-podium text-4xl sm:text-5xl text-white uppercase"
              style={{
                transitionProperty: 'opacity, transform',
                transitionDuration: '500ms',
                transitionDelay: `${i * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {link}
            </a>
          ))}

          <GetInTouchButton
            className="mt-4"
          />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 h-full flex items-center px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <div className="animate-fade-up flex items-center gap-2 mb-6 lg:mb-8">
            <Crown className="w-4 h-4 text-white/70" />
            <span className="font-inter text-white/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
              World-Class Digital Collective
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 font-podium text-white uppercase leading-[0.92] tracking-tight">
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Design.</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Disrupt.</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Conquer.</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 lg:mt-8 font-inter text-white/70 text-sm sm:text-base leading-relaxed max-w-md">
            We build fierce brand identities
            <br />
            that don&apos;t just turn heads — <span className="text-white font-bold">they lead.</span>
          </p>

          <div className="animate-fade-up-delay-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#"
              className="group inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase font-inter transition"
            >
              See Our Work
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="hidden sm:flex items-center gap-3">
              <Award className="w-8 h-8 text-white/50" />
              <div className="font-inter text-white/60 text-xs tracking-wider uppercase">
                <div>Top-Rated</div>
                <div>Brand Studio</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-up-delay-4 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {stat.value}
                </div>
                <div className="font-inter text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
