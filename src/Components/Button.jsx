import clsx from "clsx";
import React from "react";

const Button = ({ icon, children, href, containerClassNane, onClick }) => {
  const Inner = () => (
    <>
      <span>
        <span>Maker</span>
        {icon && (
          <img
            className="size-10 mr-5 object-container z-10"
            src={icon}
            alt="cicle"
          />
        )}
        <span>{children}</span>
      </span>
    </>
  );
  return href ? (
    <a
      className={clsx(
        "relative, p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassNane
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative, p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassNane
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};
export default Button;
