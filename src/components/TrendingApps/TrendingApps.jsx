import { NavLink } from "react-router";
import Trending from "../Trending/Trending";

const TrendingApps = ({ homeData }) => {
  return (
    <div className="max-w-[1435px] mx-3 lg:mx-auto">
      <div className="text-center mt-10 lg:mt-20">
        <h2 className="text-[#001931] font-bold text-5xl">Trending Apps</h2>
        <p className="text-[#627382] text-xl mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-rows-1 lg:grid-cols-4 gap-4 mt-5 lg:mt-10">
          {homeData.map((apps) => (
            <Trending key={apps.id} apps={apps}></Trending>
          ))}
        </div>
        <NavLink to="/apps">
          <button className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white px-8 py-4 mt-5 lg:mt-10 mb-7 lg:mb-14">
            Show All
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default TrendingApps;
