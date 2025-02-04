import React from "react";
import { Element } from "react-scroll";

const Faq = () => {
  return (
    <Element name="faq" className="relative">
      <div className="container relative z-2 py-28">
        <div>
          <h1 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
            Curiousity didnt kill the Cat, it gave it answers.
          </h1>
          <p className="body-1 max-lg:max-w-sm">
            You've got questions, we've got answers.
          </p>
        </div>
        <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)]  top-0 -z-1 bg-s2" />
      </div>
      <div className="faq-glow_before relative z-2 border-2 border-s1">
        <div className="container flex gap-10 max-lg:block">
          
        </div>
      </div>
    </Element>
  );
};
export default Faq;
