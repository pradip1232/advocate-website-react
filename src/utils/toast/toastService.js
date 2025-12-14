import { toast } from 'react-toastify';
import { TOAST_TYPES } from '../../constants';

class ToastService {
  success(message, options = {}) {
    return toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options,
    });
  }

  error(message, options = {}) {
    return toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options,
    });
  }

  warning(message, options = {}) {
    return toast.warning(message, {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options,
    });
  }

  info(message, options = {}) {
    return toast.info(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options,
    });
  }

  dismiss(toastId) {
    if (toastId) {
      toast.dismiss(toastId);
    } else {
      toast.dismiss();
    }
  }

  promise(promise, messages, options = {}) {
    return toast.promise(
      promise,
      {
        pending: messages.pending || 'Loading...',
        success: messages.success || 'Success!',
        error: messages.error || 'Something went wrong!',
      },
      {
        position: 'top-right',
        ...options,
      }
    );
  }
}

export default new ToastService();