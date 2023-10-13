import React from "react";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import {
  Container,
  Img,
  ButtonImg,
  Button,
} from "./components/StyledComponents";
import { useSelector, useDispatch } from "react-redux";
import { approveProduct, rejectProduct } from "../src/redux/actions";

const Status = ({ status }) => {
  const backgroundColor = status === "Approved" ? "green" : "red";
  return <span style={{ backgroundColor }}>{status}</span>;
};

const App = () => {
  const tableData = useSelector((state) => state.reducer);
  console.log("tableData", tableData);
  const dispatch = useDispatch();

  const handleProductApproval = (id) => {
    dispatch(approveProduct(id));
  };

  const handleProductMissing = (id) => {
    dispatch(rejectProduct(id));
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "icon",
        Cell: ({ cell: { value } }) => (
          <div>
            <Img src={require("./images/" + value)} alt={value} />
          </div>
        ),
      },
      { Header: "Product name", accessor: "product_name" },
      { Header: "Brand", accessor: "brand" },
      { Header: "Price", accessor: "price" },
      { Header: "Quantity", accessor: "quantity" },
      { Header: "Total", accessor: "total" },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ cell }) => {
          return <Status status={cell.row.values.status} />;
        },
      },
      {
        Header: "",
        accessor: "approve",
        Cell: ({ cell }) => {
          const id = cell.row.id;
          const approveImage = require("./images/" + cell.row.values.approve);
          return (
            <div>
              <Button value={id} onClick={() => handleProductApproval(id)}>
                <ButtonImg src={approveImage} alt={cell.row.values.approve} />
              </Button>
            </div>
          );
        },
      },
      {
        Header: "",
        accessor: "missing",
        Cell: ({ cell }) => {
          const id = cell.row.id;
          const missingImage = require("./images/" + cell.row.values.missing);
          return (
            <div>
              <Button value={id} onClick={() => handleProductMissing(id)}>
                <ButtonImg src={missingImage} alt={cell.row.values.missing} />
              </Button>
            </div>
          );
        },
      },
      {
        Header: "",
        accessor: "edit",
        Cell: ({ cell }) => (
          <div>
            <Button value={cell.row.values.edit}>{cell.row.values.edit}</Button>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <Container>
      <Navbar />
      <Table columns={columns} data={tableData.data} />
    </Container>
  );
};
export default App;
