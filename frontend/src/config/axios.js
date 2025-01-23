import axios from "axios"

const instance = axios.create({
    baseURL: 'https://ai-coder-p7pi.onrender.com/',
    headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
})

export default instance