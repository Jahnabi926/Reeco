import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../../redux/actions";
import {
  AddProductFormContainer,
  Input,
  FormButton,
  ErrorMessage,
  ErrorContainer,
} from "../../../styles/NewItemStyledComponent";

const AddProductForm = ({ onCloseForm }) => {
  const [product, setProduct] = useState({
    id: 6,
    icon: "apple.png",
    product_name: "",
    brand: "",
    price: 0,
    quantity: 0,
    total: 0,
    status: "",
    approve: "check.png",
    missing: "cross.png",
    edit: "Edit",
  });

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productTable.data);
  const [error, setError] = useState(null);

  const handleAddProduct = () => {
    const productName = product.product_name.trim();
    const brand = product.brand.trim();
    const price = parseFloat(product.price);

    const duplicateProduct = productList.some(
      (p) =>
        p.product_name.toLowerCase() === product.product_name.toLowerCase() &&
        p.brand.toLowerCase() === product.brand.toLowerCase()
    );

    if (duplicateProduct) {
      setError("A product with the same name and brand already exists!");
      return;
    }

    if (
      !productName ||
      (!productName && !brand) ||
      (!productName && price <= 0)
    ) {
      setError("Product name is required.");
      return;
    }
    if (!brand || (!brand && price <= 0)) {
      setError("Brand is required.");
      return;
    }
    if (isNaN(price) || price <= 0 || (price <= 0 && productName && brand)) {
      setError("Price should be a valid number greater than 0.");
      return;
    }

    dispatch(addProduct(product));
    onCloseForm();
  };

  const handleProductNameChange = (e) => {
    setError(null);
    setProduct({ ...product, product_name: e.target.value });
  };

  const handleBrandChange = (e) => {
    setError(null);
    setProduct({ ...product, brand: e.target.value });
  };

  const handlePriceChange = (e) => {
    setError(null);
    setProduct({ ...product, price: parseFloat(e.target.value) });
  };

  return (
    <AddProductFormContainer>
      <Input
        type="text"
        placeholder="Product name"
        value={product.product_name}
        onChange={handleProductNameChange}
      />
      <Input
        type="text"
        placeholder="Brand"
        value={product.brand}
        onChange={handleBrandChange}
      />
      <Input
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={handlePriceChange}
      />
      <FormButton onClick={handleAddProduct}>Submit</FormButton>
      {error && (
        <ErrorContainer>
          <ErrorMessage>{error}</ErrorMessage>
        </ErrorContainer>
      )}
    </AddProductFormContainer>
  );
};

export default AddProductForm;
