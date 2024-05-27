import { UserInfo } from "./userSlice";
import WebApp from "@twa-dev/sdk";
import {
  apiCommonError,
  apiExceptionError,
  apiReponseFailed,
} from "../../../util/toast";

const base_url = "https://api.congdongaoe.com/hr";
const token = WebApp.initData === "" ? "test_token" : WebApp.initData;

export const fetchUserInfo = async () => {
  try {
    const response = await fetch(`${base_url}/user/info`, {
      method: "GET",
      headers: {
        token: token,
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

export const fetchClockIn = async () => {
  try {
    const response = await fetch(`${base_url}/clock/in`, {
      method: "GET",
      headers: {
        token: token,
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

export const fetchClockOut = async () => {
  try {
    const response = await fetch(`${base_url}/clock/out`, {
      method: "GET",
      headers: {
        token: token,
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
