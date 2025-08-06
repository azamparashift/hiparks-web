// import React from 'react';

// const Btn = ({ text }) => {
//   return (
//     <button className="px-[30px] py-[15px] w-fit text-[14px] uppercase inter-sb tracking-[0.1em] bg-black text-[#fff]">
//       {text}
//     </button>
//   );
// };

// export default Btn;

"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

const Btn = ({ text, href, className = "" }) => {
  const baseClass =
    "text-[12px] px-[18px] py-[12px] lg:px-[30px] cursor-pointer lg:py-[15px] w-fit lg:text-[14px] uppercase inter-sb tracking-[0.1em] bg-black text-white";

  const classes = clsx(baseClass, className);

  // If it's a link and starts with `/`, use Next.js Link
  if (href && href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {text}
      </Link>
    );
  }

  // External link or no href = <a>
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  // No href = regular button
  return <button className={classes}>{text}</button>;
};

export default Btn;
