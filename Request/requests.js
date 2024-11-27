// Get Request
export async function getDatas(url){
    let datas
    let error
    await axios.get(url)
    .then(respo => datas = respo.data)
    .catch(err => error = err)
    return{
        datas,
        error
    }
}

//Post Requests
export async function postData(url,obj){
    let oneData
    let error
    await axios.post(url,obj)
    .then(respo => oneData = respo.data)
    .catch(err => error = err)
    return{
        oneData,
        error
    }
}

//GetDataById
export async function getDataById(url,id){
    let oneData
    let error
    await axios.get(url + "/" + id)
    .then(respo => oneData = respo.data)
    .catch(err => error = err)
    return{
        oneData,
        error
    }
}