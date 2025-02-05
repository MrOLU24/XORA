import React from "react";
import Header from "./section/HeaderSection.jsx";
import Hero from "./section/HeroSetion.jsx";
import Features from "./section/FeaturesSection.jsx";
import Pricing from "./section/PricingSection.jsx";
import Faq from "./section/FaqSection.jsx";
import Testimonial from "./section/TestimonialSection.jsx";
import Download from "./section/DownloadSection.jsx";
import Footer from "./section/FooterSection.jsx";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonial />
      <Download />
      <Footer />
    </main>
  );
}

export default App;
