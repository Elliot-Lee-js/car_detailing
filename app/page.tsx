import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      {/* HERO */}
       <Hero />

      <section>
        <h2>Our Services</h2>
        <div>
          <h3>Interior Detailing</h3>
          <p>...</p>
        </div>
        <div>
          <h3>Ceramic Coatings</h3>
          <p>...</p>
        </div>
      </section>

      <section>
        <h2>Customer Testimonials</h2>
        <article>
          <p>"Great service..." — Ben</p>
        </article>
        <article>
          <p>"Very professional..." — Adam</p>
        </article>
      </section>
    </main>
  );
}
