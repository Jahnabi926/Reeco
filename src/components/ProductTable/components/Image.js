import { StyledImg } from "../../../styles/StyledComponents";

const Image = ({ value }) => (
  <div>
    <StyledImg src={require("../../../images/" + value)} alt={value} />
  </div>
);

export default Image;
