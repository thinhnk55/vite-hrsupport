import { UserInfo } from "./userSlice";
import WebApp from "@twa-dev/sdk";
import {
  apiCommonError,
  apiExceptionError,
  apiReponseFailed,
} from "../../../util/toast";

const base_url = "https://api.congdongaoe.com/hr";
const token = WebApp.initData === "" ? "test_token" : WebApp.initData;
export var IP_ADDRESS = "";

export const fetchIPAddress = async () => {
  try {
    // Replace with actual API call to fetch IP address
    const response = await fetch("https://api.ipify.org");
    if (!response.ok) {
      apiReponseFailed();
    }
    const data = await response.text();
    return data;
  } catch (error) {
    apiExceptionError();
  }
};

export const fetchUserInfo = async () => {
  try {
    const response = await fetch(`${base_url}/user/info`, {
      method: "GET",
      headers: {
        token: token,
        ip: IP_ADDRESS,
      },
    });
    if (!response.ok) {
      apiReponseFailed();
    }
    const result = await response.json();
    console.log("fetchUserInfo: \n" + JSON.stringify(result));
    if (result.e === 0) {
      return result.d as UserInfo;
    } else {
      apiCommonError(result.e);
    }
  } catch (error) {
    apiExceptionError();
  }
};

export const fetchClockIn = async (ip: string) => {
  try {
    const response = await fetch(`${base_url}/clock/in`, {
      method: "GET",
      headers: {
        token: token,
        ip: ip,
      },
    });
    if (!response.ok) {
      apiReponseFailed();
    }
    const result = await response.json();
    console.log("fetchUserInfo: \n" + JSON.stringify(result));
    if (result.e === 0) {
      return result.d as UserInfo;
    } else {
      apiCommonError(result.e);
    }
  } catch (error) {
    apiExceptionError();
  }
};

export const fetchClockOut = async (ip: string) => {
  try {
    const response = await fetch(`${base_url}/clock/out`, {
      method: "GET",
      headers: {
        token: token,
        ip: ip,
      },
    });
    if (!response.ok) {
      apiReponseFailed();
    }
    const result = await response.json();
    console.log("fetchUserInfo: \n" + JSON.stringify(result));
    if (result.e === 0) {
      return result.d as UserInfo;
    } else {
      apiCommonError(result.e);
    }
  } catch (error) {
    apiExceptionError();
  }
};
