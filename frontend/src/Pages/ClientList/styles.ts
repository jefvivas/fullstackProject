import styled from "styled-components";

export const ClientCardContainer = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 100%;
  max-width: 320px;
  margin: 10px;
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

export const ClientName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const ClientInfo = styled.p`
  margin: 5px 0;
  font-size: 0.9rem;
  color: #555555;
`;

export const ClientListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: start;
  padding: 5% 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
