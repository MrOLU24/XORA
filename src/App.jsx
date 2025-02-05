import React from "react";
import Header from "./Sections/header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Testimonial from "./sections/Testimonial";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features/>
      <Pricing/>
      <Faq/>
      <Testimonial/>
    </main>
  );
}
export default App;