import { useState } from "react";
import {
  ModalOverlay,
  ErrorMessage,
  InputField,
  EditForm,
  ErrorMessageWrapper,
  InputContainer,
  TagContainer,
  Tag,
  TagInputContainer,
  TagInput,
  AddTagButton,
  RemoveTagButton,
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
  const [newTag, setNewTag] = useState("");

  const { setClients } = useClient();

  const isEnabled = (clientData: Client): boolean => {
    if (!clientData.email || !clientData.name) return false;

    if (!isEmailValid(clientData.email) || !isNameValid(clientData.name))
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

  const handleAddTag = () => {
    if (newTag && !formData.tags.includes(newTag)) {
      setFormData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, newTag],
      }));
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: prevData.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleEditClient = async (client: Client) => {
    if (!isEnabled(client)) return;
    await editClient(client);
    closeModal();
  };

  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleEdit = async (e: any) => {
    e.preventDefault();

    if (!isEnabled(formData)) return;

    setIsLoading(true);

    await handleEditClient(formData);
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
            <Tag key={index}>
              {tag}
              <RemoveTagButton
                type="button"
                onClick={() => handleRemoveTag(tag)}
              >
                x
              </RemoveTagButton>
            </Tag>
          ))}
        </TagContainer>
        <TagInputContainer>
          <TagInput
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Adicionar nova tag"
          />
          <AddTagButton type="button" onClick={handleAddTag}>
            Adicionar
          </AddTagButton>
        </TagInputContainer>
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
