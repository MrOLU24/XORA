import clsx from "clsx";
import React from "react";
import { Element } from "react-scroll";
import clsx from "clsx";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-968 border-2 border-red-500">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>
            <div>
              <button className={clsx('pricing-head_btn', monthly && 'text-p4' )} onClick={() => setMonthly(true)}>Monthly</button>
              <button className={clsx('pricing-head_btn', !monthly && 'text-p4' )}  onClick={() => setMonthly(false)}>Annual</button>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Pricing;
