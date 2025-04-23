import useFeatures from "@/assets/constants/features";

const FeatureCard = () => {
  const features = useFeatures();
  return (
    <>
      {features.map((feature, index) => (
        <div
          key={index}
          className="dark:bg-dark bg-white shadow-lg rounded-md flex flex-col justify-center gap-2 items-center p-4"
        >
          <img className="w-3/4" src={feature.imgUrl} alt={feature.imgUrl} />
          <h1 className="md:text-xl text-lg font-semibold font-palanquin">
            {feature.title}
          </h1>
          <p className="text-center dark:text-gray-400 text-gray-600">
            {feature.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default FeatureCard;
