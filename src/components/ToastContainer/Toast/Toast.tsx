import React, { useCallback, useEffect } from 'react';
import {
  FiAlertCircle,
  FiXCircle,
  FiInfo,
  FiCheckCircle,
} from 'react-icons/fi';

import { setTimeout } from 'timers';
import { Container } from './styles';
import { IToastMessage, useToast } from '../../../context/ToastContext';

interface IToastProps {
  message: IToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<IToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  const handleRemoveToast = useCallback(
    (id: string) => {
      removeToast(id);
    },
    [removeToast],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      style={style}
      type={message.type}
      has_description={Number(!!message.description)}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => handleRemoveToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
