import { useRef, useEffect } from "react";
import Table from "../Table";
import { useSelector, useDispatch } from "react-redux";
import {
  approveProduct,
  rejectProduct,
  searchProduct,
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
import {
  SearchContainer,
  SearchInput,
} from "../../styles/SearchInputStyledComponent";

const ProductTable = () => {
  const formRef = useRef(null);
  const [isAddItemClicked, setIsAddItemClicked] = useState(false);
  const filteredProducts = useSelector(
    (state) => state.productTable.filteredProducts
  );
  const allProducts = useSelector((state) => state.productTable.data);

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

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    dispatch(searchProduct(searchQuery));
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
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search products..."
          onChange={handleSearch}
        />
      </SearchContainer>
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
        data={filteredProducts.length > 0 ? filteredProducts : allProducts}
      />
    </ProductTableContainer>
  );
};

export default ProductTable;
