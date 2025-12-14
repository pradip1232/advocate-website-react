import toastService from './toastService';

// Toast usage examples
export const showSuccessToast = () => {
  toastService.success('Operation completed successfully!');
};

export const showErrorToast = () => {
  toastService.error('An error occurred. Please try again.');
};

export const showWarningToast = () => {
  toastService.warning('Please check your input and try again.');
};

export const showInfoToast = () => {
  toastService.info('Here is some useful information.');
};

export const showPromiseToast = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('Success!') : reject('Failed!');
    }, 2000);
  });

  toastService.promise(promise, {
    pending: 'Processing your request...',
    success: 'Request completed successfully!',
    error: 'Request failed. Please try again.',
  });
};