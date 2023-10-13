import Table from "../Table";
import { useSelector, useDispatch } from "react-redux";
import { approveProduct, rejectProduct } from "../../redux/actions";
import { Columns } from "./index.constants";

const ProductTable = () => {
  const tableData = useSelector((state) => state.productTable);
  console.log("tableData", tableData);
  const dispatch = useDispatch();

  const handleProductApproval = (id) => {
    dispatch(approveProduct(id));
  };

  const handleProductMissing = (id) => {
    dispatch(rejectProduct(id));
  };

  return (
    <Table
      columns={Columns(handleProductApproval, handleProductMissing)}
      data={tableData.data}
    />
  );
};

export default ProductTable;
