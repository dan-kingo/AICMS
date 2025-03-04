import AiImage from "../assets/AI_brain-removebg-preview.png";

const FeatureCard = () => {
  return (
    <div className="dark:bg-dark bg-white shadow-lg rounded-md flex flex-col justify-center gap-2 items-center p-4">
      <img className="w-3/4" src={AiImage} alt="AI Image" />
      <h1 className="md:text-xl text-lg font-semibold font-palanquin">
        AI Powered Categorization
      </h1>
      <p className="text-center dark:text-gray-400 text-gray-600">
        sksdkf fkds;l sfkdn sksdkf fkds;l sfkdnsksdkf fkds;l sfkdn{" "}
      </p>
    </div>
  );
};

export default FeatureCard;
