import React from 'react';
import axios from "axios";

let instance_axios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "9087dfd7-c6fc-423b-a087-3b9e000bb9b0"}
});

export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance_axios.get(`users?page=${currentPage}&count=${pageSize}`)
    },

    unfollowUser(userID) {
        return instance_axios.delete(`follow/${userID}`)
    },

    followUser(userID) {
        return instance_axios.post(`follow/${userID}`, {})
    },

};

export const profileAPI = {

    getProfile(userID) {
        return instance_axios.get(`profile/` + userID)
    },

    getProfileStatus(userID) {
        return instance_axios.get(`profile/status/` + userID)
    },

    updateProfileStatus(statusText) {
        return instance_axios.put(`profile/status`, {status: statusText})
    },
};

export const authAPI = {

    setAuthMe() {
        return instance_axios.get(`auth/me`)
    },

    authLogin(email, password, rememberMe) {
        return instance_axios.post(`auth/login`, {
            email: email,
            password: password,
            rememberMe: rememberMe
        })
    },
    authLogout() {
        return instance_axios.delete(`auth/login`)
    }
};


// export const getUsers = (currentPage, pageSize) => {
//     return instance_axios.get(`Users?page=${currentPage}&count=${pageSize}`)
//         .then(response => {
//             return response.data;
//         })
// };
//
// export const unfollowUser = (userID) => {
//     return instance_axios.delete(`follow/${userID}`)
//         .then(response => {
//             return response.data;
//         })
// };
//
// export const followUser = (userID) => {
//     return instance_axios.post(`follow/${userID}`, {})
//         .then(response => {
//             return response.data;
//         })
// };
//
// export const setProfile = (userID) => {
//     return instance_axios.get(`profile/${userID}`)
//         .then(response => {
//             return response.data;
//         })
// };
//
// export const setAuthMe = () => {
//     return instance_axios.get(`auth/me`).then(response => {
//         return response.data
//     });
// };



