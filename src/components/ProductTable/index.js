import { useRef, useEffect } from "react";
import Table from "../Table";
import { useSelector, useDispatch } from "react-redux";
import {
  approveProduct,
  rejectProduct,
  selectProduct,
  showMissingModal,
} from "../../redux/actions";
import { Columns } from "./index.constants";
import AddProductForm from "./components/AddProductForm";
import { useState } from "react";
import {
  ProductTableContainer,
  AddItemButton,
} from "../../styles/NewItemStyledComponent";

const ProductTable = () => {
  const formRef = useRef(null);
  const [isAddItemClicked, setIsAddItemClicked] = useState(false);
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

  const handleFormClose = () => {
    setIsAddItemClicked(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        handleFormClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAddItemClicked]);

  return (
    <ProductTableContainer>
      <AddItemButton onClick={() => setIsAddItemClicked(true)}>
        Add Item
      </AddItemButton>
      {isAddItemClicked && (
        <div ref={formRef}>
          {" "}
          <AddProductForm onCloseForm={handleFormClose} />
        </div>
      )}
      <Table
        columns={Columns(handleProductApproval, handleProductMissing)}
        data={tableData.data}
      />
    </ProductTableContainer>
  );
};

export default ProductTable;
