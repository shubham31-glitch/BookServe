import axios from "axios";
// const hostname = "http://localhost:8000/";
const hostname = "https://bookserve-backend.onrender.com/";
axios.defaults.baseURL = hostname;
export default axios;