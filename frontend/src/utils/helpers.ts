import { toast } from "react-toastify";

export const handleError = async (cb: any) => {
  try {
    const message = await cb()
    toast.dark(message);
  } catch (error: any) {
    toast.dark(error.response.data.message);
  }
}