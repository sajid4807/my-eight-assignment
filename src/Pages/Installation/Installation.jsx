import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstallApp } from "../../components/utility/addToBD";
import InstallApps from "../../components/InstallApps/InstallApps";

const Installation = () => {

    const data = useLoaderData()
    const [installList, setInstallLIst] =useState([])
    const [sort, setSort] =useState('')

    const handleSort = type => {
        setSort(type)
        if( type === 'Download'){
            // const storedByDownload = [...installList].sort((a,b) => a.downloads - b.downloads)
            // chatgpt
            const storedByDownload = [...installList].sort((a,b) => {
                const numA = convertDownloadsToNumber(a.downloads);
      const numB = convertDownloadsToNumber(b.downloads);
      return numA - numB;
            })
            // chatgpt
            setInstallLIst(storedByDownload)
        }

    }

// chatgpt
    const convertDownloadsToNumber = (value) => {
  if (typeof value === 'string') {
    value = value.toUpperCase().trim();
    if (value.endsWith('M')) return parseFloat(value) 
    if (value.endsWith('K')) return parseFloat(value)
  }
  return parseFloat(value) || 0;
};
// chatgpt


    useEffect(()=> {
        const storedInstallData = getInstallApp()
        // storeBookData.map(id => parseInt(id))
        const convertedInstallAppData = storedInstallData.map(id => parseInt(id))
        const installApp = data.filter(app => convertedInstallAppData.includes(app.id))
        setInstallLIst(installApp)
    },[])

    // const 
    return (
        <div className="max-w-[1435px] mx-3 lg:mx-auto mb-10 lg:mb-20">
            <div className="text-center mt-10 lg:mt-20 mb-5 lg:mb-10">
                <h2 className="text-[#001931] font-bold text-2xl lg:text-5xl mb-1 lg:mb-3">Your Installed Apps</h2>
                <p className="text-[#627382] text-lg lg:text-xl">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="flex justify-between items-center mb-3">
                <p className="text-2xl font-semibold text-[#001931]"><span>{installList.length}</span> Apps Found</p>
                <details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=> handleSort("Download")}>Low-High</a></li>
    {/* <li><a onClick={()=> handleSort("Download")}>High-Low</a></li> */}
  </ul>
</details>
            </div>
            <div>
                {
                    installList.map(app => <InstallApps key={app.id} app={app}></InstallApps>)
                }
            </div>
        </div>
    );
};

export default Installation;