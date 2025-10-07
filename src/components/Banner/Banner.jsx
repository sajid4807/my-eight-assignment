import { BiLogoPlayStore } from "react-icons/bi";
// import moduleName from 'module';
// import app from '../../../src/assets/app.png'
// import playStore from './../../src/assets/playStore.png'
import play from "../../../src/assets/palyStore.png";
import app from "../../../src/assets/app.png";
const Banner = () => {
  return (
    <div>
      <div className="w-7xl mx-auto mt-20 text-center">
        <h1 className="mx-auto text-7xl font-bold">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] text-xl mt-5 mb-7">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        {/* <button><img src={play} alt="" className="w-[33px] h-8 mr-2" /> Google Play</button> */}
        <button className="btn mr-4">
          {" "}
          <img src={play} alt="" className="w-[33px] h-8 mr-2" /> Google Play
        </button>
        <button className="btn">
          <img src={app} alt="" className="w-[33px] h-8 mr-2" /> App Store
        </button>
      </div>
      <div className="w-7xl mx-auto mt-10 text-center flex justify-center">
        <img src="../../../src/assets/hero.png" alt=""  />
      </div>
      <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] p-20">
        <h2 className="text-center font-bold text-4xl text-white mb-10">Trusted by Millions, Built for You</h2>
        <div className="flex justify-around">
            <div className="text-center">
                <p className="text-white/80">Total Downloads</p>
                <h3 className="text-white my-2 text-5xl font-extrabold">29.6M</h3>
                <p className="text-white/80">21% more than last month</p>
            </div>
            <div className="text-center">
                <p className="text-white/80">Total Reviews</p>
                <h3 className="text-white my-2 text-5xl font-extrabold">906K</h3>
                <p className="text-white/80">46% more than last month</p>
            </div>
            <div className="text-center">
                <p className="text-white/80">Active Apps</p>
                <h3 className="text-white my-2 text-5xl font-extrabold">132+</h3>
                <p className="text-white/80">31 more will Launch</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
