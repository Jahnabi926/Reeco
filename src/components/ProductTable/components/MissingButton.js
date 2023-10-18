import {
  StyledButtonImg,
  StyledButton,
} from "../../../styles/TableStyledComponents";

const MissingButton = ({ id, handleClick, imageValue }) => {
  const missingImage = require("../../../images/" + imageValue);
  return (
    <div>
      <StyledButton value={id} onClick={() => handleClick(id)}>
        <StyledButtonImg src={missingImage} alt={imageValue} />
      </StyledButton>
    </div>
  );
};

export default MissingButton;
