import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center text-center md:px-6 px-1">
        <h1 className="font-palanquin text-[26px] md:text-5xl font-semibold">
          Welcome to EEU Complaint System
        </h1>
        <p className="mt-4 text-sm md:text-lg dark:text-gray-400 text-gray-600">
          Submit, track, and resolve complaints right now!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <Button className="dark:text-white">Submit a Complaint</Button>
          <Button variant="outline" className="dark:text-white">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
