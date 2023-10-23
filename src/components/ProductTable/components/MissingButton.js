import {
  StyledButtonImg,
  StyledButton,
} from "../../../styles/TableStyledComponents";

const MissingButton = ({ product, handleClick, imageValue }) => {
  const missingImage = require("../../../images/" + imageValue);
  return (
    <div>
      <StyledButton onClick={() => handleClick(product)}>
        <StyledButtonImg src={missingImage} alt={imageValue} />
      </StyledButton>
    </div>
  );
};

export default MissingButton;
