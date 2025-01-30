import clsx from "clsx";
import React from "react";
import Marker from "./Maker";

const Button = ({
  icon,
  children,
  href,
  containerClassNane,
  onClick,
  markerFill,
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker MarkerFill={markerFill} />
        </span>
        {icon && (
          <img
            className="size-10 mr-5 object-contain z-10"
            src={icon}
            alt="cicle"
          />
        )}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">{children}</span>
      </span>
    </>
  );
  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassNane
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassNane
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};
export default Button;
