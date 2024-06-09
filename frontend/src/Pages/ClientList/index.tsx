import { useState, useEffect } from "react";
import DeleteModal from "../../Components/Modal/DeleteModal";
import { useClient } from "../../Context/Clients";
import {
  ClientCardContainer,
  ClientName,
  ClientInfo,
  ClientListContainer,
  DeleteButton,
  EditButton,
} from "./styles";
import { MdDelete, MdEdit } from "react-icons/md";
import { Client } from "../../Interfaces/client";
import { deleteClient } from "../../Services/DeleteClient";
import EditModal from "../../Components/Modal/EditModal";
import Navbar from "../../Components/Navbar";

const ClientList = () => {
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
      <ClientListContainer>
        {clients && (
          <>
            {clients.map((client) => (
              <ClientCardContainer key={client._id}>
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
                <ClientName>{client.name}</ClientName>
                <ClientInfo>Email: {client.email}</ClientInfo>
              </ClientCardContainer>
            ))}
          </>
        )}
      </ClientListContainer>
    </>
  );
};

export default ClientList;
