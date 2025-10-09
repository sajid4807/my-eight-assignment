import { useLoaderData, useParams } from "react-router";
import downloadsIcon from '../../assets/icon-downloads.png';
import ratingsIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { toast } from 'react-toastify';

import { addStoreBd } from "../utility/addToBD";
import { useState } from "react";

const AppDetails = () => {

  
  const { id } = useParams();
  const data = useLoaderData();

  const [install, setInstall] =useState(false)

  const appId = parseInt(id);

  const singleApp = data.find((app) => app.id === appId);
  const { image, title, companyName,description,reviews,downloads,ratingAvg } = singleApp;

// chatgpt
const sortedRatings = [...singleApp.ratings].sort((a, b) => {
  // Extract the numeric value from "5 star", "4 star", etc.
  const getStar = (str) => parseInt(str.split(' ')[0], 10);
  return getStar(b.name) - getStar(a.name);
});
// chatgpt


    const handelInstallClick = id => {
      setInstall(true)
      toast.success("Successful Installed !");
      addStoreBd(id)
    }
  
  return (
    <div className="max-w-[1435px] my-10 lg:my-20 mx-3 lg:mx-auto">
      <div className="flex flex-col lg:flex-row pb-4 items-center border-b border-[#001931]/20 mb-10">
        <figure className="h-[350px]">
          <img className="w-[350px] h-[350px] bg-base-100 shadow-sm" src={image} alt="" />
        </figure>
        <div className="lg:card-body">
          <div className="border-b border-[#001931]/20 pb-4 lg:pb-7">
            <h2 className="text-[#001931] text-3xl font-bold mt-3 lg:mt-0 mb-1">{title}</h2>
            <p className="text-xl text-[#627382]">
              Developed by {''}
              <span className="font-semibold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>
          <div className="flex gap-5 lg:gap-12 my-4 lg:my-8">
            <div>
                <img src={downloadsIcon} alt="" />
                <p className="text-[#001931]/80 text-lg lg:text-xl my-1">Downloads</p>
                <h3 className="text-[#001931] text-2xl lg:text-5xl font-bold">{downloads}</h3>
            </div>
            <div>
                <img src={ratingsIcon} alt="" />
                <p className="text-[#001931]/80 text-lg lg:text-xl my-1">Average Ratings</p>
                <h3 className="text-[#001931]  text-2xl lg:text-5xl font-bold" >{ratingAvg}</h3>
            </div>
            <div>
                <img src={reviewIcon} alt="" />
                <p className="text-[#001931]/80 text-lg lg:text-xl my-1">Total Reviews</p>
                <h3 className="text-[#001931]  text-2xl lg:text-5xl font-bold">{reviews}</h3>
            </div>
          </div>
          <div className="card-actions">
      <button disabled={install} onClick={() => handelInstallClick(id)} className={`btn ${install ? " text-black": "bg-[#00D390] text-white"}`}>{install? "Installed":"Install Now (291 MB)"}</button>
    </div>
        </div>
      </div>
      <div>
    <h2 className="font-semibold text-2xl mb-2.5 lg:mb-5">Ratings</h2>
  <div className="border-b border-[#001931]/20 pb-3 mb-10">
    <BarChart
        width={1430}
        height={250}
        data={sortedRatings}
        layout="vertical"
        margin={{ top: 10, right: 30, bottom: 10 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis type="number"/>
        <YAxis type="category"  dataKey="name"/>
        <Tooltip />
        <Bar dataKey="count" fill="#FF9500" barSize={25}  />
        <Bar dataKey="name" fill="#FF9500" barSize={25}  />
      </BarChart>
  </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Description</h3>
        <p className="text-[#627382] text-xl">{description}</p>
      </div>
      </div>
    </div>
  );
};

export default AppDetails;
