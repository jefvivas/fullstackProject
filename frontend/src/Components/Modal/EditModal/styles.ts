import styled from "styled-components";

interface InputProps {
  isValid: boolean;
}

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  background-color: #f8f8f8;
  z-index: 9999;
  max-height: 80vh;
  overflow-y: auto;
  max-width: 400px;
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
  max-height: 150px;
  overflow-y: auto;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;
`;

export const Tag = styled.span`
  background-color: #007bff3f;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 12px;
  color: #333;
`;

export const RemoveTagButton = styled.button`
  background: none;
  border: none;
  color: #eb4a46;
  font-size: 12px;
  margin-left: 5px;
  cursor: pointer;
`;

export const TagInputContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const TagInput = styled.input`
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  margin-right: 10px;
`;

export const AddTagButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
