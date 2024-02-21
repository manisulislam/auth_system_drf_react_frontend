import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import dayjs from 'dayjs';



const token = localStorage.getItem("access") ? JSON.parse(localStorage.getItem("access")) : ""
const refresh_token = localStorage.getItem("refresh") ? JSON.parse(localStorage.getItem("refresh")) : ""


const baseUrl = "http://localhost:8000/api/v1"

const axiosInstance = axios.create({
    baseURL: baseUrl,
    "content-type": "application/json",
    headers: {
        Authorization: localStorage.getItem("access") ? `Bearer ${token}` : null
    }
})

axiosInstance.interceptors.request.use(async req => {
    if (token) {
        req.headers.Authorization = `Bearer ${token}`
        const user = jwtDecode(token)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
        if (!isExpired) {
            return req
        }
        else {
            const res = await axios.post(`${baseUrl}/auth/token/refresh/`, { refresh: refresh_token })
            console.log(res.data)
            if (res.status === 200) {
                localStorage.setItem("access", JSON.stringify(res.data.access))
                req.headers.Authorization = `Bearer ${res.data.access}`
                return req

            } else {
                const res = await axios.post(`${baseUrl}/auth/logout/`, { "refresh_token": refresh_token })
                if (res.status === 200) {
                    localStorage.removeItem("user")
                    localStorage.removeItem("access")
                    localStorage.removeItem("refresh")
                    
                }
            }
        }
       
    }
    return req
})

export default axiosInstance;