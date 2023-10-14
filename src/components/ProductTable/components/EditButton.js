import { StyledEditButton } from "../../../styles/StyledComponents";

const EditButton = ({ value }) => {
  return (
    <div>
      <StyledEditButton value={value}>{value}</StyledEditButton>
    </div>
  );
};

export default EditButton;
