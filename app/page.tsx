"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiLocationArrow1, CiMail } from "react-icons/ci";
import {
  FaArrowAltCircleUp,
  FaArrowRight,
  FaHandsHelping,
  FaWhatsapp,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoBuffer } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";

const agencies = [
  {
    id: 1,
    name: "Agency 1",
    about:
      "Committed to breaking the cycle of abuse, we stand as a refuge for survivors, providing empathetic care, resources, and advocacy. Our agency is dedicated to fostering empowerment, raising awareness, and creating a community that stands united against all forms of gender-based violence. Together, we strive to bring about lasting change, empowering individuals to rebuild their lives and fostering a world where respect, equality, and justice prevail",
  },
  {
    id: 2,
    name: "Agency 1",
    about:
      "Committed to breaking the cycle of abuse, we stand as a refuge for survivors, providing empathetic care, resources, and advocacy. Our agency is dedicated to fostering empowerment, raising awareness, and creating a community that stands united against all forms of gender-based violence. Together, we strive to bring about lasting change, empowering individuals to rebuild their lives and fostering a world where respect, equality, and justice prevail",
  },
  {
    id: 3,
    name: "Agency 1",
    about:
      "Committed to breaking the cycle of abuse, we stand as a refuge for survivors, providing empathetic care, resources, and advocacy. Our agency is dedicated to fostering empowerment, raising awareness, and creating a community that stands united against all forms of gender-based violence. Together, we strive to bring about lasting change, empowering individuals to rebuild their lives and fostering a world where respect, equality, and justice prevail",
  },
  {
    id: 4,
    name: "Agency 1",
    about:
      "Committed to breaking the cycle of abuse, we stand as a refuge for survivors, providing empathetic care, resources, and advocacy. Our agency is dedicated to fostering empowerment, raising awareness, and creating a community that stands united against all forms of gender-based violence. Together, we strive to bring about lasting change, empowering individuals to rebuild their lives and fostering a world where respect, equality, and justice prevail",
  },
  {
    id: 5,
    name: "Agency 1",
    about:
      "Committed to breaking the cycle of abuse, we stand as a refuge for survivors, providing empathetic care, resources, and advocacy. Our agency is dedicated to fostering empowerment, raising awareness, and creating a community that stands united against all forms of gender-based violence. Together, we strive to bring about lasting change, empowering individuals to rebuild their lives and fostering a world where respect, equality, and justice prevail",
  },
  {
    id: 6,
    name: "Agency 1",
    about:
      "Committed to breaking the cycle of abuse, we stand as a refuge for survivors, providing empathetic care, resources, and advocacy. Our agency is dedicated to fostering empowerment, raising awareness, and creating a community that stands united against all forms of gender-based violence. Together, we strive to bring about lasting change, empowering individuals to rebuild their lives and fostering a world where respect, equality, and justice prevail",
  },
];

