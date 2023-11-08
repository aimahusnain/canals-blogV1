"use client";

// ... imports
import React, { useState } from "react";

import Logo from "./Logo";
import { MoonIcon, SunIcon } from "../icons";
import { cx } from "../../utils";

import { SafeUser } from '@/types/type'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

const Header = ({ currentUser }: { currentUser: SafeUser | null }) => {
  const [mode, setMode] = useState("light");

  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };


  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between drop-shadow-xl">
      <Logo />

      <button
        className="inline-block sm:hidden z-50"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className="w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize items-center flex sm:hidden fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300"
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/blogs" className="mx-2">
          Blogs
        </Link>
        <Link href="/create" className="mx-2">
          Create
        </Link>
        <Link href="/category" className="mx-2">
          Category
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize items-center hidden sm:flex fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/blogs" className="mx-2">
          Blogs
        </Link>
        <Link href="/create" className="mx-2">
          Create
        </Link>
        <Link href="/category" className="mx-2">
          Category
        </Link>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-light text-dark" : "bg-dark text-light"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <div className="flex gap-4">
        {/* <Link href="/sign-up">
          <button className="bg-emerald-500 py-4 px-7 shadow rounded-lg text-white">
            LOGIN
          </button>
        </Link>
        <Link href="/sign-in">
          <button className="bg-emerald-500 py-4 px-7 shadow rounded-lg text-white">
          </button>
        </Link> */}
          {currentUser ? <button onClick={() => signOut()}>Sign out</button> : <Link href='/register'>Register</Link>}
      </div>
    </header>
  );
};

export default Header;
