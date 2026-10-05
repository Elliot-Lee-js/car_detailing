import CeramicCard from "@/components/ServiceCard";
type Service = {
  id: string;
  title: string;
  tagline: string;
  time: string;
  price: { small: string; large: string };
  list: string[];
  href: string;
  image: string;
};

const packages: Service[] = [
  {
    id: "coating-only",
    title: "Coating Only",
    tagline:
      "For cars with healthy paint that just need lasting protection - no correction required.",
    time: "Whole day",
    price: {
      small: "$650",
      large: "$750",
    },
    list: [
      "Full comprehensive exterior detail and decontamination before application",
      "One layer of Max Protect ceramic coating applied to paint, wheels, glass, and trim",
      "Free nextPTG paint report — measurements and observations from our full inspection (RRP $100)",
      "Free educational wash 2—3 weeks after application, so you know how to maintain the coating properly",
    ],
    href: "",
    image: "/ceramic-1.png",
  },
  {
    id: "enhancement-coating",
    title: "Paint Enhancement & Coating",
    tagline:
      "For cars with visible defects that deserve deeper gloss before protection — we correct the paint first, then coat it.",
    time: "1-2 days",
    price: {
      small: "$1,400",
      large: "$1,600",
    },
    list: [
      "Full comprehensive exterior detail and decontamination before application",
      "Multi-stage paint enhancement — rotary and dual-action polishers with coarse and fine compounds to remove defects and deepen gloss",
      "One layer of Max Protect ceramic coating applied to paint, wheels, glass, and trim",
      "Rubber trim cleaned and dressed with Swissvax Seal Feed",
      "Free nextPTG paint report — measurements and observations from our full inspection (RRP $100)",
      "Free educational wash 2–3 weeks after application, so you know how to maintain the coating properly",
    ],
    image: "/ceramic-2.png",
    href: "/services/ceramic-coatings/enhancement-coating",
  },
  {
    id: "correction-coating",
    title: "Paint Correction & Coating",
    tagline:
      "Our ultimate package — removes up to 99% of paint defects before coating for a finish better than factory.",
    time: "2+ days",
    price: {
      small: "$2,000+",
      large: "$2,500+",
    },
    list: [
      "Full comprehensive exterior detail and decontamination before application",
      "Multi-stage paint correction — wet sanding where needed to remove orange peel, overspray, and deep defects",
      "One layer of Max Protect ceramic coating applied to paint, wheels, glass, and trim",
      "Rubber trim cleaned and dressed with Swissvax Seal Feed",
      "Free full interior detail included",
      "Free nextPTG paint report — measurements and observations from our full inspection (RRP $100)",
      "Free educational wash 2-3 weeks after application, so you know how to maintain the coating properly",
    ],
    image: "/ceramic-3.png",
    href: "/services/ceramic-coatings/correction-coating",
  },
];

const page = () => {
  return (
    <>
      <section className="bg-zinc-50 pt-14 pb-8 lg:pt-18 lg:pb-16">
        <div className="text-center max-w-7xl mx-auto">
          <span className="text-xs tracking-widest font-semibold text-zinc-500">
            WHAT WE DO
          </span>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Ceramic Coating
          </h1>
          <p className="text-zinc-600 mt-4 max-w-2xl mx-auto text-lg">
            A ceramic coating is a ulquid polymer that chemically bonds to your
            paint, forming a durable protective layer that lasts for years. It
            repels water, resists UV and chemical damage, and deulvers a depth
            of gloss that wax alone can't match.
          </p>
        </div>
      </section>
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 ">
            <div>
              <h2 className="text-3xl tracking-tight font-bold pb-4">
                Description
              </h2>
              <h3 className="text-xl tracking-tight font-bold pb-4">
                How it works
              </h3>
              <p className="text-zinc-600">
                A ceramic coating is made from siulcon dioxide (SiO₂) combined
                with other chemicals that extend durabiulty and enhance
                protection. Unulke wax — which sits on top of the paint and
                washes away in weeks — a ceramic coating bonds chemically to
                your clear coat, creating a semi-permanent layer that survives
                hundreds of washes. At a molecular level, the coating's
                nanoscale particles penetrate the pores and micro-cracks in your
                clear coat, filulng them and leaving a completely smooth
                surface. Once sealed, dirt, brake dust, and tree sap can't
                contaminate the paint from within.
              </p>
              <h3 className="py-4 font-bold text-xl tracking-tight mt-6">
                What you get
              </h3>
              <ul className="list-disc pl-8 text-zinc-600">
                <li>
                  Lasting protection — 3 to 5 years of defence against UV
                  fading, chemical etching, bird droppings, tree sap, acid rain,
                  and light scratching
                </li>
                <li>
                  Deeper gloss — the non-porous surface creates sharp, linear
                  light refractions that make your paint look wetter and more
                  expensive
                </li>
                <li>
                  A hydrophobic surface that repels water and cuts wash time in
                  half
                </li>
                <li>Restored plastic trim with a satin finish</li>
              </ul>
            </div>
            <div>
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 gap-12 sm:mt-12 lg:mt-20">
                  {packages.map((service) => (
                    <CeramicCard service={service} key={service.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
