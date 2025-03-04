import Footer from "@/components/Footer";
import aboutImg from "../assets/undraw_electricity_iu6d.svg";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <div className="md:mx-20 mx-4 py-12 mt-24 min-h-about">
      {/* Hero section  */}
      <div className="flex w-full gap-12 pt-6 py-24">
        <img src={aboutImg} alt="about image" className="hidden md:block" />
        <div className="flex flex-4/5  w-full flex-col justify-center">
          <h1 className="pb-4  md:text-7xl text-4xl font-semibold font-palanquin text-center dark:text-gray-300 text-gray-900">
            Bridging Gaps in{" "}
            <span className="bg-gradient-to-r  from-primary to-blue-700 bg-clip-text text-transparent">
              {" "}
              Customer Service
            </span>{" "}
            with AI.
          </h1>
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
