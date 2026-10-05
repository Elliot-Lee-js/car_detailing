// components/DiscoverOurStory.tsx
"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const milestones = [
  {
    id: "2014",
    label: "Foundations",
    title: "Foundations",
    year: "2014",
    description:
      "Optimal began as a weekend passion project — one car, one driveway, and a relentless obsession with getting the finish perfect. What started as helping friends and family quickly grew into something more.",
    image: "/story/2014.jpg",
  },
  {
    id: "2015",
    label: "Growth",
    title: "Growth",
    year: "2015",
    description:
      "Word spread. By 2015 we were booked out weeks in advance and realised this wasn't a side project anymore — it was a craft worth committing to fully.",
    image: "/story/2015.jpg",
  },
  {
    id: "2016",
    label: "Craft",
    title: "Craft",
    year: "2016",
    description:
      "We invested in proper training, professional-grade equipment, and certification in multi-stage paint correction and ceramic coating application. This is when detail work became a discipline.",
    image: "/story/2016.jpg",
  },
  {
    id: "2017",
    label: "Innovation",
    title: "Innovation",
    year: "2017",
    description:
      "We launched an innovative approach that redefined how we work. By focusing on process, precision, and consistency, we delivered results that stood out — and helped shape the standard for detailing in Perth.",
    image: "/story/2017.jpg",
  },
];

const AUTOPLAY_MS = 5000;

export default function OurStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const active = milestones[activeIndex];

  const goTo = (index: number) =>
    setActiveIndex((index + milestones.length) % milestones.length);

  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [activeIndex, isPaused]);

  return (
    <>
      <section className="bg-zinc-50 pt-20 pb-12 lg:pt-28 lg:pb-16">
        <div className="text-center">
          <span className="uppercase tracking-widest text-zinc-500 text-sm font-semibold">
            About us
          </span>
          <h2 className="mt-3 mb-16 text-center font-serif text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Discover Our Story
          </h2>
          <p className="text-zinc-600 mx-auto max-w-2xl text-lg">
            From a weekend passion project to a Perth detailing studio — this is
            how we got here, and why we still treat every car like it's our own.
          </p>
        </div>
      </section>

      <section className="bg-white py-40 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading — serif, large, centered */}

          {/* Main grid: copy on left, image on right */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* LEFT — Copy */}
            <div className="flex flex-col gap-6">
              {/* Kicker with dot */}
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-zinc-900" />
                <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                  {active.label}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                {active.title}
              </h3>

              {/* Description */}
              <p className="max-w-lg text-lg leading-relaxed text-zinc-600">
                {active.description}
              </p>
            </div>

            {/* RIGHT — Image panel */}
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-zinc-100">
              {/* ===== IMAGE PLACEHOLDER =====
                  Replace with:
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
              */}
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-zinc-400">
                <div className="flex size-32 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-16"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <code className="mt-4 rounded bg-white px-2 py-1 text-xs">
                  {active.image}
                </code>
              </div>
            </div>
          </div>

          {/* Timeline — dots + years + arrows */}
          <div className="mt-20 flex items-end gap-6">
            {/* Timeline line with dots */}
            <div className="relative flex-1">
              {/* Connecting line */}
              <div className="absolute left-0 right-0 top-[7px] h-px bg-zinc-200" />

              {/* Dots */}
              <div className="relative flex justify-between">
                {milestones.map((m, i) => {
                  const isActive = i === activeIndex;
                  const isPast = i < activeIndex;

                  return (
                    <button
                      key={m.id}
                      onClick={() => goTo(i)}
                      aria-label={`Go to ${m.year}`}
                      className="group flex flex-col items-center gap-3"
                    >
                      {/* Dot with tick mark below */}
                      <div className="relative flex flex-col items-center">
                        <div
                          className={cn(
                            "size-3.5 rounded-full border-2 transition-all duration-300",
                            isActive
                              ? "border-zinc-900 bg-zinc-900 ring-4 ring-zinc-900/10"
                              : isPast
                                ? "border-zinc-400 bg-zinc-400"
                                : "border-zinc-300 bg-white group-hover:border-zinc-500",
                          )}
                        />
                        {/* Small stem under active dot */}
                        <div
                          className={cn(
                            "h-6 w-px transition-colors duration-300",
                            isActive ? "bg-zinc-900" : "bg-zinc-200",
                          )}
                        />
                      </div>

                      {/* Year */}
                      <span
                        className={cn(
                          "text-sm transition-colors duration-300",
                          isActive
                            ? "font-semibold text-zinc-900"
                            : "text-zinc-400 group-hover:text-zinc-600",
                        )}
                      >
                        {m.year}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Arrow controls */}
            <div className="flex shrink-0 gap-2 pb-1">
              <button
                onClick={() => {
                  prev();
                  setIsPaused(true);
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                aria-label="Previous milestone"
                className="flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => {
                  next();
                  setIsPaused(true);
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                aria-label="Next milestone"
                className="flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
