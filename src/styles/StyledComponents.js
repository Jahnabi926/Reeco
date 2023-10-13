import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 500px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
export const TableStyled = styled.table`
  height: 500px;
  border-collapse: collapse;
  overflow-y: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;
export const Th = styled.th`
  background-color: #55608f;
  text-align: left;
  padding: 15px;
  color: #fff;
`;
export const Td = styled.td`
  position: relative;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
`;
export const Button = styled.button`
  cursor: pointer;
  background-color: wheat;
  border: none;
  border-radius: 4px;
`;
export const Img = styled.img`
  width: 45px;
`;
export const ButtonImg = styled.img`
  width: 20px;
`;
