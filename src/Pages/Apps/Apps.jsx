import { useLoaderData } from "react-router";
import App from "../../components/App/App";
import { useState } from "react";

const Apps = () => {

    const appsData = useLoaderData()
    const [search,setSearch] =useState('')
    const trim = search.trim().toLocaleLowerCase()

    const searchApp = trim? appsData.filter(app=> app.title.toLocaleLowerCase().includes(trim)):appsData;
   
    return (
        <div className="max-w-[1435px] mx-3 lg:mx-auto">
            <div className="text-center mt-10 lg:mt-20 mb-5 lg:mb-10">
                <h2 className="text-[#001931] font-bold text-2xl lg:text-5xl mb-1 lg:mb-3">Our All Applications</h2>
                <p className="text-[#627382] text-lg lg:text-xl">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="flex items-center justify-between mb-4">
                <p className="text-lg lg:text-2xl text-[#001931] font-semibold"> <span>({searchApp.length})</span> Apps Found</p>
                    <input value={search} onChange={ e => setSearch(e.target.value)} type="search" placeholder="search Apps" className="border border-[#d2d2d2] px-4 py-2 rounded-lg " />
            </div>
            <div className="grid grid-rows-1 lg:grid-cols-4 mb-10 lg:mb-20 gap-4 mt-5 lg:mt-10">

            {searchApp.length > 0 ? (
                    searchApp.map(app => <App key={app.id} app={app} />)
                    ) : (
                    <p className="col-span-full text-center text-gray-500">
                        {/* work later */}
                        No apps match your search.
                    </p>
                    )}

                {/* {
                    searchApp.map(app => <App key={app.id} app={app}></App>)
                } */}
            </div>
        </div>
    );
};

export default Apps;