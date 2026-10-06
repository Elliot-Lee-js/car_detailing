import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: "regular-exterior",
    title: "Regular Exterior Detail",
    price: "$140",
    time: "1–2 hours",
    tagline:
      "A proper exterior detail without breaking the bank — ideal if you love a clean car but don't have the time.",
    list: [
      "Wheel arches and mudflaps cleaned",
      "Fuel cap cleaned out",
      "Exterior accessories detailed (bullbars, roof racks, and more)",
      "Snow foam touchless pre-wash",
      "Two-bucket physical hand wash",
      "Hydrophobic sealant applied — deep gloss and serious water beading",
      "Touchless or hand dry",
      "Exterior windows cleaned",
      "Tire shine / dressing applied",
      "Plastic trim protection applied",
    ],
    pricing: {
      small: "$140",
      large: "$180",
    },
    image: "/regular-exterior.png",
    href: "/contact",
    ctaLabel: "Book Now",
  },
  {
    id: "comprehensive-exterior",
    title: "Comprehensive Exterior Detail",
    price: "$280",
    time: "Half to full day",
    tagline:
      "Our most thorough exterior service — full decontamination followed by a hand-applied wax for a finish that lasts months.",
    list: [
      "Wheels and tires detailed",
      "Exhaust tip/s cleaned (polishing available on request)",
      "Iron remover to chemically decontaminate paint",
      "Claybar process to physically decontaminate paint",
      "IPA wipe down",
      "Application of chosen wax",
      "Tire shine / dressing applied",
      "Plastic trim protection applied",
    ],
    pricing: {
      small: "$280",
      large: "$340",
    },
    image: "/exterior.jpg",
    href: "/contact",
    ctaLabel: "Book Now",
  },
]

const Page = () => {
  return (
    <>

      <section className="bg-zinc-50 pt-14 pb-12 lg:pt-20 lg:pb-16">
        <div className="text-center mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-medium tracking-widest text-zinc-500">
            WHAT WE DO
          </span>
          <h1 className="font-serif text-4xl font-semibold tracking-tight mt-3 text-zinc-900 sm:text-5xl lg:text-6xl">
            Exterior Detailing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            A complete exterior restoration — decontaminated, corrected, and
            protected. We restore depth and gloss to your paint while adding
            months of protection against the elements.
          </p>
        </div>
      </section>


      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" gap-12 lg:gap-16 grid grid-cols-1 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col  overflow-hidden rounded-2xl border transition-all duration-300 hover:scale-102 hover:shadow-lg "
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={service.image}
                    fill
                    className="object-cover"
                    alt={service.title}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center gap-5 p-8 lg:p-12">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                        {service.title}
                      </h2>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      {service.time}
                    </span>
                  </div>


                  <p className="text-zinc-600">{service.tagline}</p>


                  <ul className="flex flex-col gap-1 pl-5 text-sm text-zinc-600">
                    {service.list.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                        {item}
                      </li>
                      
                    ))}
                  </ul>
                  
                  <div className="rounded-xl bg-zinc-50 p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-500">Small vehicles</span>
                      <span className="font-semibold text-zinc-900">
                        {service.pricing.small}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-zinc-500">Large vehicles</span>
                      <span className="font-semibold text-zinc-900">
                        {service.pricing.large}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Page