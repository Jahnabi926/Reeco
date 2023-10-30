import styled from "styled-components";

export const ProductTableContainer = styled.div`
  position: relative;
`;

export const AddItemButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background-color: lightseagreen;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export const AddProductFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

export const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

export const FormButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
`;

export const ErrorContainer = styled.div`
  position: fixed;
  top: -5%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 9px;
  border-radius: 5px;
  text-align: center;
  z-index: 1;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 16px;
`;
