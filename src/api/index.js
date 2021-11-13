import axios from "axios";
import * as url from "./urlConfig";
import jsSHA from "jssha";

axios.defaults.timeout = 15e3;

axios.defaults.baseURL = "https://ptx.transportdata.tw/MOTC/v2/Tourism/";
axios.defaults.headers.common["Authorization"] = getAuthorizationHeader();

function getAuthorizationHeader() {
  var AppID = "4c91c828058740eea97e56f33959f4d7";
  var AppKey = "PYXieGVFXkXF1Bm2YRubYS3jIR0";

  var GMTString = new Date().toGMTString();
  var ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  var HMAC = ShaObj.getHMAC("B64");
  var Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';

  return { Authorization: Authorization, "X-Date": GMTString /*,'Accept-Encoding': 'gzip'*/ }; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
}

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    // const { data } = response;
    return response;
  },
  (error) => {
    errorHandler(error);
    if (!window.navigator.onLine) {
      alert("網路出了點問題，請重新連線後重整網頁");
      return;
    }
    return Promise.reject(error);
  }
);

function errorHandler(error) {
  if (error.response) {
    switch (error.response.status) {
      case 404:
        console.log("你要找的頁面不存在");
        break;
      case 500:
        console.log("程式發生問題");
        break;
      default:
        console.log(error.message);
        break;
    }
  }
}

const scenicspot = {
  // 取得餐廳
  getScenicSpot(form) {
    return axios.get(url.scenicSpot.getScenicSpots, form).then((response) => response.data);
  },
};

const restaurant = {
  // 取得餐廳
  getRestaurant(form) {
    return axios.get(url.restaurant.getRestaurants, form).then((response) => response.data);
  },
};

const hotel = {
  getHotel(form) {
    return axios.get(url.hotel.getHotels, form).then((response) => response.data);
  },
};

const activity = {
  getActivitiy(form) {
    return axios.get(url.activity.getActivities, form).then((response) => response);
  },
};

export default { scenicspot, restaurant, hotel, activity };
