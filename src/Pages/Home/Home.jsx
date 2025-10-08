import { useLoaderData } from 'react-router';
import Banner from '../../components/Banner/Banner';
import TrendingApps from '../../components/TrendingApps/TrendingApps';

const Home = () => {
    const homeData = useLoaderData()
    // console.log(apps)
    return (
        <div>
            <Banner></Banner>
            <TrendingApps homeData={homeData}></TrendingApps>
        </div>
    );
};

export default Home;