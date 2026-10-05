import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredService = {
  kicker: "Signature Service",
  title: "Ceramic Coatings",
  priceNote: "Starting from",
  price: "$950",
  description:
    "For those adamant about maintaining the investment and aesthetics of their vehicle to the utmost standard. Utilising polymer glass technology to enhance the protective qualities of your vehicle while immensely deepening gloss levels.",
  inclusions: [
    "Professional-grade polymer glass coating",
    "Deepens gloss and enhances depth",
    "Hydrophobic — easier washing",
    "Multi-year paint protection",
  ],
  ctaPrimary: {
    label: "Book Ceramic Coating",
    href: "/contact",
  },
  ctaSecondary: {
    label: "Learn More",
    href: "/services/ceramic-coatings",
  },
}

type ServiceCard = {
  id: string
  title: string
  description: string
  image: string
  href: string
  priceFrom: string
}

const serviceCards: ServiceCard[] = [
  {
    id: "exterior",
    title: "Exterior Detailing",
    description:
      "Regular, comprehensive, and maintenance details. Hand wash, decontamination, and sealant.",
    image: "/exterior.png",
    href: "/services/exterior",
    priceFrom: "From $99",
  },
  {
    id: "interior",
    title: "Interior Detailing",
    description:
      "Deep extraction, leather conditioning, and full interior restoration.",
    image: "/interior.png",
    href: "/services/interior",
    priceFrom: "From $129",
  },
  {
    id: "other",
    title: "Other Services",
    description:
      "Headlight restoration, leather conditioning, pre-sale details, and more.",
    image: "/other.png",
    href: "/services/other",
    priceFrom: "From $49",
  },
]

const Service = () => {
  return (
    <>
      <section className="bg-zinc-50 pt-20 pb-12 lg:pt-28 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            What We Do
          </span>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            Transparent pricing, obsessive attention to detail, and results
            that speak for themselves.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-zinc-100">
              <Image src="/ceramic.png" fill alt="ceramic-coating" className="object-cover" />
            </div>

            <div className="flex flex-col gap-5">
              <span className="text-xs font-medium uppercase tracking-widest text-emerald-600">
                {featuredService.kicker}
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                {featuredService.title}
              </h2>
              <p className="text-sm font-medium text-zinc-500">
                {featuredService.priceNote}{" "}
                <span className="text-lg font-bold text-zinc-900">
                  {featuredService.price}
                </span>
              </p>
              <p className="text-lg leading-relaxed text-zinc-600">
                {featuredService.description}
              </p>

              <ul className="flex flex-col gap-3 pt-2">
                {featuredService.inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-zinc-700"
                  >
                    <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex gap-3">
                <Button size="lg">
                  <Link href={featuredService.ctaPrimary.href}>
                    {featuredService.ctaPrimary.label}
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link href={featuredService.ctaSecondary.href}>
                    {featuredService.ctaSecondary.label}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {serviceCards.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="hover:scale-105 group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300 hover:shadow-lg"
              >

                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <Image src={service.image} className="object-cover" alt={service.title} fill />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {service.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-sm font-medium text-zinc-900">
                      {service.priceFrom}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-zinc-500 transition-colors group-hover:text-zinc-900">
                      Learn more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Service