import Table from "../Table";
import { useSelector, useDispatch } from "react-redux";
import {
  approveProduct,
  rejectProduct,
  selectProduct,
  showMissingModal,
} from "../../redux/actions";
import { Columns } from "./index.constants";

const ProductTable = () => {
  const tableData = useSelector((state) => state.productTable);
  const dispatch = useDispatch();

  const handleProductApproval = (id) => {
    dispatch(approveProduct(id));
  };

  const handleProductMissing = (product) => {
    dispatch(selectProduct(product));
    dispatch(showMissingModal());
    dispatch(rejectProduct(product.id));
  };

  return (
    <Table
      columns={Columns(handleProductApproval, handleProductMissing)}
      data={tableData.data}
    />
  );
};

export default ProductTable;
