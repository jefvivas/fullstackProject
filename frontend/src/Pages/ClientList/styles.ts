import styled from "styled-components";

export const UserCardContainer = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 300px;
  margin: 0 10px 20px 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #eb4a46;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
`;

export const EditButton = styled.button`
  position: absolute;
  top: 10px;
  right: 40px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const UserName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const UserInfo = styled.p`
  margin: 5px 0;
  font-size: 0.9rem;
  color: #555555;
`;

export const UserListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 5% 10px;
`;
