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
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
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
                    <a
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                      href={url}
                    >
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
            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview_after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />
                  <img
                    className="rounded-3xl"
                    src="/images/screen.jpg"
                    width={855}
                    height={655}
                    alt="screen"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Download;
