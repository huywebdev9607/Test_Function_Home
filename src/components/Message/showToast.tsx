import React from 'react';
import { Theme, toast, TypeOptions } from 'react-toastify';

export type ShowToastProps = {
  type: TypeOptions;
  theme?: Theme;
  message: string;
};

export function showToast ({
  type,
  theme = 'colored',
  message,
}: ShowToastProps) {
  if(type === "default"){
    return toast(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
    });
  }

  return toast[type](message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme,
  });
}


