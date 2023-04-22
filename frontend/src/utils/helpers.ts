import toast, { ToastPosition } from 'react-hot-toast';

type Toast = (
  message: string,
  type: 'success' | 'error',
  duration?: number,
  position?: ToastPosition,
) => void

const toastMessage: Toast = ( message, type, duration = 3000, position = "bottom-center") => {
  return type === "success" ? toast.success(message, {
    position,
    duration: duration,
  }) : toast.error(message, {
    position,
    duration: duration,
  });
}

export default toastMessage;

