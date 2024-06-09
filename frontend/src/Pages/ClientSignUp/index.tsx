import { useState } from "react";
import {
  InputField,
  LoginContainer,
  LoginForm,
  ErrorMessage,
  ErrorMessageWrapper,
  InputContainer,
} from "./styles";
import RequestButton from "../../Components/RequestButton";
import { postClient } from "../../Services/PostClient";
import { isEmailValid, isNameValid } from "../../Utils/Validators";
import { useClient } from "../../Context/Clients";
import Navbar from "../../Components/Navbar";

const ClientSignUp = () => {
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { setClients } = useClient();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setClientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async (name: string, email: string) => {
    if (!isEnabled()) return;
    const newClient = await postClient({
      name: clientData.name,
      email: clientData.email,
    });
    setClientData({
      name: "",
      email: "",
    });

    setClients((prevClients) => [...prevClients, newClient]);
  };

  const isEnabled = (): boolean => {
    if (!clientData.email || !clientData.name) return false;

    if (!isEmailValid(clientData.email) || !isNameValid(clientData.name))
      return false;
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEnabled()) return;

    setIsLoading(true);

    handleSignUp(clientData.name, clientData.email);
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          <h2>Cadastrar Cliente</h2>
          <InputContainer>
            <InputField
              type="text"
              name="name"
              placeholder="Nome Completo (sem abreviações)"
              value={clientData.name}
              onChange={handleInputChange}
              isValid={isNameValid(clientData.name)}
            />
            {!isNameValid(clientData.name) && (
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
              value={clientData.email}
              onChange={handleInputChange}
              isValid={isEmailValid(clientData.email)}
            />
            {!isEmailValid(clientData.email) && (
              <ErrorMessageWrapper>
                <ErrorMessage>Email inválido</ErrorMessage>
              </ErrorMessageWrapper>
            )}
          </InputContainer>

          <RequestButton
            type="submit"
            isLoading={isLoading}
            text="Cadastrar"
            isEnabled={isEnabled()}
          />
        </LoginForm>
      </LoginContainer>
    </>
  );
};

export default ClientSignUp;
