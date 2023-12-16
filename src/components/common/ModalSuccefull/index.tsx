import React, { ReactNode } from 'react';
import { Dialog } from '@rneui/themed';
import { Text } from 'react-native';

interface ModalSuccefullProps {
  title: string;
  menssage?: string;
  isVisible: boolean;
  setSuccefull: (isVisible: boolean) => void;
  children?: ReactNode;
}

export const ModalSuccefull: React.FC<ModalSuccefullProps> = ({
  title,
  menssage,
  isVisible,
  setSuccefull,
  children,
}) => {
  return (
    <Dialog isVisible={isVisible} onBackdropPress={() => setSuccefull(false)}>
      <Dialog.Title title={title} />
      <Text>{menssage}</Text>
      {children}
    </Dialog>
  );
};
