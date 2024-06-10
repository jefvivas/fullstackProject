import { useState } from "react";

import {
  ErrorMessage,
  ErrorMessageWrapper,
  InputContainer,
  InputField,
  LoginContainer,
  LoginForm,
} from "./styles";
import { isEmailValid, isPasswordValid } from "../../Utils/Validators";
import { logAdmin } from "../../Services/logAdmin";
import RequestButton from "../../Components/RequestButton";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [adminData, setAdminData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const redirectToOtherPage = () => {
    navigate("/clients");
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setAdminData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignIn = async (email: string, password: string) => {
    if (!isEnabled()) return;

    const token = await logAdmin({
      email: adminData.email,
      password: adminData.password,
    });

    if (!token) return;

    localStorage.setItem("token", token);

    setAdminData({
      email: "",
      password: "",
    });

    redirectToOtherPage();
  };

  const isEnabled = (): boolean => {
    if (!adminData.email || !adminData.password) return false;

    if (!isEmailValid(adminData.email) || !isPasswordValid(adminData.password))
      return false;
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    handleSignIn(adminData.email, adminData.password);
    setIsLoading(false);
  };

  return (
    <>
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          <h2>Login</h2>
          <InputContainer>
            <InputField
              type="text"
              name="email"
              placeholder="email"
              value={adminData.email}
              onChange={handleInputChange}
              isValid={isEmailValid(adminData.email)}
            />
            {!isEmailValid(adminData.email) && (
              <ErrorMessageWrapper>
                <ErrorMessage>Email inválido</ErrorMessage>
              </ErrorMessageWrapper>
            )}
          </InputContainer>
          <InputContainer>
            <InputField
              type="password"
              name="password"
              placeholder="senha"
              value={adminData.password}
              onChange={handleInputChange}
              isValid={isPasswordValid(adminData.password)}
            />
            {!isPasswordValid(adminData.email) && (
              <ErrorMessageWrapper>
                <ErrorMessage>Senha inválido</ErrorMessage>
              </ErrorMessageWrapper>
            )}
          </InputContainer>

          <RequestButton
            type="submit"
            isLoading={isLoading}
            text="Logar"
            isEnabled={isEnabled()}
          />
        </LoginForm>
      </LoginContainer>
    </>
  );
};

export default AdminLogin;
