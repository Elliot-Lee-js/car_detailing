
import Hero from "@/components/Hero";
import BookingCard from "@/components/BookingCard";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main>
      <Hero />
     <AboutUs />
      <section className="pb-20">
        <h2 className="text-3xl font-bold tracking-tight px-3 py-1 mb-5">Our Services</h2>
        <BookingCard />
      </section>
    </main>
  );
}
