import BlogPosts from "@/components/BlogPosts";
import Footer from "@/components/Footer";
import GetHelpForm from "@/components/GetHelpForm";
import Navbar from "@/components/Navbar";
import OurAgencies from "@/components/OurAgencies";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { CiLocationArrow1, CiMail } from "react-icons/ci";
import {
  FaArrowAltCircleUp,
  FaArrowRight,
  FaHandHoldingHeart,
  FaHandsHelping,
  FaWhatsapp,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoBuffer } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { LuHelpingHand } from "react-icons/lu";

export default function Home() {
  return (
    <main>
      {/* =======Header======== */}
      <div className="bg-purple-100 lg:h-screen px-2 lg:px-28">
        {/* ======Navbar======= */}
        <Navbar />

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
                href={"/get-help"}
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
              <a
                href={"#contactUs"}
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
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =======About Us======= */}
      <div
        id="aboutUs"
        className="flex flex-col lg:flex-row items-start justify-between gap-6 px-2 lg:px-28 lg:h-screen py-12 lg:py-16"
      >
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
      <div id="contactUs">
        <OurAgencies />
      </div>

      {/* ======Blog Posts===== */}
      <div id="resources">
        <BlogPosts />
      </div>

      {/* ======Get Help Form====== */}
      <div className="py-12 lg:py-16 px-2 lg:px-28 bg-gray-50" id="#getHelp">
        <div className="flex items-center gap-1 mb-4">
          <FaHandHoldingHeart className="text-2xl" />
          <h1 className="font-bold text-lg lg:text-2xl">
            Get Help Form - Support and Assistance Request
          </h1>
        </div>
        <GetHelpForm />
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
          href={"#contactUs"}
          className="bg-purple-600 hover:bg-purple-400 text-white font-bold px-16 py-3 rounded-sm text-xs lg:text-sm"
        >
          Contact Us
        </Link>
      </div>

      {/* =======Footer======== */}
      <Footer />
    </main>
  );
}
