import React from "react";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { approveProduct, rejectProduct } from "../src/redux/actions";

const IMG = styled.img`
  width: 40px;
`;
const ButtonImg = styled.img`
  width: 20px;
`;

const Status = ({ status }) => {
  console.log("Status Component - status:", status, );

  const color = status === "Approved" ? "green" : "red";

  return <p style={{ color }}>{status}</p>;
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
            <IMG src={require("./images/" + value)} alt={value} />
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
          return (
            <Status
              status={cell.row.values.status}
            />
          );
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
              <button value={id} onClick={() => handleProductApproval(id)}>
                <ButtonImg src={approveImage} alt={cell.row.values.approve} />
              </button>
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
              <button value={id} onClick={() => handleProductMissing(id)}>
                <ButtonImg src={missingImage} alt={cell.row.values.missing} />
              </button>
            </div>
          );
        },
      },
      {
        Header: "",
        accessor: "edit",
        Cell: ({ cell }) => (
          <div>
            <button value={cell.row.values.edit}>{cell.row.values.edit}</button>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div className="container">
      <Navbar />
      <Table columns={columns} data={tableData.data} />
    </div>
  );
};
export default App;
