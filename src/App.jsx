import React from "react";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonial from "./sections/Testimonial.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";

function App() {
  return (
    <main className="overflow-hidden">
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
