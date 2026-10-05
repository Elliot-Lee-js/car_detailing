// components/ServiceCard.tsx
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type Service = {
  id: string;
  title: string;
  tagline: string;
  time: string;
  price: {
    small: string;
    large: string;
  };
  list: string[];
  image: string;
  href: string;
};

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export default function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:scale-102 duration-300 hover:shadow-lg",
        className,
      )}
    >
      <div className="relative w-full overflow-hidden bg-zinc-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
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
  );
}
