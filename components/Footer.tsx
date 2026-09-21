import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

const productLinks = [
  { label: "Overview", href: "/overview" },
  { label: "Price", href: "/pricing" },
  { label: "Features", href: "/features" },
  { label: "Marketplace", href: "/marketplace" },
]

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
]

const supportLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Status", href: "/status" },
  { label: "Community", href: "/community" },
  { label: "Terms", href: "/terms" },
]

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com/yourhandle", Icon: TwitterLogoIcon },
  { label: "Instagram", href: "https://instagram.com/yourhandle", Icon: InstagramLogoIcon },
  { label: "LinkedIn", href: "https://linkedin.com/company/yourhandle", Icon: LinkedInLogoIcon },
]

const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div className="flex flex-col items-start gap-2 md:items-center lg:items-start">
            <h3 className="text-lg font-bold">Optimal Group</h3>
            <p className="text-sm text-gray-600">
              Detail orientated service
            </p>

            <div className="mt-2 flex items-center gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-600 transition-colors hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  <Icon className="size-5" />
                </a>
              ))}
              <a
                href="https://tiktok.com/@yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                <Image
                  src="/tiktok-solid.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </a>
            </div>
          </div>

          {/* LINK COLUMNS */}
          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Support" links={supportLinks} />
        </div>

        {/* LEGAL ROW */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-300 pt-6 text-sm text-gray-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Optimal Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-900">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string
  links: { label: string; href: string }[]
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <nav aria-label={title}>
      <h3 className="text-lg font-bold tracking-wide">{title}</h3>
      <ul className="mt-3 flex flex-col gap-2">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Footer