import httpClient from '../common/http_common';


 

const authenticationToken =  (token="")=>{
    return  httpClient.get(`/authentication/token/?token=${token}`);
}

const createMember=(data)=>{
    return httpClient.post(`/api/register`,data);
}

const login=(data)=>{
    return httpClient.post(`/api/login`,data);
}

const exitsEmail=(data)=>{
    return httpClient.post(`/api/exits-email`,data);
}

const logger={authenticationToken,createMember,login,exitsEmail}
export default logger;