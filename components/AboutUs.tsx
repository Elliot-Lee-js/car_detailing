
import Image from "next/image"


export default function AboutUs() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Image */}
          <div className="relative aspect-[1] w-full overflow-hidden rounded-2xl bg-zinc-200">
                <Image
                  src="/cover-photo.jpg"
                  alt="Nicky detailing a car at Optimal Group"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              About Us
            </h2>

            <div className="flex flex-col gap-6 text-lg leading-relaxed text-zinc-600">
              <p>
                Optimal Group is a Perth-based automotive detailing studio built
                on a simple idea: every car deserves the same obsessive attention
                to detail, whether it's a brand-new Jimny or a 17-year-old Hilux.
                We're unpretentious and results-driven — no upselling, no
                shortcuts, just proper work done by people who genuinely care
                about the finish.
              </p>

              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <p className="text-base text-zinc-500">
                  Led by Nicky, we treat every vehicle like it's our own. That
                  means honest advice, transparent pricing, and work that speaks
                  for itself. From multi-stage paint corrections and ceramic
                  coatings to full interior restorations, we take on work we can
                  own from start to finish — and we don't hand back a car until
                  it's right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}