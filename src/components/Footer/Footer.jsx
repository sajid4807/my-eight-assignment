import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#001931] py-8 px-5 lg:px-12">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img src={logo} className="w-10 h-10 mr-2" alt="" />{" "}
          <span className="font-bold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </div>
        <div  className="text-[#D9D9D9] hidden  lg:flex items-center">
          <p>Copyright © 2025 - All Right Reserved By Programming Hero Ltd</p>
        </div>
        <div className="text-white">
          <p className="mb-3 font-medium text-lg">Social Links</p>
          <ul className="flex gap-2">
            <li className="bg-white text-black rounded-full h-8 w-8 flex items-center justify-center">
              <FaXTwitter />
            </li>
            <li className="bg-white text-black rounded-full h-8 w-8 flex items-center justify-center">
              <FaLinkedinIn />
            </li>
            <li className="bg-white text-black rounded-full h-8 w-8 flex items-center justify-center">
              <FaFacebookF />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
