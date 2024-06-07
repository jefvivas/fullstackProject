import styled from "styled-components";

interface RequestButtonWrapperProps {
  isEnabled: boolean;
}

export const RequestButtonWrapper = styled.button<RequestButtonWrapperProps>`
  background-color: ${(props) => (props.isEnabled ? "#00c8b3" : "#f6f6f6")};
  color: ${(props) => (props.isEnabled ? "#ffffff" : "#dddcdc")};
  border: none;
  cursor: ${(props) => (props.isEnabled ? "pointer" : "not-allowed")};
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
  font-weight: bold;
  font-size: 1rem;
  width: 300px;

  &:hover {
    opacity: 0.7;
  }
`;
