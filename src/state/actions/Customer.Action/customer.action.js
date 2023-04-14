import axiosInstance from "../../utils/axios";
import { customerConstants } from "./constant";
import { Navigate, useLocation } from "react-router-dom";
import { constants } from "../../utils/constants";

const baseUrl = constants.baseUrl

export const deleteCustomer = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: customerConstants.DELETE_CUSTOMERS_PENDING,
            });
            const res = await axiosInstance.delete(`/Admin/cancelOrder/${id}`);
            console.log("res", res);
            if (res.status === 200) {
                dispatch({
                    type: customerConstants.DELETE_CUSTOMERS_SUCCESS,
                });
                alert("Delete Successfull")
            }
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: customerConstants.DELETE_CUSTOMERS_FAILURE,
                payload: { message: error.message },
            });
        }
    };
};

export const getCustomer = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: customerConstants.GET_CUSTOMERS_PENDING,
            });
            const res = await axiosInstance.get(`${baseUrl}/Customer/customer${id}`);
            console.log("res", res);
            if (res.status === 200) {
                dispatch({
                    type: customerConstants.GET_CUSTOMERS_SUCCESS,
                });
                alert("Delete Successfull")
            }
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: customerConstants.GET_CUSTOMERS_FAILURE,
                payload: { allCustomers: error.message },
            });
        }
    };
};