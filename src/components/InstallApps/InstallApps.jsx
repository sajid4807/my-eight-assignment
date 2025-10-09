import downloadsIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
const InstallApps = ({ app }) => {
    const {image,title,ratingAvg,downloads} = app
//   console.log(app);
  return (
    <div>
      <div className="card card-side py-2 bg-base-100 mb-6 shadow-sm">
        <figure className="ml-2 lg:ml-5">
          <img
            className="w-20 h-20 rounded-lg"
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body p-3 lg:p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="card-title">{title}</h2>

              <div className="flex gap-2 lg:gap-5 items-center">
                <div className="flex items-center text-[#00d390] font-medium">
                  <img src={downloadsIcon} alt="" className="w-4 h-4 mr-2" />
                  <p>{downloads}</p>
                </div>
                <div className="flex items-center text-[#f81] font-medium">
                  <img src={ratingsIcon} alt="" className="w-4 h-4 mr-2" />
                  <p>{ratingAvg}</p>
                </div>
                <div>
                  <p className="text-[#627382]">258 MB</p>
                </div>
              </div>
            </div>
            <button className="btn text-white font-semibold bg-[#00D390]">
              Uninstall
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallApps;
