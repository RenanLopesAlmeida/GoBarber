import React from 'react';
import { useTransition } from 'react-spring';

import { Toast } from './Toast';
import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0, transform: 'translateY(0px)' },
      enter: { right: '0%', opacity: 1, transform: 'translateY(20px)' },
      leave: { right: '-120%', opacity: 0, transform: 'translateY(0px)' },
    },
  );
  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
