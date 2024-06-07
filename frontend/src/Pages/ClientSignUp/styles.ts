import styled from "styled-components";

interface InputProps {
  isValid: boolean;
}
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  background-color: #f8f8f8;
`;

export const InputField = styled.input<InputProps>`
  margin: 10px 10px 0 10px;
  padding: 5px;
  width: 300px;
  border: none;
  border-bottom: 2px solid ${(props) => (props.isValid ? "#53514e" : "#eb4a46")};
  outline: none;
  color: ${(props) => (props.isValid ? "#53514e" : "#eb4a46")};

  &:focus {
    color: #333333;
  }
`;

export const ErrorMessageWrapper = styled.div`
  text-align: left;
  width: 100%;
`;

export const ErrorMessage = styled.span`
  margin-left: 10px;
  color: #eb4a46;
  font-size: 12px;
`;

export const InputContainer = styled.div`
  position: relative;
  height: 55px;
`;
