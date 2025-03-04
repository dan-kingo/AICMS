import aboutImg from "../assets/undraw_electricity_iu6d.svg";
import FeatureCard from "@/components/FeatureCard";
const About = () => {
  return (
    <div className="md:mx-20 mx-4 my-12 mt-24 min-h-about">
      {/* Hero section  */}
      <div className="flex w-full gap-12 pt-6 py-24">
        <img src={aboutImg} alt="about image" className="hidden md:block" />
        <div className="flex flex-4/5  w-full flex-col justify-center">
          <h1 className="pb-4  md:text-7xl text-4xl font-semibold font-palanquin text-center dark:text-gray-300 text-gray-900">
            Bridging Gaps in Customer Service with AI.
          </h1>
        </div>
      </div>

      {/* Feature section */}

      <div>
        <h1 className="md:text-3xl text-2xl font-palanquin font-semibold  text-center pb-6">
          Our Features
        </h1>
        <div className="flex justify-around gap-6 py-8 md:flex-nowrap flex-wrap">
          <FeatureCard />
        </div>
      </div>
    </div>
  );
};

export default About;
