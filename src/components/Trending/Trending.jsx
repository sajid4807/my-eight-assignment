import { HiOutlineDownload } from "react-icons/hi";
import { IoIosStar } from "react-icons/io";
const Trending = ({apps}) => {
    const {title,image,ratingAvg,downloads} =apps
    // console.log(apps)
    return (
        <div className="card bg-base-100 p-4 shadow-sm">
  <figure>
    <img
      src={image}
      className="w-[316px] h-[316px]"
      alt="Shoes" />
  </figure>
  <div className="">
    <h2 className="card-title my-3">{title}</h2>
    <div className="flex justify-between">
        <button className="btn bg-[#f1f5e8] text-[#00ad76]"><HiOutlineDownload /> {downloads}</button>
        <button className="btn bg-[#FF8811]/15 text-[#FF8811]"><IoIosStar /> {ratingAvg}</button>
        {/* <p>{downloads}</p>
        <p>{ratingAvg}</p> */}
    </div>
  </div>
</div>
    );
};

export default Trending;