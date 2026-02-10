import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
type AbsoluteStatus = "YES" | "No";
const MyNavbar = () => {
  const currentPathName = usePathname();
  const [absoluteStatus, setAbsoluteStatus] = useState<AbsoluteStatus>("YES");
  const fixAbsolute = () => {
    if (!currentPathName) {
      return;
    }
    const wordList = ["details"];
    const hasMatch = wordList.some((singleWord) =>
      currentPathName.includes(singleWord)
    );
    if (hasMatch) {
      setAbsoluteStatus("No");
    }
  };
  useEffect(() => {
    fixAbsolute();
  }, [currentPathName]);

  return (
    <header
      className={`z-50 w-full top-0 ${
        absoluteStatus === "YES" ? "absolute" : ""
      }`}
    >
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
