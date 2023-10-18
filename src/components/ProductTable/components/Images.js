import { StyledImg } from "../../../styles/TableStyledComponents";
import { ModalImage } from "../../../styles/ModalStyledComponents";

export const TableImage = ({ value }) => (
  <div>
    <StyledImg src={require("../../../images/" + value)} alt={value} />
  </div>
);

export const EditModalImage = ({ value }) => (
  <div>
    <ModalImage src={require("../../../images/" + value)} alt={value} />
  </div>
);
