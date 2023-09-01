import { toast, type ToastOptions } from 'react-hot-toast'

export const useToaster = (options?: ToastOptions) => {
  return {
    success: (message: string) => toast.success(message, options),
    error: (message: string) => toast.error(message, options),
    loading: (message: string) => toast.loading(message, options),
    dismiss: () => toast.dismiss()
  }
}
