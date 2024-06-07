import { styled } from "styled-components";

interface ModalButtonProps {
  isDeleteButton?: boolean;
}

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 9999;
`;

export const ModalText = styled.p`
  margin-bottom: 10px;
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ModalButton = styled.button<ModalButtonProps>`
  background-color: ${(props) =>
    props.isDeleteButton ? "#eb4a46" : "#f6f6f6"};

  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
`;
