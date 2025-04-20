"use client";

import React from "react";
import "./styelsheets/components.css";
import Link from "next/link";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="z-[999999999999999999999] bg-[#282C33] w-[1440px] fixed   max-w-[90%] flex justify-between items-center pt-[32px] pb-[8px]">
      <div className="logo w-[50%] flex flex-row justify-start items-center gap-[5px]">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
              fill="white"
            />
          </svg>
        </div>
        <p>huzaifa Iqbal</p>
      </div>

      <div className="menu-lang-cnt w-[50%] flex justify-end gap-[32px]">
        <div className="menu hidden lg:block">
          <ul className="flex justify-center items-center gap-[32px]">
            <li className="font-[16px] font-medium text-white">
              <Link href="/">
                <span className="text-[#C778DD]">#</span>home
              </Link>
            </li>
            <li className="font-[16px] font-medium text-white">
              <Link href="/aboutme">
                <span className="text-[#C778DD]">#</span>about-me
              </Link>
            </li>
            <li className="font-[16px] font-medium text-white">
              <Link href="/projects">
                <span className="text-[#C778DD]">#</span>projects
              </Link>
            </li>
            <li className="font-[16px] font-medium text-white">
              <Link href="/contact">
                <span className="text-[#C778DD]">#</span>contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="lang-change hidden lg:block">
          <select
            name="lang"
            id=""
            className="bg-transparent border-none outline-none"
          >
            <option value="eng" className="bg-transparent">
              EN
            </option>
            <option value="urdu">UR</option>
            <option value="arabic">AR</option>
          </select>
        </div>
        <HiMiniBars3BottomRight  className=" lg:hidden text-white"/>

      </div>

      <style jsx>
        {`
          .logo p {
            color: var(--white, #fff);
            font-family: "Fira Code", monospace;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
          .menu ul li {
            font-family: "Fira Code", monospace;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
