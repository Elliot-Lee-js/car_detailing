import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const inclusions = [
  "Full vacuum of the entire interior — including the boot, under seats, and the forgotten corners",
  "Door panels cleaned and protected",
  "Door jambs cleaned and detailed",
  "Door hinges cleaned and lubricated",
  "Kickplates cleaned and protected against scuffs",
  "All interior surfaces — plastics, vinyl, and Alcantara — conditioned and protected",
  "Seats sanitised and surface grime lifted",
  "Centre console and infotainment screens, buttons, and controls cleaned and sanitised",
  "High-touch areas — steering wheel, indicator and wiper stalks — cleaned and sanitised",
]

const extras = [
  { label: "Fabric shampoo and extraction — seats, carpets, and floor mats", price: "$100" },
  { label: "Leather cleanse and condition", price: "$40" },
  { label: "Swissvax leather cleaning", price: "$100" },
]

const Page = () => {
  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="bg-zinc-50 pt-14 pb-12 lg:pt-20 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            WHAT WE DO
          </span>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Interior Detailing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            A complete interior restoration — steam-cleaned, decontaminated,
            and extracted. We remove the dirt, stains, and odours that build up
            over time, and treat every surface your hands touch.
          </p>
        </div>
      </section>

      {/* ===== MAIN CARD ===== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-zinc-200 transition-all duration-300 hover:shadow-lg lg:grid-cols-2">
            {/* IMAGE */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 lg:aspect-auto lg:min-h-[600px]">
              <Image
                src="/interior-1.png"
                fill
                alt="Comprehensive interior detail"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col gap-6 p-8 lg:p-12">
              <div>
                <h2 className="pb-4 text-3xl font-bold tracking-tight text-zinc-900">
                  Description
                </h2>
                <p className="text-zinc-600">
                  A complete interior restoration from the carpets up. We use
                  steam treatment, chemical decontamination, and physical
                  extraction to lift embedded dirt, stains, and odours that
                  regular vacuuming can't touch. Every surface is treated,
                  including the ones you never see. The full interior package
                  includes:
                </p>
              </div>

              {/* INCLUSIONS with green ticks */}
              <ul className="flex flex-col gap-2.5">
                {inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-zinc-700"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* EXTRAS with green ticks and prices */}
              <div>
                <h3 className="my-4 text-2xl font-bold tracking-tight text-zinc-900">
                  Extras
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {extras.map((extra) => (
                    <li
                      key={extra.label}
                      className="flex items-start justify-between gap-4 text-sm text-zinc-700"
                    >
                      <span className="flex items-start gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                        <span>{extra.label}</span>
                      </span>
                      <span className="shrink-0 font-semibold text-zinc-900">
                        {extra.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="mt-2 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                Book Now
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page