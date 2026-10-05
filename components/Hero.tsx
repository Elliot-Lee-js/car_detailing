
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import Image from "next/image"

const portfolioImages = [
  { src: "/car-1.jpg", alt: "Ceramic coating application" },
  { src: "/car-2.jpg", alt: "Paint correction close-up" },
  { src: "/car-3.jpg", alt: "Interior leather conditioning" },
  { src: "/car-4.jpg", alt: "Headlight restoration" },
  { src: "/car-5.jpg", alt: "Full exterior detail" },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const next = () => setCurrent((i) => (i + 1) % portfolioImages.length)
  const prev = () =>
    setCurrent((i) => (i - 1 + portfolioImages.length) % portfolioImages.length)

  return (
    <section className="relative overflow-hidden bg-zinc-950 text-zinc-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-950 to-zinc-950" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* LEFT — Copy */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-400">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Bespoke Car Detailing
            </span>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Optimal Detailing.
              <span className="block text-3xl mt-1 text-zinc-400">
                Passion for Bespoke Automotive Services.
              </span>
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
              Optimal offers an unpretentious, results-driven service built
              around your needs. Leave your pride and joy in our hands knowing
              it will be handled with passion and professionalism.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="bg-zinc-50 text-zinc-900 hover:bg-zinc-200">
                Book Now
              </Button>
            </div>
          </div>

          {/* RIGHT — Carousel + Logos */}
          <div className="relative flex flex-col gap-8">
            <div className="relative aspect-[4/5] max-h-[600px] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
              {mounted &&
                portfolioImages.map((img, i) => {
                  const offset = i - current
                  const isActive = i === current

                  return (
                    <div
                      key={img.src}
                      className={cn(
                        "absolute inset-0 transition-all duration-500 ease-out",
                        isActive
                          ? "z-20 opacity-100 scale-100"
                          : "z-10 opacity-40 scale-95 blur-[1px]"
                      )}
                      style={{
                        transform: isActive
                          ? "translateX(0) scale(1)"
                          : `translateX(${offset * 8}%) scale(0.95)`,
                      }}
                    >
                        <div className="">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            priority={i === 0}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                     
                      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-800 to-zinc-900 text-zinc-500">
                        <ImageIcon className="size-12" strokeWidth={1.5} />
                        <span className="text-sm font-medium text-zinc-400">
                          {img.alt}
                        </span>
                        <code className="rounded bg-zinc-950/50 px-2 py-1 text-xs text-zinc-500">
                          {img.src}
                        </code>
                        <span className="text-xs text-zinc-600">
                          Replace with 4:5 image (e.g. 800×1000px)
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                    </div>
                  )
                })}

              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-900/80 p-2 text-zinc-300 backdrop-blur transition hover:bg-zinc-800 hover:text-zinc-50"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-900/80 p-2 text-zinc-300 backdrop-blur transition hover:bg-zinc-800 hover:text-zinc-50"
              >
                <ChevronRight className="size-5" />
              </button>

              <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
                {portfolioImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={cn(
                      "size-1.5 rounded-full transition-all",
                      i === current
                        ? "w-6 bg-zinc-50"
                        : "bg-zinc-500 hover:bg-zinc-300"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}