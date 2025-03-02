import { Flashlight, Lightbulb, Zap, ZapIcon, ZapOff } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="bg-white py-4 p-20 flex justify-between">
      <div className="flex items-center ">
        <ZapIcon size="32px" className="text-primary" />
        <p className="ps-2 font-semibold text-xl">EEU Compliant System</p>
      </div>

      <div className="flex gap-4 items-center">
        <a href="">About</a>
        <a href="">Help/FAQ</a>
        <a href="">Contact Us</a>
        <a href="">Dark Mode</a>
        <Button variant="outline">Login</Button>
        <Button>Register</Button>
      </div>
    </div>
  );
};

export default Navbar;
