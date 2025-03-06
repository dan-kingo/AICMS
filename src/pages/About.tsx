import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import aboutImg2 from "../assets/Electrician-rafiki.svg";

import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="md:mx-20 mx-4 py-12 mt-24 min-h-about">
      {/* Hero section  */}
      <div className="flex w-full gap-12 pt-6 py-24">
        <div className="flex  w-full flex-col justify-center">
          <h1 className="pb-4  lg:text-7xl md:6xl text-4xl font-semibold font-palanquin text-center dark:text-gray-300 text-gray-900">
            Bridging Gaps in{" "}
            <span className="bg-gradient-to-r  from-primary to-blue-700 bg-clip-text text-transparent">
              {" "}
              Customer Service
            </span>{" "}
            with AI.
          </h1>
        </div>
        <div className="w-full  items-center justify-center hidden md:flex">
          <img src={aboutImg2} alt="about image" className=" w-[450px]" />
        </div>
      </div>

      {/* Feature section */}

      <div>
        <h1 className="md:text-4xl text-3xl font-palanquin font-semibold  text-center pb-6">
          Our Features
        </h1>
        <div className="flex justify-around gap-6 py-8 md:flex-nowrap flex-wrap">
          <FeatureCard />
        </div>
      </div>

      {/* get in touch section  */}

      <div className="mt-24 mb-12  flex flex-col justify-center items-center gap-4 ">
        <h1 className="md:text-4xl text-3xl font-palanquin font-semibold">
          Get In Touch
        </h1>
        <p className="text-center dark:text-gray-400">
          Have questions? Contact us for more information.
        </p>
        <NavLink to="/contact-us">
          {" "}
          <Button className="dark:text-white">Contact Us</Button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default About;
