import React from "react";
import Header from "./Sections/header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Testimonial from "./sections/Testimonial";
import Download from "./sections/Download";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features/>
      <Pricing/>
      <Faq/>
      <Testimonial/>
      <Download/>
    </main>
  );
}
export default App;