import {
  ModalButton,
  ModalButtonsContainer,
  ModalContainer,
  ModalText,
} from "./styles";

interface DeleteModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}
const DeleteModal = ({ onCancel, onConfirm }: DeleteModalProps) => {
  return (
    <ModalContainer>
      <ModalText>Deseja realmente excluir este usuário?</ModalText>
      <ModalButtonsContainer>
        <ModalButton isDeleteButton onClick={onConfirm}>
          Sim
        </ModalButton>
        <ModalButton onClick={onCancel}>Cancelar</ModalButton>
      </ModalButtonsContainer>
    </ModalContainer>
  );
};

export default DeleteModal;
