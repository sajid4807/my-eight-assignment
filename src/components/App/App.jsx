import { Link } from "react-router";

const App = ({ app }) => {
  const {image,title,ratingAvg,downloads,id} = app;
  return (
    <Link to={`/appDetails/${id}`}>
        <div className="card bg-base-100 p-4 shadow-sm">
      <figure>
        <img
        className="w-[316px] h-[316px]"
          src={image}
          alt=""
        />
      </figure>
      <div className="">
        <h2 className="card-title my-3">{title}</h2>
        <div className="flex justify-between">
            <button className="btn bg-[#f1f5e8] text-[#00ad76]">{downloads}</button>
            <button className="btn bg-[#FF8811]/15 text-[#FF8811]">{ratingAvg}</button>
        </div>
      </div>
    </div>

    </Link>

  );
};

export default App;
