import axios from "axios";
export const CommonApi = async (httpmthod,url,reqBody,reqheader)=>{
    let reqConfig = {
        method:httpmthod,
        url,
        data: reqBody,
        headers: reqheader?reqheader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch((err) => {
        return err
    });
}