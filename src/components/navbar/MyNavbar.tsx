import Link from "next/link";
import React from "react";

const MyNavbar = () => {
  return (
    <header className="z-50 absolute w-full top-0">
      <div className=" max-w-[100vw] overflow-x-hidden bg-[black]/50 px-5 py-5 lg:py-10 ">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-7xl">
            <ul className="flex justify-around">
              {[
                { name: "Home", pageLink: "/" },
                { name: "Genre", pageLink: "/" },
                { name: "Search", pageLink: "/" },
              ].map((data, index) => {
                const { name, pageLink } = data;
                return (
                  <li key={index}>
                    <Link href={pageLink} className="lg:text-lg">
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyNavbar;
