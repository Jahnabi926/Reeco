import {
  StyledButtonImg,
  StyledButton,
} from "../../../styles/StyledComponents";

const ApproveButton = ({ id, handleClick, imageValue }) => {
  const approveImage = require("../../../images/" + imageValue);

  return (
    <div>
      <StyledButton value={id} onClick={() => handleClick(id)}>
        <StyledButtonImg src={approveImage} alt={imageValue} />
      </StyledButton>
    </div>
  );
};

export default ApproveButton;
