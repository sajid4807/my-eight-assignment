import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import TrendingApps from "../../components/TrendingApps/TrendingApps";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const Home = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setHomeData(data);
      setLoading(false);
    }
  }, [data]);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Banner></Banner>
      <TrendingApps homeData={homeData}></TrendingApps>
    </div>
  );
};

export default Home;
