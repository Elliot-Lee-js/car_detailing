import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    id: "paint-enhancement",
    title: "Paint Enhancement",
    tagline:
      "Removes roughly 80% of paint defects — swirls, light scratches, marring, and paint transfer — for a finish that genuinely pleases.",
    time: "Whole day",
    price: {
      small: "$800",
      large: "$900",
    },
    list: [
      "Full exterior detail and decontamination before polishing",
      "Multi-stage machine polishing with rotary and dual-action polishers",
      "Coarse and fine compound stages to remove defects",
      "Removes roughly 80% of paint defects",
      "Finished with your choice of Swissvax wax",
      "Months of protection included",
    ],
    image: "/paint-correction.png",
    href: "/services/paint-correction/enhancement",
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    tagline:
      "Our ultimate treatment — removes up to 99% of paint defects for a finish better than the day your car left the factory.",
    time: "2+ days",
    price: {
      small: "Priced on arrival",
      large: "Priced on arrival",
    },
    list: [
      "Full exterior detail and decontamination before polishing",
      "Multi-stage machine polishing with rotary and dual-action polishers",
      "Wet sanding where needed to remove orange peel and overspray",
      "Removes up to 99% of paint defects",
      "Factory defects and deep imperfections corrected",
      "Finished with your choice of Swissvax wax",
      "Months of protection included",
    ],
    image: "/paint-detailing.png",
    href: "/services/paint-correction/full",
  },
];

const Page = () => {
  return (
    <>
      <section className="bg-zinc-50 pt-14 pb-12 lg:pt-20 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            WHAT WE DO
          </span>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Paint Correction
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            Do it once, do it right. We permanently remove swirls, scratches,
            and defects by levelling the clear coat — then lock in the result
            with protection that lasts.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-12 lg:gap-16">
            {packages.map((service) => (
              <div key={service.id}>
                <div
                  className={cn(
                    "grid grid-cols-1 rounded-2xl border border-zinc-200 bg-white transition-all hover:scale-102 duration-300 hover:shadow-lg",
                  )}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl w-full bg-zinc-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-102"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-5 p-6 lg:p-8">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-bold tracking-tight text-zinc-900">
                          {service.title}
                        </h3>
                      </div>

                      <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        {service.time}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-zinc-600">
                      {service.tagline}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-zinc-100" />

                    <div className="flex flex-col gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        What's included
                      </span>
                      <ul className="flex flex-col gap-2">
                        {service.list.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-zinc-700"
                          >
                            <Check className="mt-0.5 size-4  text-emerald-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-2 rounded-xl bg-zinc-50 p-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-500">Small vehicles</span>
                        <span className="font-semibold text-zinc-900">
                          {service.price.small}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <span className="text-zinc-500">Large vehicles</span>
                        <span className="font-semibold text-zinc-900">
                          {service.price.large}
                        </span>
                      </div>
                      <Link
                        href={service.href}
                        className="mt-8 inline-flex h-12 w-fit items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                      >
                        Book Now
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
