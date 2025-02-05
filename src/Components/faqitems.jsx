import clsx from "clsx";
import React from "react";
import { useState } from "react";

const FaqItems = ({ item, index }) => {
  const [activeid, setActive] = useState(null);
  const active = activeid === item.id;
  return (
    <div className="relative z-2 mb-16">
      <div
        className="group flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {
            setActive (activeid === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "max-lg-text-p1"
            )}
          >
            {item.question}
          </div>
        </div>
        <div className={clsx('faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4', active && 'before:bg-p1 after:rotate-0 after:bg-p1')}>
            <div className="g4 size-11/12 rounded-full shadow-300"/>
        </div>
      </div>
    </div>
  );
};

export default FaqItems;
