// components/ContactForm.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Check, Loader2 } from "lucide-react"

const services = [
  "Ceramic Coatings",
  "Paint Correction",
  "Comprehensive Exterior Detail",
  "Regular Exterior Detail",
  "Full Interior Detail",
  "Headlight Restoration",
  "Maintenance Detail",
  "Not sure — need advice",
]

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Failed to send")
      setStatus("success")
      e.currentTarget.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-12 text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-emerald-500 text-white">
          <Check className="size-6" />
        </div>
        <h3 className="text-xl font-bold text-zinc-900">Message sent</h3>
        <p className="max-w-sm text-sm text-zinc-600">
          Thanks for reaching out. We'll get back to you within a few hours
          during business hours.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-zinc-900">
          Send us a message
        </h2>
        <p className="mt-1 text-sm text-zinc-500">
          We'll respond within a few hours during business hours.
        </p>
      </div>

      {/* Name + Email in a row on desktop */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Vehicle" name="vehicle" placeholder="e.g. 2020 Toyota Hilux" />
      </div>

      {/* Service dropdown */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-sm font-medium text-zinc-700">
          Service interested in
        </label>
        <select
          id="service"
          name="service"
          className="h-11 rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none transition-colors focus:border-zinc-400 focus:ring-2 focus:ring-zinc-900/5"
          defaultValue=""
        >
          <option value="" disabled>Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-zinc-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your car and what you're after..."
          className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-900/5 resize-y"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="mt-2 w-full sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  )
}

// Small field helper for consistent inputs
function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-zinc-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={cn(
          "h-11 rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900",
          "outline-none transition-colors placeholder:text-zinc-400",
          "focus:border-zinc-400 focus:ring-2 focus:ring-zinc-900/5"
        )}
      />
    </div>
  )
}