export default function Home() {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <main>
      {/* =======Header======== */}
      <div className="bg-purple-100 lg:h-screen px-2 lg:px-28">
        {/* ======Navbar======= */}
        <div className="flex justify-between items-center py-3 fixed left-0 right-0 top-0 px-2 lg:px-28 bg-purple-100 z-50">
          <div className="flex justify-start items-center gap-1 lg:gap-2 text-base lg:text-xl font-bold text-purple-700">
            <div
              className="flex lg:hidden cursor-pointer hover:animate-spin"
              onClick={() =>
                openNavbar === true ? setOpenNavbar(false) : setOpenNavbar(true)
              }
            >
              <GiHamburgerMenu className="text-purple-900" size={20} />
            </div>
            <FaHandsHelping />
            <h1 className="text">#BreakTheSilence</h1>
          </div>
          <div>
            <ul
              className={`hidden lg:flex items-center justify-between gap-8 text-sm font-semibold `}
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>About Us</Link>
              </li>
              <li>
                <Link href={"/"}>Resources</Link>
              </li>
              <li>
                <Link href={"/"}>Register Agency</Link>
              </li>
              <li>
                <Link href={"/"}>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="mr-3 lg:mr-0=">
            <Link
              href={"/"}
              className="flex items-center gap-2 justify-center p-2 lg:p-3 w-24 lg:w-32 font-semibold rounded-full border border-purple-800 text-xs lg:text-sm"
            >
              <FaArrowAltCircleUp className="text-purple-600 text-lg lg:text-2xl rotate-12" />
              <span>Get Help</span>
            </Link>
          </div>
        </div>

        {/* ======Header Body======== */}
        <div className="pt-20 lg:pt-32 flex flex-col lg:flex-row justify-between lg:gap-6">
          <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('/blueredpic.jpg')] w-full lg:w-9/12 pb-24 bg-cover lg:rounded-3xl">
            <h1 className="w-11/12 lg:w-7/12 text-xl lg:text-5xl font-bold lg:font-semibold bg-purple-100 rounded-br-3xl py-3 lg:py-0">
              Breaking the Silence <br></br> Building Strength
            </h1>
            <p className="w-9/12 lg:w-6/12 pt-8 text-xs lg:text-sm bg-purple-100 rounded-br-3xl pr-4">
              Welcome to Our World, where we stand against gender-based
              violence. Together, let&apos;s raise awareness and build a
              community committed to breaking the cycle of abuse. Join us in
              creating a safer and more equitable world for all.
            </p>
            <div className="pt-8 pb-8 lg:pb-24 bg-purple-100 rounded-br-3xl w-7/12 lg:w-5/12">
              <Link
                href={"/"}
                className="flex items-center gap-2 justify-center p-2 lg:p-3 w-36 lg:w-44 font-semibold rounded-full border border-purple-800 text-xs lg:text-sm"
              >
                <FaArrowAltCircleUp className="text-purple-600 text-2xl rotate-12" />
                <span>Get Help</span>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-3/12 mt-4 lg:mt-0">
            <img src="/helpinghands.jpg" className="rounded-3xl h- w-full" />
            <p className="text-xs lg:text-sm mt-3">
              If you or someone you know is experiencing gender-based violence,
              don&apos;t hesitate to reach out. Our support team is here to
              listen, provide resources, and guide you through the journey
              towards healing and empowerment. Your safety and well-being are
              our top priorities. Please contact us immediately; you are not
              alone, and help is available.
            </p>
            <div className="pt-3 pb-4 lg:pb-0 bg-purple-100 rounded-br-3xl">
              <Link
                href={"/"}
                className="flex items-center gap-2 justify-center p-3 font-semibold rounded-full border border-purple-800 text-sm"
              >
                <div className="4/12">
                  <FaArrowAltCircleUp className="text-purple-600 text-6xl rotate-12" />
                </div>
                <div className="w-8/12 flex flex-col items-start">
                  <span>Contact Us</span>
                  <span className="text-xs font-light">
                    Your voice matters, and so does your safety. Reach out to us
                    – together, we can break the silence and build a path
                    towards healing and empowerment.
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          openNavbar ? "flex flex-col lg:hidden" : "hidden"
        } bg-white fixed top-0 left-0 w-72 p-4 shadow-md shadow-gray-50 h-screen z-50`}
      >
        <div className="flex justify-end py-3">
          <AiOutlineClose
            size={20}
            className="hover:animate-spin"
            onClick={() => setOpenNavbar(false)}
          />
        </div>
        <ul className={`flex flex-col gap-6 text-sm font-semibold `}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>About Us</Link>
          </li>
          <li>
            <Link href={"/"}>Resources</Link>
          </li>
          <li>
            <Link href={"/"}>Register Agency</Link>
          </li>
          <li>
            <Link href={"/"}>Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* =======About Us======= */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 px-2 lg:px-28 lg:h-screen py-12 lg:py-16">
        <div className="w-full lg:w-6/12">
          <div className="flex items-center">
            <div className="border-t border-gray-400 flex-grow"></div>
            <div className="text-xl lg:text-3xl text-center font-bold mx-1">
              About <span className="text-purple-600">Us</span>
            </div>
            <div className="border-t border-gray-400 flex-grow"></div>
          </div>
          <p className="text-gray-400 text-xs  text-center my-1">
            Empowering Change, Breaking Silence.{" "}
          </p>

          <h1 className="text-lg lg:text-2xl font-bold mt-4 lg:mt-12 text-center">
            Our Dedication to Ending Gender-Based Violence and{" "}
            <span className="text-purple-600">
              Fostering a Safer, More Equitable World for All.
            </span>
          </h1>

          <p className="text-xs lg:text-sm mt-4">
            We are driven by a passionate commitment to end gender-based
            violence. Our mission is simple yet profound: empower survivors,
            raise awareness, and advocate for a world free from the shackles of
            abuse. With unwavering dedication, we strive to break the silence,
            foster support, and inspire change. Join us in our collective
            journey towards a safer, more equitable future, where every voice is
            heard, and every life is free from violence
          </p>
          <p className="text-xs lg:text-sm mt-4 mb-8">
            Our commitment is unwavering – we are dedicated to eradicating
            gender-based violence. Founded on the principles of empathy,
            empowerment, and advocacy, our mission is to break the cycle of
            abuse and create a world where survivors are supported, voices are
            heard, and change is fostered. Through education, outreach, and
            compassionate care, we strive to empower individuals, challenge
            societal norms, and build a community united against all forms of
            gender-based violence. Join us in our pursuit of a safer and more
            equitable future for everyone.
          </p>
          {/* <Link
            href={"/"}
            className="bg-purple-600 text-white px-10 hidden lg:flex lg:px-16 py-2 lg:py-3 rounded-md text-xs lg:text-sm"
          >
            Contact Us
          </Link> */}
        </div>
        <div className="w-full lg:w-6/12">
          <div className="w-12/12 flex justify-end">
            <img src="/helpinghands.jpg" className="w-9/12" />
          </div>
          <div className="w-12/12 flex justify-start -translate-y-12">
            <img
              src="/hands.jpg"
              className="w-6/12 border-4 border-purple-300"
            />
          </div>
        </div>
      </div>

      {/* =======Our Agencies==== */}
      <div className="py-12 lg:py-16 px-2 lg:px-28 bg-purple-50">
        <div className="flex items-center">
          <div className="border-t border-gray-400 flex-grow"></div>
          <div className="text-xl lg:text-3xl text-center font-bold mx-1">
            Contact Our <span className="text-purple-600">Agencies</span>
          </div>
          <div className="border-t border-gray-400 flex-grow"></div>
        </div>
        <p className="text-gray-500 text-xs lg:text-sm text-center my-1">
          Reach Out for Support{" "}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {agencies.map((data: any) => (
            <div className="bg-white rounded-md pt-6 pb-8 px-6" key={data?.id}>
              <div className="flex justify-between items-center">
                <img src="/hands.jpg" className="h-12 w-12 rounded-full" />
                <div className="flex items-center gap-2 text-white font-bold">
                  <a
                    href="/"
                    className="h-10 w-10 rounded-full flex justify-center items-center bg-purple-400"
                  >
                    <IoCallOutline />
                  </a>
                  <a
                    href="/"
                    className="h-10 w-10 rounded-full flex justify-center items-center bg-blue-400"
                  >
                    <IoCallOutline />
                  </a>
                  <a
                    href="/"
                    className="h-10 w-10 rounded-full flex justify-center items-center bg-green-400"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="/"
                    className="h-10 w-10 rounded-full flex justify-center items-center bg-red-400"
                  >
                    <CiMail />
                  </a>
                  <a
                    href="/"
                    className="h-10 w-10 rounded-full flex justify-center items-center bg-amber-500"
                  >
                    <CiLocationArrow1 />
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <h1 className="font-bold text-md">Samoa Helping Hands</h1>
                <p className="text-sm mt-2">
                  Committed to breaking the cycle of abuse, we stand as a refuge
                  for survivors, providing empathetic care, resources, and
                  advocacy. Our agency is dedicated to fostering empowerment,
                  raising awareness, and creating a community that stands united
                  against all forms of gender-based violence. Together, we
                  strive to bring about lasting change, empowering individuals
                  to rebuild their lives and fostering a world where respect,
                  equality, and justice prevail.
                </p>
                <div className="w-12/12 mt-6">
                  <Link
                    href={"/"}
                    className="bg-white border border-purple-700 text-purple-700 text-sm py-3 px-12 hover:bg-purple-100 rounded-lg flex items-center justify-center gap-2"
                  >
                    <span>View Agency</span> <CiLocationArrow1 size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======Blog Posts===== */}
      <div className="py-12 lg:py-16 px-2 lg:px-28">
        <div className="flex items-center">
          <div className="border-t border-gray-400 flex-grow"></div>
          <div className="text-xl lg:text-3xl text-center font-bold mx-1">
            Helpful <span className="text-purple-600">Resourses</span>
          </div>
          <div className="border-t border-gray-400 flex-grow"></div>
        </div>
        <p className="text-gray-500 text-xs lg:text-sm text-center my-1">
          Empowering Hope, One Resource at a Time{" "}
        </p>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-2">
          <div className="flex items-end lg:col-span-6 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/helpinghands.jpg')] p-6 bg-cover h-72">
            <h1 className="text-white text-xl lg:text-3xl font-bold">
              Breaking the Silence:<br></br> Navigating the Landscape of
              Gender-Based Violence.
            </h1>
          </div>
          <div className="lg:col-span-2 shadow-lg shadow-gray-200 h-72">
            <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/hands.jpg')] h-40 w-full bg-cover"></div>
            <div className="p-2">
              <h1 className="text-sm mb-2">
                Catalyzing Change: Strategies and Solutions for Ending
                Gender-Based Violence
              </h1>
              <Link
                href={"/"}
                className="font-extrabold text-purple-800 text-sm flex items-center"
              >
                View Article
                <FaArrowRight className="animate-bounce" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 shadow-lg shadow-gray-200 h-72">
            <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/helpinghands.jpg')] h-40 w-full bg-cover"></div>
            <div className="p-2">
              <h1 className="text-sm mb-2">
                Catalyzing Change: Strategies and Solutions for Ending
                Gender-Based Violence
              </h1>
              <Link
                href={"/"}
                className="font-extrabold text-purple-800 text-sm flex items-center"
              >
                View Article
                <FaArrowRight className="animate-bounce" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 shadow-lg shadow-gray-200 h-72">
            <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/helpinghands.jpg')] h-40 w-full bg-cover"></div>
            <div className="p-2">
              <h1 className="text-sm mb-2">
                Catalyzing Change: Strategies and Solutions for Ending
                Gender-Based Violence
              </h1>
              <Link
                href={"/"}
                className="font-extrabold text-purple-800 text-sm flex items-center"
              >
                View Article
                <FaArrowRight className="animate-bounce" />
              </Link>
            </div>
          </div>
        </div>

        {/* ======Second Blog Columns======= */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-2">
          <div className="lg:col-span-2 shadow-lg shadow-gray-200 h-72">
            <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/hands.jpg')] h-40 w-full bg-cover"></div>
            <div className="p-2">
              <h1 className="text-sm mb-2">
                Catalyzing Change: Strategies and Solutions for Ending
                Gender-Based Violence
              </h1>
              <Link
                href={"/"}
                className="font-extrabold text-purple-800 text-sm flex items-center"
              >
                View Article
                <FaArrowRight className="animate-bounce" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 shadow-lg shadow-gray-200 h-72">
            <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/helpinghands.jpg')] h-40 w-full bg-cover"></div>
            <div className="p-2">
              <h1 className="text-sm mb-2">
                Catalyzing Change: Strategies and Solutions for Ending
                Gender-Based Violence
              </h1>
              <Link
                href={"/"}
                className="font-extrabold text-purple-800 text-sm flex items-center"
              >
                View Article
                <FaArrowRight className="animate-bounce" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 shadow-lg shadow-gray-200 h-72">
            <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/helpinghands.jpg')] h-40 w-full bg-cover"></div>
            <div className="p-2">
              <h1 className="text-sm mb-2">
                Catalyzing Change: Strategies and Solutions for Ending
                Gender-Based Violence
              </h1>
              <Link
                href={"/"}
                className="font-extrabold text-purple-800 text-sm flex items-center"
              >
                View Article
                <FaArrowRight className="animate-bounce" />
              </Link>
            </div>
          </div>
          <div className="flex items-end lg:col-span-6 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/helpinghands.jpg')] p-6 bg-cover h-72">
            <h1 className="text-white text-xl lg:text-3xl font-bold">
              Breaking the Silence:<br></br> Navigating the Landscape of
              Gender-Based Violence.
            </h1>
          </div>
        </div>
      </div>

      {/* =====Pre Footer======= */}
      <div className="w-full flex flex-col justify-center items-center gap-4 h-72 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/blueredpic.jpg')] bg-contain">
        <h1 className="text-white font-bold text-lg lg:text-2xl text-center hidden lg:flex">
          Your voice matters. Click the &apos;Contact Us&apos; button below{" "}
          <br></br> to reach out and take the first step towards <br></br>{" "}
          support and empowerment
        </h1>
        <h1 className="text-white font-bold text-md lg:text-2xl text-center flex lg:hidden">
          Your voice matters. Click the &apos;Contact Us&apos; button below to
          reach out and take the first step towards support and empowerment
        </h1>
        <Link
          href={"/"}
          className="bg-purple-600 hover:bg-purple-400 text-white font-bold px-16 py-3 rounded-sm text-xs lg:text-sm"
        >
          Contact Us
        </Link>
      </div>

      {/* =======Footer======== */}
      <div className="bg-purple-800  p-4 xl:px-40 pb-16 pt-6">
        <div className="flex flex-col lg:flex-row justify-between items-start text-white">
          <div>
            <h1 className="text-md font-bold">Corporate address</h1>
            <h1 className="text-xs font-semibold mb-1">UK Address</h1>
            <p className="text-xs mb-2">No 2, house Samoa</p>

            <h1 className="text-lg font-bold mt-6">
              Join Our Social Community
            </h1>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=100094794262869&mibextid=LQQJ4d"
                target="_blank"
              >
                <Image
                  src="/facebook.png"
                  alt="Facebook logo"
                  className="w-8"
                  width={100}
                  height={0}
                  priority
                />
              </a>

              <a
                href="https://instagram.com/moricol2022?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
              >
                <Image
                  src="/instagram.png"
                  alt="Facebook logo"
                  className="w-8"
                  width={100}
                  height={0}
                  priority
                />
              </a>

              <Image
                src="/twitter.png"
                alt="Facebook logo"
                className="w-8"
                width={100}
                height={0}
                priority
              />
            </div>
          </div>

          <div>
            <h1 className="text-lg font-bold mt-6 lg:mt-0">Call Us</h1>
            <div className="flex justify-between gap-4">
              <div className="text-xs flex flex-col">
                <a href={`tel:373793`}>+79627636278</a>
                <a href={`tel:376237623`}>+683266863687</a>
                <a href={`tel:2967939`}>+69823569562</a>
              </div>
            </div>
            <h1 className="text-md font-bold mt-6">E-Mail</h1>
            <a href={`mailto:ggdys@ggdy.com`}>gvyibybds@gmail.com</a>

            <h1 className="text-md font-bold mt-6">Websites</h1>
            <div className="flex flex-col items-start">
              <a
                href="https://www.moricolservices.com"
                target="_blank"
                className="text-xs text-blue-700"
              >
                www.moricolservices.com
              </a>
              <a href="/" className="text-xs text-blue-700">
                www.moricolorganicshop.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-2 border-t-2 border-t-white text-white">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-4 text-xs text-semibold">
            <Link href={"/aboutUs"}>Return Policy</Link>
            <Link href={"/aboutUs"}>Customer Support</Link>
            <Link href={"/aboutUs"}>Terms and Conditions</Link>
          </div>
          <p className="font-semibold text-xs text-center mt-4 mb-12">
            Copyright 2023 MORICOL. All rights reserved
          </p>
        </div>
      </div>
    </main>
  );
}
