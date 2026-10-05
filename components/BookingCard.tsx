"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const cards = [
  {
    id: "one",
    title: "Exterior",
    description: "Regular, comprehensive and maintenance details.",
    href: "/services/exterior",
    image: "/exterior.png",
  },
  {
    id: "two",
    title: "Interior",
    description: "General maintenance, extraction, protection and more.",
    href: "/services/interior",
    image: "/interior.png",
  },
  {
    id: "three",
    title: "Ceramic Coatings",
    description: "Long-lasting paint protection with deep gloss and hydrophobic properties.",
    href: "/services/ceramic-coating",
    image: "/ceramic.png",
  },
  {
    id: "four",
    title: "Paint Correction",
    description: "Multi-stage machine polishing to remove swirls, scratches, and defects.",
    href: "/services/paint-correction",
    image: "/paint-correction.png",
  },
  {
    id: "five",
    title: "Other Services",
    description: "Headlight restoration, leather conditioning, pre-sale details and more",
    href: "/services/other",
    image: "/other.png",
  },
];

const BookingCard = () => {
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <div className="flex gap-4 px-3">
      {cards.map((card) => {
        const isHovered = hovered === card.id;
        const isDimmed = hovered !== null && !isHovered;

        return (
          <Link
            href={card.href}
            key={card.id}
            onMouseEnter={() => setHovered(card.id)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(card.id)}
            onBlur={() => setHovered(null)}
            className={cn(
              "group relative h-64 overflow-hidden rounded-2xl bg-zinc-800 p-6 text-white",
              "transition-all duration-500 ease-out",
              isHovered ? "flex-[2.5]" : "flex-1",
              isDimmed ? "opacity-60" : "opacity-100"
            )}
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className={cn(
                "object-cover transition-transform duration-700",
                isHovered ? "scale-105" : "scale-100"
              )}
              sizes="(max-width: 1024px) 50vw, 25vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/60 to-zinc-950/20" />

            <div className="relative z-10 flex h-full flex-col justify-end">
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p
                className={cn(
                  "mt-2 text-sm text-zinc-300",
                  "transition-all duration-500",
                  isHovered ? "opacity-100" : "opacity-0"
                )}
              >
                {card.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BookingCard;