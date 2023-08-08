import { Dialog } from 'react-native-elements';
import { Text } from 'react-native';

export const ModalSuccefull = ({
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
