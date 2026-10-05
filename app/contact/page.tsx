// app/contact/page.tsx
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <section className="bg-zinc-50 pt-20 pb-12 lg:pt-28 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Get in Touch
          </span>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            Questions, quotes, or bookings — we're here. Reach out and we'll get
            back to you fast.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            {/* LEFT — Form (takes 3 of 5 cols on desktop) */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <div className="flex flex-col gap-8 lg:col-span-2">
              <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold tracking-tight text-zinc-900">
                  Other ways to reach us
                </h2>

                {/* Phone */}
                {/* Nicky */}
                <a
                  href="tel:+61408282892"
                  className="group flex items-start gap-4 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                    <Phone className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-zinc-500">
                      Nicky
                    </span>
                    <span className="text-base font-semibold text-zinc-900">
                      0408 282 892
                    </span>
                    <span className="text-xs text-zinc-500">
                      Partner & Lead Detailer
                    </span>
                  </div>
                </a>

                {/* Charvin */}
                <a
                  href="tel:+61470166067"
                  className="group flex items-start gap-4 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                    <Phone className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-zinc-500">
                      Charvin
                    </span>
                    <span className="text-base font-semibold text-zinc-900">
                      0470 166 067
                    </span>
                      <span className="text-xs text-zinc-500">
                      Partner & Lead Detailer
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:optimalcardetailingservices@gmail.com"
                  className="group flex items-start gap-4 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                    <Mail className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-zinc-500">
                      Email
                    </span>
                    <span className="text-base font-semibold text-zinc-900 break-all">
                      optimalcardetailingservices@gmail.com
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 rounded-xl border border-zinc-200 p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
                    <MapPin className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-zinc-500">
                      Service area
                    </span>
                    <span className="text-base font-semibold text-zinc-900">
                      Canning Vale / Thornlie
                    </span>
                    <span className="text-xs text-zinc-500">
                      Mobile Booking Available
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 rounded-xl border border-zinc-200 p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
                    <Clock className="size-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-zinc-500">
                      Hours
                    </span>
                    <div className="flex flex-col gap-0.5 text-sm text-zinc-700">
                      <div className="flex justify-between gap-6">
                        <span>Mon – Fri</span>
                        <span className="font-medium text-zinc-900">
                          8:00 AM – 5:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span>Sat - Sun</span>
                        <span className="font-medium text-zinc-900">
                          9:00 AM – 5:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="https://www.instagram.com/optimalgroupperth/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-4 transition-colors hover:border-zinc-300"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-white text-zinc-700">
                    <InstagramLogoIcon className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-zinc-500">
                      Follow our work
                    </span>
                    <span className="text-base font-semibold text-zinc-900">
                      @optimalgroupperth
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Prefer to talk?
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Call or text us — we'll give you an honest recommendation and a
            clear price.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="bg-white text-zinc-900 hover:bg-zinc-200"
            >
              <a href="tel:+61408282892" className="flex items-center">
                <Phone className="mr-2 size-4" />
                0408 282 892
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 text-zinc-500 hover:bg-zinc-800 hover:text-white"
            >
              <a href="mailto:optimalcardetailingservices@gmail.com">
                Email us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
