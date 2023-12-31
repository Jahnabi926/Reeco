import { StyledEditButton } from "../../../styles/TableStyledComponents";
import { showEditModal, selectProduct } from "../../../redux/actions";
import { useDispatch } from "react-redux";

const EditButton = ({ value, product }) => {
  const dispatch = useDispatch();

  const onEditButtonClick = () => {
    dispatch(selectProduct(product));
    dispatch(showEditModal());
  };

  return (
    <div>
      <StyledEditButton value={value} onClick={onEditButtonClick}>
        {value}
      </StyledEditButton>
    </div>
  );
};

export default EditButton;
