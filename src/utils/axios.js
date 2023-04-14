import axios from "axios";
// import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
// import store from "./axios"
// import  api  from "./axios";
import {constants} from "./constants"

// const token = localStorage.getItem("token");

const axiosInstance = axios.create({
    baseURL: constants.baseUrl,
    headers: constants.axiosConfig.headers,
});

axiosInstance.interceptors.request.use((req) => {
    // const { auth } = store.getState();
    const auth = {userAdmin:""}
    if (auth.userAdmin.token) {
        req.headers.Authorization = `Bearer ${auth.userAdmin.token}`;
    }

    return req;
});

axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        console.log("error res", error.response);
        // const navigate = useNavigate();
        if (error.response) {
            console.log("error.response.status", error.response.status);
            return <Navigate replace to="/LoginForm" />;
            // localStorage.clear();
            // return navigate("/signin");
        }
        // const status = error.response ? error.response.status : 500;
        // if (status && status === 500) {
        //     // localStorage.clear();
        //     // store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
        // } else if (status === 401) {
        //     return <Navigate to="/signin" />;
        // }
        return Promise.reject(error);
    }
);

export default axiosInstance;
