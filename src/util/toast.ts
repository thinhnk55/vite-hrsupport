import { Slide, toast } from "react-toastify";

export function errorToast(message: string) {
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
  });
}

const SYSTEM_ERROR = 1;
const INVALID_TOKEN = 2;
const INVALID_IP = 3;

export function apiReponseFailed() {
  errorToast("Lỗi không có phản hồi.");
}
export function apiExceptionError() {
  errorToast("Lỗi trong quá trình kết nối.");
}

export function apiCommonError(error: number) {
  if (error == SYSTEM_ERROR) {
    systemErrorToast();
  } else if (error == INVALID_TOKEN) {
    tokenErrorToast();
  } else if (error == INVALID_IP) {
    ipErrorToast();
  } else {
    unknownErrorToast(error);
  }
}

export function systemErrorToast() {
  errorToast("Lỗi hệ thống.");
}

export function tokenErrorToast() {
  errorToast("Token không hợp lệ.");
}

export function ipErrorToast() {
  errorToast("Lỗi địa chỉ IP không được chấp nhận.");
}
export function unknownErrorToast(error: number) {
  errorToast("Lỗi không xác định: " + error);
}
