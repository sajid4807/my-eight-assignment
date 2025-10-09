const getInstallApp = ()=> {
    const setInstallApp = localStorage.getItem("Install")
    if(setInstallApp){
       const setInstallData = JSON.parse(setInstallApp)
        return setInstallData
    }else{
        return []
    }
}

const addStoreBd = (id) => {
    const setInstallData = getInstallApp()
    if(setInstallData.includes(id)){
        // alert('already exist')
    }else{
        setInstallData.push(id)
        const data = JSON.stringify(setInstallData)
        localStorage.setItem('Install', data)

    }
}

const removeStoreBd = id => {
    const setInstallData = getInstallApp()
    const updatedApps = setInstallData.filter(appId => appId !== id)
    const data = JSON.stringify(updatedApps)
    localStorage.setItem("Install", data)

}

export {addStoreBd,getInstallApp,removeStoreBd}