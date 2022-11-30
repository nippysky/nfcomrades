import Hero from "../components/Hero";
import Guide from "../components/Guide";
import Specs from "../components/Specs";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
import Benefits from "../components/Benefits";

export default function Home() {
  return (
    <section className="bg-mainBG w-full">
      <Hero />

      <main>
        <Guide />
        <Specs />
        <Benefits />
        <Roadmap />
        <Footer />
      </main>
    </section>
  );
}
