import { useState } from "react";
import {
  ModalOverlay,
  ErrorMessage,
  InputField,
  EditForm,
  ErrorMessageWrapper,
  InputContainer,
  Tag,
  TagContainer,
} from "./styles";
import RequestButton from "../../../Components/RequestButton";
import { Client } from "../../../Interfaces/client";
import { isNameValid, isEmailValid } from "../../../Utils/Validators";
import { useClient } from "../../../Context/Clients";
import { editClient } from "../../../Services/EditClient";

interface EditModalProps {
  client: Client;
  isOpen: boolean;
  closeModal: () => void;
}

const EditModal = ({ client, isOpen, closeModal }: EditModalProps) => {
  const [formData, setFormData] = useState<Client>(client);
  const [isLoading, setIsLoading] = useState(false);

  const { setClients } = useClient();

  const isEnabled = (clientDataData: Client): boolean => {
    if (!clientDataData.email || !clientDataData.name) return false;

    if (
      !isEmailValid(clientDataData.email) ||
      !isNameValid(clientDataData.name)
    )
      return false;
    return true;
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClient = (client: Client) => {
    if (!isEnabled(client)) return;
    editClient(client);
    closeModal();
  };

  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleEdit = (e: any) => {
    e.preventDefault();

    if (!isEnabled(formData)) return;

    setIsLoading(true);

    handleEditClient(formData);
    setClients((existingClients) =>
      existingClients.map((client) =>
        client._id === formData._id ? formData : client
      )
    );
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleCloseModal}>
      <EditForm onSubmit={handleEdit}>
        <InputContainer>
          <InputField
            type="text"
            name="name"
            placeholder="Nome Completo (sem abreviações)"
            value={formData.name}
            onChange={handleInputChange}
            isValid={isNameValid(formData.name)}
          />
          {!isNameValid(formData.name) && (
            <ErrorMessageWrapper>
              <ErrorMessage>Nome deve ter 3 ou mais caracteres</ErrorMessage>
            </ErrorMessageWrapper>
          )}
        </InputContainer>
        <InputContainer>
          <InputField
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            isValid={isEmailValid(formData.email)}
          />
          {!isEmailValid(formData.email) && (
            <ErrorMessageWrapper>
              <ErrorMessage>Email inválido</ErrorMessage>
            </ErrorMessageWrapper>
          )}
        </InputContainer>
        <TagContainer>
          {formData.tags?.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagContainer>
        <RequestButton
          type="submit"
          isLoading={isLoading}
          text="Editar"
          isEnabled={isEnabled(formData)}
        />
      </EditForm>
    </ModalOverlay>
  );
};

export default EditModal;
