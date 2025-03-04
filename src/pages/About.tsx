import { NavLink } from "react-router-dom";
import aboutImg from "../assets/undraw_electricity_iu6d.svg";
const About = () => {
  return (
    <div className="md:mx-20 mx-4 my-12 mt-24 min-h-about">
      <div className="flex w-full gap-12 pt-6">
        <img src={aboutImg} alt="about image" className="hidden md:block" />
        <div className="flex flex-4/5 justify-center items-center w-full flex-col">
          <h1 className="pb-4 text-primary md:text-3xl text-2xl font-semibold font-palanquin ">
            About Our System
          </h1>
          <h4 className="dark:text-gray-200 text-center font-semibold font-palanquin ">
            Revolutionizing Complaint Management with AI Technology.
          </h4>
          <p className="pt-4 leading-7 text-justify dark:text-gray-400">
            At the Ethiopian Electric Utility (EEU), we understand that
            providing seamless customer service is crucial for maintaining trust
            and satisfaction. Our AI-Assisted Complaint Management System was
            developed to address the common challenges faced by customers and
            our support teams in handling complaints effectively. By leveraging
            cutting-edge AI technology, we can now offer a more efficient,
            responsive, and user-friendly system for complaint management.
            <br /> Do you want to know more about our mission and vision{"  "}
            <NavLink
              target="_blank"
              className="text-primary"
              to="https://www.eep.com.et/"
            >
              Click Here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
