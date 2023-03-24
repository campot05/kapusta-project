import { Title, Modal, Text } from './BalanceModal.styled';

const BalanceModal = ({ onClose }) => {
  const handleClickWindow = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Modal onClick={handleClickWindow}>
      <Title>
        Hello! To get started, enter the current balance of your account!
      </Title>
      <Text>You can't spend money until you have it =) </Text>
    </Modal>
  );
};

export default BalanceModal;
