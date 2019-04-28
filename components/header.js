import React from "react";
import Link from "next/link";

export default ({ children, meta }) => (
  <nav className="flex justify-between mx-auto max-w-md mb-8">
    <div className="flex">
      <Link href="/">
        <a className="font-bold no-underline text-2xl text-grey-darkest">
          Example Blog
        </a>
      </Link>
    </div>
    <div className="flex">
      <Link href="/blog">
        <a className="mr-4 font-bold no-underline text-l text-grey-darkest">
          blog
        </a>
      </Link>
      <Link href="/about">
        <a className="font-bold no-underline text-l text-grey-darkest">about</a>
      </Link>
    </div>
  </nav>
);
