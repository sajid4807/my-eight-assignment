import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstallApp, removeStoreBd } from "../../components/utility/addToBD";
import InstallApps from "../../components/InstallApps/InstallApps";
import Loading from "../Loading/Loading";

const Installation = () => {

    const data = useLoaderData()
    const [installList, setInstallList] =useState([])
    const [sort, setSort] =useState('')
    const [loading,setLoading] =useState(true)


    const handleSort = type => {
        setSort(type)
        if(type === "ratingAvg"){
            const sortedRatings = [...installList].sort(((a,b) => a.ratingAvg - b.ratingAvg))
            setInstallList(sortedRatings)
        }
        if(type === "rating"){
            const sortedRatings = [...installList].sort(((a,b) => b.ratingAvg - a.ratingAvg))
            setInstallList(sortedRatings)
        }
    }
   
     const uninstallApp =id =>{
        alert('remove')
         removeStoreBd(id)
        const removeApp = installList.filter(app => app.id !== id)
        setInstallList(removeApp)
     }

    useEffect(()=> {
        setLoading(true)
        const storedInstallData = getInstallApp()
        const convertedInstallAppData = storedInstallData.map(id => parseInt(id))
        const installApp = data.filter(app => convertedInstallAppData.includes(app.id))
        setInstallList(installApp)
        setLoading(false)
    },[])

    return (
        <div className="max-w-[1435px] mx-3 lg:mx-auto mb-10 lg:mb-20">
            <div className="text-center mt-10 lg:mt-20 mb-5 lg:mb-10">
                <h2 className="text-[#001931] font-bold text-2xl lg:text-5xl mb-1 lg:mb-3">Your Installed Apps</h2>
                <p className="text-[#627382] text-lg lg:text-xl">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="flex justify-between items-center mb-3">
                <p className="text-2xl font-semibold text-[#001931]"><span>{installList.length}</span> Apps Found</p>
                <details className="dropdown dropdown-bottom dropdown-end">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("ratingAvg")}>Low-High</a></li>
    <li><a onClick={()=> handleSort("rating")}>High-Low</a></li>
  </ul>
</details>
            </div>
            <div>

                {
                    loading ?<Loading></Loading>:(
                        
                            installList.map(app => <InstallApps key={app.id} app={app} uninstallApp={uninstallApp}></InstallApps>)
                    )
                }
                {/* {
                    installList.map(app => <InstallApps key={app.id} app={app} uninstallApp={uninstallApp}></InstallApps>)
                } */}
            </div>
        </div>
    );
};

export default Installation;