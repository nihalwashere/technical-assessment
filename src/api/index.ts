import { auth, googleProvider } from "firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import axios, { AxiosResponse } from "axios";
import { APP_TOKEN } from "utils/constants";
import { UserType } from "types";

// types

type HeadersType = {
  "x-access-token": string;
};

type ExceptionType = {
  success: false;
  message: string;
};

const getHeaders = (): HeadersType => ({
  "x-access-token": localStorage.getItem(APP_TOKEN) || "",
});

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 30000,
});

const Exception = (message: string) => {
  const error: ExceptionType = new Error(message) as any;

  error.success = false;

  return error;
};

const processError = (error: any): never => {
  if (error?.response?.status === 401) {
    window.location.href = "/";
  }

  if (error?.response?.data) {
    // client received an error response (5xx, 4xx)

    throw Exception(error.response.data?.message);
  }

  if (error?.request) {
    // client never received a response, or request never left
    throw Exception("It's not you, it's us, want to give it another try?");
  }

  // anything else
  throw Exception("Oops! Something went wrong.");
};

export const loginWithGoogle = async (): Promise<any> => {
  try {
    return await signInWithPopup(auth, googleProvider);
  } catch (error) {
    return processError(error);
  }
};

export const logout = async (): Promise<void> => {
  try {
    return await signOut(auth);
  } catch (error) {
    return processError(error);
  }
};

type VerifyUserResponse = {
  success: boolean;
  data: UserType;
};

export const verifyUser = async (): Promise<VerifyUserResponse> => {
  try {
    const response: AxiosResponse<VerifyUserResponse> = await API.post(
      "/user/verify",
      {},
      {
        headers: getHeaders(),
      }
    );

    return response.data;
  } catch (error) {
    return processError(error);
  }
};
