import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Client } from "../../Interfaces/client";
import { getAllClients } from "../../Services/GetClients";

interface ClientContextProps {
  clients: Client[];
  setClients: React.Dispatch<React.SetStateAction<Client[]>>;
}

const ClientContext = createContext<ClientContextProps | undefined>(undefined);

interface ClientProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: ClientProviderProps) {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchInitialUsers = async () => {
      const initialUsers = await getAllClients();
      setClients(initialUsers);
    };

    fetchInitialUsers();
  }, []);

  return (
    <ClientContext.Provider value={{ clients, setClients }}>
      {children}
    </ClientContext.Provider>
  );
}

export function useClient() {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("useClient must be used within a UserProvider");
  }
  return context;
}
