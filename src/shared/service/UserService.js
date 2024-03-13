import axios from "axios";

export const checkUser = async () =>{
    return await axios.get(`https://print.kstu.kg/peerinterview/activate/refresh` , {withCredentials: true}); 
}