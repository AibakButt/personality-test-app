import { toast, TypeOptions, ToastPosition } from "react-toastify";

type Toast = (
  message: string,
  type: TypeOptions,
  duration?: number,
  position?: ToastPosition,
) => void

const toastMessage: Toast = ( message, type, duration = 3000, position = "top-right") => {
  return toast(message, {
    position,
    type: type,
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

export default toastMessage;

