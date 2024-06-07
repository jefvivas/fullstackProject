import { useState, useEffect } from "react";
import DeleteModal from "../../Components/Modal/DeleteModal";
import { useClient } from "../../Context/Clients";
import {
  UserCardContainer,
  UserName,
  UserInfo,
  UserListContainer,
  DeleteButton,
  EditButton,
} from "./styles";
import { MdDelete, MdEdit } from "react-icons/md";
import { Client } from "../../Interfaces/client";
import { deleteClient } from "../../Services/DeleteClient";
import EditModal from "../../Components/Modal/EditModal";
import Navbar from "../../Components/Navbar";

const UserList = () => {
  const { clients, setClients } = useClient();
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleDeleteClick = (client: Client) => {
    setSelectedClient(client);
    setIsDeleteModalOpen(true);
  };


  const handleEditClick = (client: Client) => {
    setSelectedClient(client);
    setIsEditModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedClient) {
      deleteClient(selectedClient._id);
      const updatedClients = clients.filter(
        (existingClient) => existingClient._id !== selectedClient._id
      );
      setClients(updatedClients);

      setIsDeleteModalOpen(false);
      setSelectedClient(null);
    }
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setSelectedClient(null);
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  return (
    <>
      <Navbar />
      <UserListContainer>
        {clients && (
          <>
            {clients.map((client) => (
              <UserCardContainer key={client._id}>
                <DeleteButton onClick={() => handleDeleteClick(client)}>
                  <MdDelete />
                </DeleteButton>
                <EditButton onClick={() => handleEditClick(client)}>
                  <MdEdit />
                </EditButton>
                {isDeleteModalOpen &&
                  selectedClient &&
                  selectedClient._id === client._id && (
                    <DeleteModal
                      onCancel={handleCancelDelete}
                      onConfirm={handleConfirmDelete}
                    />
                  )}
                {isEditModalOpen &&
                  selectedClient &&
                  selectedClient._id === client._id && (
                    <EditModal
                      isOpen={isEditModalOpen}
                      client={selectedClient}
                      closeModal={toggleEditModal}
                    />
                  )}
                <UserName>{client.name}</UserName>
                <UserInfo>Email: {client.email}</UserInfo>
              </UserCardContainer>
            ))}
          </>
        )}
      </UserListContainer>
    </>
  );
};

export default UserList;
