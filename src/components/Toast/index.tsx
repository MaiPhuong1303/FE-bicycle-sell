import React, { useEffect} from 'react';
import classNames from 'classnames/bind';
import styles from './Toast.module.scss';

const cx = classNames.bind(styles);

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={cx('toast', type)}>
      <span>{message}</span>
      <button onClick={onClose} className={cx('closeButton')}>×</button>
    </div>
  );
};

export default Toast;
