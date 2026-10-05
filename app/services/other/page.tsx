import ServiceCard from "@/components/ServiceCard";

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

export const otherServices: Service[] = [
  {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    tagline:
      "Cloudy, yellowed headlights are a safety hazard and an eyesore. We restore clarity through multi-stage sanding and polishing — then seal it in with ceramic coating for years of protection.",
    time: "2–3 hours",
    price: {
      small: "$150",
      large: "$150",
    },
    list: [
      "Multi-stage wet sanding removes oxidised plastic layers",
      "2-stage machine polish to remove sanding marks",
      "Restores the 'brand new' headlight finish",
      "Finished with 2 layers of ceramic coating",
      "Protection lasts for years to come",
      "Improves nighttime visibility and safety",
    ],
    image: "/headlight.png",
    href: "/services/other/headlight-restoration",
  },
  {
    id: "maintenance-detail",
    title: "Maintenance Detail",
    tagline:
      "A personalised plan to keep your vehicle pristine — fortnightly or monthly, tailored to what your car actually needs each visit. Ideal for enthusiasts, businesses, and anyone who wants their car to stay sharp without lifting a finger.",
    time: "1–2 hours per visit",
    price: {
      small: "From $90",
      large: "From $140",
    },
    list: [
      "Personalised fortnightly or monthly plan",
      "Choose which components to address each visit",
      "Exterior: tires and wheels cleaned",
      "Snow-foam pre-rinse and two-bucket hand wash",
      "Fuel cap cleaned every visit",
      "Windows cleaned inside and out",
      "Hydrophobic sealant applied (Optix FinalBoost)",
      "Interior vacuum and light cleaning (Optix Pink Stuff)",
      "Door jambs, infotainment, and high-touch areas protected",
    ],
    image: "/maintenance.png",
    href: "/services/other/maintenance-detail",
  },
];

const page = () => {
  return (
    <>
      <section className="bg-zinc-50 pt-20 pb-12 lg:pt-28 lg:pb-16">
        <div className="text-center max-w-7xl mx-auto px-6 lg:px-8">
          <span className="uppercase text-zinc-500 tracking-widest text-xs font-semibold">
            What we do
          </span>
          <h1 className="mt-3 font-serif text-4xl text-zinc-900 font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Other Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            A car that stays clean is a car you're proud of. Our maintenance
            plans keep it that way, and our headlight restoration brings back
            the clarity that makes the front end feel brand new again.
          </p>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto p-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 gap-12 sm:mt-12 lg:mt-20">
            {otherServices.map((service) => (
              <ServiceCard service={service} key={service.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
