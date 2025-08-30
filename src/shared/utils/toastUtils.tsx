import { toast, ToastOptions } from 'react-toastify';

type SuccessToastOptions = {
  title?: string;
  description?: string;
} & ToastOptions;

export const successToast = ({
  title = 'Success!',
  description,
  ...toastOptions
}: SuccessToastOptions = {}) => {
  toast(
    <div>
      <p className="font-bold text-base">{title}</p>
      {description && <p className="text-sm">{description}</p>}
    </div>,
    {
      type: 'success',
      ...toastOptions,
    }
  );
};

type ErrorToastOptions = {
  title?: string;
  description?: string;
} & ToastOptions;

export const errorToast = ({
  title = 'Error!',
  description,
  ...toastOptions
}: ErrorToastOptions = {}) => {
  toast(
    <div>
      <p className="font-bold text-base">{title}</p>
      {description && <p className="text-sm">{description}</p>}
    </div>,
    {
      type: 'error',
      ...toastOptions,
    }
  );
};
