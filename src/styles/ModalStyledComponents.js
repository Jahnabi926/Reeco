import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: absolute;
  z-index: 9;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledEditModal = styled.div`
  background-color: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 6px;
  padding: 12px 16px;
  position: relative;
  height: 300px;
  width: 400px;
`;
export const StyledMissingModal = styled(StyledEditModal)`
  height: 100px;
`;
export const ModalClose = styled.span`
  position: absolute;
  right: 8px;
  top: 4px;
  font-size: 15px;
  cursor: pointer;
`;
export const TextMuted = styled.p`
  color: #888;
  margin-top: 5px;
`;
export const Product = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const ModalImage = styled.img`
  max-width: 150px;
  margin-right: 20px;
`;
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProductDetailsContent = styled.span`
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid lightgrey;
`;
export const ActionButtons = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const CancelButton = styled.button`
  background-color: white;
  color: darkgreen;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;
export const SendButton = styled.button`
  background-color: darkgreen;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;
export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #5cb85c;
  color: white;
  border-radius: 50%;
  margin: 0 10px;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
