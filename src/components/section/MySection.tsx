"use client";

import { ReactNode } from "react";

type propsType = {
  children?: ReactNode;
  extraClassName?: string;
  sectionClassName?: string;
  dataSectionName?: string;
};

const MySection = (props: propsType) => {
  const { children, extraClassName, sectionClassName, dataSectionName } = props;
  return (
    <section className={sectionClassName} data-section-name={dataSectionName}>
      <div
        className={`max-w-[100vw] overflow-x-hidden bg-transparent px-5  lg:py-16 ${extraClassName} ${
          extraClassName?.includes("py-") ? "" : "py-10"
        }`}
      >
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[100rem]">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySection;
