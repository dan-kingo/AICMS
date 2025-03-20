import statusData from "@/assets/constants/statusData";

const StatusCard = () => {
  return (
    <>
      {statusData.map((status, index) => {
        return (
          <div
            className="flex gap-8 items-center  rounded-md p-6 lg:mt-8 w-full lg:w-[258px] lg:ml-10 bg-white dark:bg-dark"
            key={index}
          >
            <status.icon className="text-primary" />
            <div>
              <h3 className="text-xl">{status.title}</h3>
              <p className="text-md">{status.number}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default StatusCard;
