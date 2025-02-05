import React from "react";
import { Element } from "react-scroll";
import { links } from "../Contants";
import Marker from "../Components/Maker";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pt-24 pb-32 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center ">
            <div className="relative mr-6 flex-540 max-xl:flex-200 max-lg:flex-256 max-md:flex-100">
              <div className="mb-10">
                <img
                  src="/images/xora.svg"
                  width={160}
                  height={55}
                  alt="xora"
                />
              </div>
              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOS, Andriod, PC, Web - whatever you
                flavor, we've got you covered.
              </p>
              <ul className="flex flex-wrap items-center gap-6 ">
                {links.map(({ id, url, icon }) => (
                  <li
                    key={id}
                    className="downloadd_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a href={url}>
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        className="absolute size-13/20 object-contain"
                        src={"/images/lines.svg"}
                        alt="lines"
                      />
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Download;
